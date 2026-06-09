// Pega a string do localStorage
const stringUsuario = localStorage.getItem('@EduPlay:user');

const divLogado = document.getElementById('menuLogado')
const userNameH2 = document.getElementById('userName')
const btnLogout = document.getElementById('btnLogout')
divLogado.style.display = 'none'

// Transforma a string de volta em um Objeto JavaScript manipulável
const usuario = JSON.parse(stringUsuario);

if(usuario){
    userNameH2.innerText = `Olá, ${usuario.name}`
    divLogado.style.display = 'block'

    btnLogout.addEventListener('click', () =>{
        localStorage.removeItem('@EduPlay:user');
        window.location.reload()
    })
}