import { con } from './connection.js'

export async function login(email, senha) {

    const comando =
    `select id_usuario 	id,
    nm_usuario		    nome,
    ds_email			email
    from tb_usuario
    where ds_email = ?
    and ds_senha   = ?
    `

    const [linhas] = await con.query(comando, [email, senha])
    return linhas;

}

 export async function consultarperfil(){

    const comando =
    `
SELECT id_usuario id,
		NM_USUARIO nome,  
        NM_PERFIL nome, 
        DS_OCUPACAO ocupacao, 
        DS_BIOGRAFIA bio, 
        DS_CONTATO ctt 
FROM tb_usuario  `

const [linhas] = await con.query(comando)
return linhas;

 }

 export async function buscarPerfil(nome){

    const comando =
    `
SELECT id_usuario id,
		NM_USUARIO nome,  
        NM_PERFIL nome, 
        DS_OCUPACAO ocupacao, 
        DS_BIOGRAFIA bio, 
        DS_CONTATO ctt 
FROM tb_usuario
WHERE NM_USUARIO like ? `;

const [linhas] = await con.query(comando, [`%${nome}%`])
return linhas;
 }

 export async function buscarPerfilPorId(id){

    const comando =
    `
SELECT id_usuario id,
		NM_USUARIO nome,  
        NM_PERFIL nome, 
        DS_OCUPACAO ocupacao, 
        DS_BIOGRAFIA bio, 
        DS_CONTATO ctt 
FROM tb_usuario 
WHERE id_usuario = ? `

const [linhas] = await con.query(comando, [id])
return linhas;

 }



 export async  function alterarperfil (id,perfil) {
     const comando = 
     `
     UPDATE tb_usuario 
     SET nm_usuario =? ,  
         DS_OCUPACAO =?, 
         DS_BIOGRAFIA =? , 
         DS_CONTATO =?  
   WHERE id_usuario = ?;    `
   const [resposta] = await con.query (comando, [perfil.nome, perfil.ocupacao, perfil.biografia, perfil.contato, id])
    return resposta.affectedRows;
 }
