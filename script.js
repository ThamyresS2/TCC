
const user = {
    nome: "",
    sobrenome: "",
    dataNascimento: "",
    CPF: "",
    email: "",
    senha: "",
    nivel: 0,
};

// Niveis
// 4.Direção
// 3.Coordenação
// 2.Monitor
// 1.Aluno
// 0.Vistante

const pagina = document.querySelector('body');

const title = document.querySelector('title');

// login
addEventListener('DOMContentLoaded', function Login() {

    pagina.insertAdjacentHTML("beforeend", `
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
                    <div id="buttons">
                        <button type="submit" onclick="PaginaAreaParticipante()">
                            Entrar
                        </button>
                        <button type="submit" id="area-servico" onclick="PaginaAreaServico()">
                        Entrar Area Serviço
                        </button>
                    </div>
                </form>
            </main>
    `);
});

function PaginaAreaParticipante(){
    if(nivel >= 0){
        title.insertAdjacentHTML("beforeend", "Bem, vindo visitantes")
        pagina.insertAdjacentHTML("beforeend", `
            <h1>Bem vindo a area de visitantes</h1>
            <button id="addEvento" onclick="AdicionarEvento()">Increver-se</button>
    `);
    }
    
    if(nivel >= 1){
        title.insertAdjacentHTML("beforeend", "Bem, vindo Monitor")
        pagina.insertAdjacentHTML("beforeend", `
            <h1>Bem vindo a area de monitores</h1>
            <button id="addEvento" onclick="AdicionarEvento()">Registrar Presença</button>
        `);
    }

    if(nivel >= 2){
        title.insertAdjacentHTML("beforeend", "Bem, vindo Monitor")
        pagina.insertAdjacentHTML("beforeend", `
            <h1>Bem vindo a area de monitores</h1>
            <button id="addEvento" onclick="AdicionarEvento()">Registrar Presença</button>
        `);
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

        cadastro.nome = document.querySelector("#nome").value;
        cadastro.sobrenome = document.querySelector("#sobrenome").value;
        cadastro.cpf = document.querySelector("#cpf").value;
        cadastro.dataNascimento = document.querySelector("#idade").value;
        cadastro.email = document.querySelector("#email").value;
        cadastro.senha = document.querySelector("#senha").value;
    }
}