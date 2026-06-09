import axios from "https://cdn.skypack.dev/axios"

//resolver
const urlApi = "https://apiedugames.igorsp.com.br"

export const postUser = (email, name, password) =>{
    axios.post(`${urlApi}/create`, {
        email: email,
        name: name,
        password: password
    })
    .then(res => {
        return res.status
    })
    .catch(error => {
        console.log(error.message)
    })
}

export const postLogin = async(email, password) => {
    try {
        const res = await axios.post(`${urlApi}/login`, {
            email: email,
            password: password
        });
        return res.data; 
    } catch (error) {
        console.error(error.message);
        throw error; 
    }
}