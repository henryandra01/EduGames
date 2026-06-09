import { postLogin } from "../api/api.js";

const btnLogin = document.getElementById('btnLogin')
btnLogin.addEventListener('click', async() =>{
    const email = document.getElementById('emailInput').value
    const password = document.getElementById('senhaInput').value

    try{
        if(email != "" || password != ""){
            const response = await postLogin(email, password)
            if(response){
                // Como o localStorage só aceita TEXTO, transformamos o objeto do usuário em uma string JSON
                localStorage.setItem('@EduPlay:user', JSON.stringify(response));

                alert("Login efetuado com sucesso!");
                window.location.href = '../pages/menu.html'
            } 
        }else alert("Email ou senha vazias")

    }catch(error){
        alert("Falha na autenticação.");
        console.log(error)
    }
})