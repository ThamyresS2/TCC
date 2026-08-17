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
                        <button type="submit" id="area-servico" onclick="PaginaAreaServico()">Entrar Area Serviço</button>
                    </div>
                </form>
            </main>
        </body>
    </html>`;
});
function PaginaParticipante() {
    window.location.href = "index.html";
}
