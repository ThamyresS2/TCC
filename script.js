addEventListener('DOMContentLoaded', function Login() {
    const pagina = document.querySelector('body');
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
                    <div id="buttons">
                        <button type="submit" onclick="PaginaParticipante()">Entrar</button>
                        <button type="submit" id="inscrição" onclick="Inscrição()">Increva-se</button>
                        <button type="submit" id="area-servico" onclick="PaginaAreaServico()">Entrar Area Serviço</button>
                    </div>
                </form>
            </main>
        </body>
    </html>`;
});
function PaginaAreaServico() {
    const title = document.querySelector('title');
    title.textContent = 'Área de Serviço';
    const pagina = document.querySelector('body');
    
    pagina.innerHTML = `
            <header>
        <button id="addMonitores" onclick="AdicionarMonitores()">Adicionar Monitores</button>
        <button id="addCordenador" onclick="AdicionarCoordenador()">Adicionar Coordenador</button>
        <button id="addEvento" onclick="AdicionarEvento()">Adicionar Evento</button>
        <button id="conta" onclick="MinhaConta()">Minha Conta</button>
    </header>
    `;
}

function Inscrição() {
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
            <button id="btn" onclick="cadastrar()">Proximo</button>
        </div>
    `;

}