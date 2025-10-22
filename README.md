# YouCineOficial - Example Project

Este repositório contém um exemplo simples de Web App + Painel Admin para YouCineOficial, e o arquivo `app.mobileconfig` para instalação como Web Clip no iOS.

### Como usar (deploy no Vercel via GitHub)

1. Crie um repositório público no GitHub (ex.: `youcineoficial`) e envie todos os arquivos deste projeto na raiz.
2. Entre em https://vercel.com e faça login com GitHub.
3. Clique em "New Project" → "Import Git Repository" → selecione seu repositório.
   - Framework Preset: Other
   - Build Command: (vazio)
   - Output Directory: (vazio)
4. Clique em Deploy.
5. Após o deploy, o arquivo estará disponível em:
   `https://<seu-projeto>.vercel.app/app.mobileconfig`
6. Abra esse link no Safari (iPhone) para instalar o perfil e adicionar o Web Clip.

### Acesso do Admin
- URL do admin: `https://<seu-projeto>.vercel.app/admin`
- Usuário: `admin`
- Senha: `admin123`

### Teste local (opcional)
1. Instale Node.js.
2. Rode:
```
npm install
node server.js
```
3. Acesse:
- Web app: http://localhost:3000
- Admin: http://localhost:3000/admin (use admin/admin123)

### Observações
- Este projeto é um exemplo simples e **não** deve ser usado em produção sem melhorar segurança (hash de senhas, autenticação adequada, HTTPS, validações).