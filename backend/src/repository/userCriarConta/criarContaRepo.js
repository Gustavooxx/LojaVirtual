import connection from "../connnection.js";

export async function cadastrarUser(info) {
    const comando = `
    insert into usuarios (                 
nm_usuario,     
sen_usuario,             
cpf_usuario,                
email_usuario, 
dt_nascimanto)
    `
    const [resposta] = await connection.query(comando[
        info.nm_usuario,
        info.sen_usuario,
        info.cpf_usuario,
        info.email_usuario,
        info.dt_nascimanto])

    return resposta;
}
