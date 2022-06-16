import 'dotenv/config'

import usuarioController from './Controller/usuarioController.js';
import projetoController from './Controller/projetoController.js'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());


server.use(usuarioController);
server.use(projetoController);


server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));
  
