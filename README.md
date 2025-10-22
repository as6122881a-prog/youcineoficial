<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouCine - Instalação Rápida</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f4f4f9;
            text-align: center;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            max-width: 400px;
        }
        h1 {
            color: #ff9900;
        }
        p {
            color: #444;
            line-height: 1.6;
        }
        .install-button {
            display: block;
            margin-top: 30px;
            padding: 15px 30px;
            background-color: #ff9900;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 1.1em;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        .install-button:hover {
            background-color: #cc7a00;
        }
        .steps {
            margin-top: 40px;
            text-align: left;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
        .steps ol {
            padding-left: 20px;
        }
        .steps li {
            margin-bottom: 10px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Instalar Acesso YouCine</h1>
        <p>Clique no botão abaixo para baixar o perfil de atalho na sua tela inicial.</p>
        <p><strong>IMPORTANTE:</strong> Este link deve ser aberto no navegador **Safari** do seu iPhone ou iPad.</p>

        <a href="youcine_atalho.mobileconfig" class="install-button">
            Baixar Perfil iOS
        </a>
        
        <div class="steps">
            <h3>Instruções de Instalação:</h3>
            <ol>
                <li>Após clicar no botão, toque em **"Permitir"** na mensagem do Safari.</li>
                <li>Vá em **Ajustes** (Configurações) no seu iPhone.</li>
                <li>No topo, toque em **"Perfil Baixado"**.</li>
                <li>Toque em **"Instalar"** e digite o código de desbloqueio do seu aparelho.</li>
                <li>O ícone do YouCine aparecerá na sua tela inicial!</li>
            </ol>
        </div>
    </div>
</body>
</html>
