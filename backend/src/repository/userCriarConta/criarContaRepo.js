import connection from "../connnection.js";

export async function cadastrarUser(info) {
    const comando = `
    insert into usuarios (                 
nm_usuario,     
sen_usuario,             
cpf_usuario,                
email_usuario, 
dt_nascimanto) values(?,MD5(?),?,?,?)
    `
    const [resposta] = await connection.query(comando, [
        info.nm_usuario,
        info.sen_usuario,
        info.cpf_usuario,
        info.email_usuario,
        info.dt_nascimanto])

    return resposta;
}

export async function consultarCPF(CPF) {
    const comando = `
    select * from usuarios
    where cpf_usuario = ?
    `
    const [resposta] = await connection.query(comando, [CPF])
    return resposta[0]
    
}
