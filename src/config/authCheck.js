// authCheck.js
(function () {
    const usuarioLogado = localStorage.getItem('@EduPlay:user');

    // Se NÃO encontrar a chave do usuário, manda de volta para o login
    if (!usuarioLogado) {
        alert("Ops! Você precisa fazer login para acessar o EduPlay.");
        window.location.href = "./entrar.html"; 
    }
})();