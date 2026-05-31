import { postUser } from "../api/api.js"

const btnClick = document.getElementById('btnCadastrar')

btnClick.addEventListener('click', async(e) =>{
    e.preventDefault()
    const nomeValue = document.getElementById('inputNome').value
    const emailValue = document.getElementById('inputEmail').value
    const senhaValue = document.getElementById('inputSenha').value

    try{
        const response = await postUser(emailValue, nomeValue, senhaValue)
        console.log(response)
    }catch(error){
        console.log(error)
    }
    alert("oi")

})
