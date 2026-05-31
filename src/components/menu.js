// Pega a string do localStorage
const stringUsuario = localStorage.getItem('@EduPlay:user');

// Transforma a string de volta em um Objeto JavaScript manipulável
const usuario = JSON.parse(stringUsuario);

// Agora você pode usar os dados como quiser!
console.log(usuario.name); 
console.log(usuario.email);

// Exemplo de como colocar o nome dele em uma tag HTML:
//document.getElementById('nomeUsuarioNaTela').innerText = `Olá, ${usuario.nome}!`;

//localStorage.removeItem('@EduPlay:user');