import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function Logar(email, senha){
    const r = await api.post('http://localhost:5000/login',{
        email: email, 
        senha: senha
      })
      return r.data;
      }


export async function infoPerfil() {
    const resposta = await api.get('/perfil');
    return resposta.data; 
}

export async function CadastrarUsuario (nome, email, senha){
    const r = await api.post('http://localhost:5000/cadastro',{
        nome: nome,
        email: email,
        senha: senha
    })

    return r.data;
} 