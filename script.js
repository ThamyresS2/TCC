const usuario = {nome, nivel}

const nivel =0
// Niveis
// 4.Direção
// 3.Coordenação
// 2.Monitor
// 1.Aluno
// 0.Vistante

const pagina = document.querySelector('body');
const title = document.querySelector('title');

addEventListener('DOMContentLoaded', function Login() {
    title.innerHTML = `Login`;
    pagina.innerHTML = `
        <body>
            <header>
            </header>
            <main>
                <img src="logo.png" alt="Logo IFMS" width="100px" height="100px">
                <h1>Login</h1>
                <form action="#" method="post">
                    <div>
                        <input type="email" id="email" name="email" placeholder="E-mail" required>
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Senha" required>
                    </div>
                    <a scr="esqueci">Esqueceu sua senha?</a>
                    <div id="buttons">
                        <button type="submit" onclick="PaginaParticipante()">Entrar</button>
                        <button type="submit" id="inscrição" onclick="Inscrição()">Increva-se</button>
                        <button type="submit" id="area-servico" onclick="PaginaAreaServico()">Area Serviço</button>
                    </div>
                </form>
            </main>
        </body>
    </html>`;
});
function PaginaAreaParticipante(){

    if(nivel >= 2){
        title.insertAdjacentHTML("Bem, vindo Monitor")
        pagina.insertAdjacentHTML = `
            <h1>Bem vindo a area de monitores</h1>
        `;

    }
}

function PaginaAreaServico() {
    if (nivel >= 3) {
        title.textContent = 'Área de Serviço';
        pagina.innerHTML = `
            <header>
                <button id="addMonitores" onclick="AdicionarMonitores()">Adicionar Monitores</button>
                <button id="addEvento" onclick="AdicionarEvento()">Adicionar Evento</button>
                <button id="conta" onclick="MinhaConta()">Minha Conta</button>
                <button id="sair" onclick=Sair()>Sair</button>
            </header>
            
        `;

        if (nivel >= 4) {
            pagina.innerHTML =
                `<header>
                <button id="addCordenador" onclick="AdicionarCoordenador()">Adicionar Coordenador</button>
                <button id="addMonitores" onclick="AdicionarMonitores()">Adicionar Monitores</button>
                <button id="addEvento" onclick="AdicionarEvento()">Adicionar Evento</button>
                <button id="conta" onclick="MinhaConta()">Minha Conta</button>
                <button id="sair" onclick=Sair()>Sair</button>
            </header>;
        `;
        }
    }
    else {
        alert("Você não esta cadastrado como servidor")
    }
}

function AdicionarMonitores() {

    title.textContent = 'Adicionar Monitores';
    pagina.innerHTML = `
        <input type="file">
        <p>Faça upload de um arquino .csv com as colunas: Nome, Sobrenome, Telefone, E-mail.</p>
        <button id="addMonitores">Adicionar Monitores</button>
    `;
}
function AdicionarCoordenador() {
    const pagina = document.querySelector('body');
    pagina.innerHTML = `
        <div id="Incricao">
        <img scr="logo.png">
            <h1>Increva-se</h1>
            <form action="">
                <input type="text" id="nome" placeholder="Digite seu nome">
                <input type="text" id="sobrenome" placeholder="Digite seu sobrenome">
                <input type="email" name="email" id="email" placeholder="Digite seu email">
            </form>
            <button id="btn" onclick="cadastrar()">Proximo</button>
        </div>
    `;
}
function AdicionarEvento() {

    pagina.innerHTML = `
        <div id="Incricao">
        <img scr="logo.png">
            <h1>Increva-se</h1>
            <form action="">
                <input type="text" id="nome" placeholder="Digite seu nome">
                <input type="text" id="sobrenome" placeholder="Digite seu sobrenome">
                <input type="text" id="idade" placeholder="Data de nascimento">
                <input type="number" name="cpf" id="cpf" placeholder="CPF">
                <input type="number" id="telefone" placeholder="Digite seu telefone">
                <input type="email" name="email" id="email" placeholder="Digite seu email">
                <input type="password" id="senha" placeholder="Digite sua senha">
            </form>
            <button id="btn" onclick="cadastrar()">Proximo</button>
        </div>
    `;
}

function Inscrição() {
    const cadastro = {nome, sobrenome, dataNascimento, CPF, email, senha, nivel:0}
    const pagina = document.querySelector('body');
    pagina.innerHTML = `
        <div id="Incricao">
        <img scr="logo.png">
            <h1>Increva-se</h1>
            <form action="">
                <input type="text" id="nome" placeholder="Digite seu nome">
                <input type="text" id="sobrenome" placeholder="Digite seu sobrenome">
                <input type="text" id="idade" placeholder="Data de nascimento">
                <input type="number" name="cpf" id="cpf" placeholder="CPF">
                <input type="number" id="telefone" placeholder="Digite seu telefone">
                <input type="email" name="email" id="email" placeholder="Digite seu email">
                <input type="password" id="senha" placeholder="Digite sua senha">
            </form>
            <button id="btn" onclick="Cadastrar()">Proximo</button>
        </div>
    `;
    function Cadastrar(){
    const cadastro = {nome, sobrenome, dataNascimento, CPF, email, senha, nivel:0}
        cadastro.nome = querySelector("#nome").value;
        cadastro.sobrenome = querySelector(#sobrenome).value
        cadastro.cpf = querySelector(#cpf).value
        cadastro.sobrenome = querySelector(#sobrenome).value
        cadastro.sobrenome = querySelector(#sobrenome).value
    }
}