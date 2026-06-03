// Pega a string do localStorage
const stringUsuario = localStorage.getItem('@EduPlay:user');

const divLogin = document.getElementById('login')
const divLogado = document.getElementById('menuLogado')
const userNameH1 = document.getElementById('userName')
const btnLogout = document.getElementById('btnLogout')
divLogado.style.display = 'none'

// Transforma a string de volta em um Objeto JavaScript manipulável
const usuario = JSON.parse(stringUsuario);

if(usuario){
    divLogin.style.display = 'none'
    userNameH1.innerText = usuario.name
    divLogado.style.display = 'block'

    btnLogout.addEventListener('click', () =>{
        localStorage.removeItem('@EduPlay:user');
        window.location.reload()
    })
}

console.log(usuario.name); 
console.log(usuario.email);