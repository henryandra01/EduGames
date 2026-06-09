import { postUser } from "../api/api.js"

const btnClick = document.getElementById('btnCadastrar')

btnClick.addEventListener('click', async(e) =>{
    e.preventDefault()
    const nomeValue = document.getElementById('inputNome').value
    const emailValue = document.getElementById('inputEmail').value
    const senhaValue = document.getElementById('inputSenha').value
    const senhaConfirmacaoValue = document.getElementById('inputConfirmarSenha').value

    try{
        if(nomeValue != "" || emailValue != "" || senhaValue != ""){
            if(senhaValue === senhaConfirmacaoValue){
                const response = await postUser(emailValue, nomeValue, senhaValue)
                console.log(response)
                if(response)
                    alert('Cadastro feito com sucesso!')
                    window.location.reload()
            }else alert("As senhas não são iguais!")
        }else alert("Credenciais não podem ser vazias!")

    }catch(error){
        alert("Erro ao salvar usuário!")
        console.log(error)
    }

})
