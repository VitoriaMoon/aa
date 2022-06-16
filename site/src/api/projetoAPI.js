import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function todosProjetos( ) {
    const resposta = await api.get('/projeto');
    return resposta.data; 
}


export async function buscarProjetoPorNome(nome) {
    const resposta = await api.get(`/projeto/busca?nome=${nome}`);
    return resposta.data; 
}

export async function CriarProjeto (nome, descricao, categoria, materiais, usuario){
    const r = await api.post('/criarprojeto',{
        usuario: usuario,
        nome: nome,
        descricao: descricao,
        categoria: categoria,
        materiais: materiais,
    })

    return r.data;
} 

export async function AdicionarImagem (id, img){
    const formData= new FormData();
    FormData.append('img', img);
    const r = await api.put(`/criarprojeto/${id}/img`, 
    formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    });
    return r.status;
}