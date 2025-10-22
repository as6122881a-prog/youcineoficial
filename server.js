const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database(path.join(__dirname, 'users.db'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'youcine_secret', resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Create users table if not exists
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    subscribed INTEGER DEFAULT 1
  )`);
});

// Public home / register
app.get('/', (req, res) => {
  res.render('index', { error: null });
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.render('index', { error: 'Preencha todos os campos.' });
  db.run('INSERT INTO users(name,email,password) VALUES(?,?,?)', [name, email, password], function(err) {
    if (err) return res.render('index', { error: 'Email já cadastrado.' });
    res.redirect('/login');
  });
});

// User login
app.get('/login', (req, res) => res.render('login', { error: null }));
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email=? AND password=?', [email, password], (err, user) => {
    if (err || !user) return res.render('login', { error: 'Credenciais inválidas.' });
    req.session.user = user;
    res.redirect('/dashboard');
  });
});

app.get('/dashboard', (req, res) => {
  if (!req.session.user) return res.redirect('/login');
  // Refresh user data from DB (so subscription changes reflect)
  db.get('SELECT * FROM users WHERE id=?', [req.session.user.id], (err, user) => {
    if (user) req.session.user = user;
    res.render('dashboard', { user: req.session.user });
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/'));
});

// Admin auth (simple)
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'admin123';

app.get('/admin/login', (req, res) => res.render('admin-login', { error: null }));
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    req.session.admin = true;
    return res.redirect('/admin');
  }
  res.render('admin-login', { error: 'Usuário ou senha inválidos.' });
});

function adminAuth(req, res, next) {
  if (req.session && req.session.admin) return next();
  res.redirect('/admin/login');
}

// Admin panel: list users
app.get('/admin', adminAuth, (req, res) => {
  db.all('SELECT id, name, email, subscribed FROM users ORDER BY id DESC', [], (err, users) => {
    res.render('admin', { users });
  });
});

// Cancel subscription
app.post('/admin/cancel/:id', adminAuth, (req, res) => {
  const id = req.params.id;
  db.run('UPDATE users SET subscribed=0 WHERE id=?', [id], function(err) {
    res.redirect('/admin');
  });
});

app.get('/admin/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/admin/login'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('YouCineOficial app listening on port', PORT);
});
