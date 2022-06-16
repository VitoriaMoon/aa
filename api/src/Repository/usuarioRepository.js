import { con } from './connection.js'

export async function fazerCadastro(usuario)
{
    const comando = 
    `
    INSERT INTO TB_USUARIO ( NM_USUARIO, DS_EMAIL, DS_SENHA, DS_OCUPACAO, DS_BIOGRAFIA, DS_CONTATO, IMG_PERFIL)
            VALUES ( ?, ?, ?, ?, ?, ?, ? )`;
            
    const [resposta] = await con.query(comando, [usuario.nome, usuario.email, usuario.senha, usuario.ocupacao, usuario.biografia, usuario.contato, usuario.imgperfil]);

    usuario.id = resposta.insertId;

    return usuario;
}



export async function login(email, senha) {

    const comando =
            `select id_usuario 	id,
            nm_usuario		    nome,
            ds_email			email
            
            from    tb_usuario
            where   ds_email = ?
            and     ds_senha = ?`;

    const [linhas] = await con.query(comando, [email, senha])
    return linhas[0];

}

 export async function consultarperfil(){

    const comando =
    `
SELECT id_usuario       id,
		NM_USUARIO      nome,  
        DS_OCUPACAO     ocupacao, 
        DS_BIOGRAFIA    bio, 
        DS_CONTATO      ctt 
FROM tb_usuario 
     `;

const [linhas] = await con.query(comando)
return linhas;

 }

 export async function buscarPerfil(nome){

    const comando =
    `
        SELECT id_usuario       id,
                NM_USUARIO      nome,   
                DS_OCUPACAO     ocupacao, 
                DS_BIOGRAFIA    bio, 
                DS_CONTATO      ctt 
        FROM tb_usuario
        WHERE NM_USUARIO like ? `;
        
const [linhas] = await con.query(comando, [`%${nome}%`])
return linhas;
 }

 


//
