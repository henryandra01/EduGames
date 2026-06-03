(function () {
    const usuarioLogado = localStorage.getItem('@EduPlay:user');

    if (!usuarioLogado) {
        window.location.href = "./entrar.html"; 
    }
})();