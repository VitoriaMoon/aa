import { alterarProjeto, AdicionarImagem, consultarProjetos,buscarporNome,consultarProjetosPorId,buscarPorCategoria, ApagarProjeto } from '../Repository/projetoRepository.js';

import {Router} from 'express'
const server = Router();

import multer from 'multer'
const upload = multer({ dest: 'storage/projetosimg' })


server.post('/criarprojeto', async (req, resp) =>{

    try {
        const projetoQueVaiInserir = req.body;

        const projeto = await InserirProjeto(projetoQueVaiInserir);

        resp.send(projeto);

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

})

server.put('/projeto/:id/img', upload.single('img'), async (req, resp) => {
    try {
        const {id} = req.params;
        const img = req.file.path;

        const r = await AdicionarImagem(img , id);
        if (resposta != 1)
        throw new Error (' Você não pode adicionar esta imagem! ');

        resp.status(201).send();
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})


server.get('/projeto', async (req, resp) => {
    try {
        const resposta = await consultarProjetos();
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})



server.get('/projeto/busca', async (req, resp) => {
    try {
        const {nome} = req.query;

        const resposta = await buscarporNome(nome);
        resp.send(resposta);
         
         
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})

server.get('/projeto/bcat', async (req, resp) => {
    try {
        const {categoria} = req.query;

        const resposta = await buscarPorCategoria(categoria);
        resp.send(resposta);
         
         
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})

server.get('/projeto/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);

        const resposta = await consultarProjetosPorId(id);
        resp.send(resposta);
    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }    
})

server.put('/alterar', async (req,resp) => {
    
    try {
        const {id}  = req.params;
        const projeto = req.body;

        const resposta = await alterarProjeto(projeto);
        if(resposta != 1){
            throw new Error('O projeto não pode ser alterado!');
        }
        else {
            resp.status(204).send()
        }

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.delete('/projeto/:id', async (req,resp) => {
    try {
        const {id} = req.params;
        const resposta = await ApagarProjeto(id);

        if(resposta != 1){
            throw new Error('Não foi possivel deletar projeto') 
        }
         resp.status(204).send()
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})



export default server
