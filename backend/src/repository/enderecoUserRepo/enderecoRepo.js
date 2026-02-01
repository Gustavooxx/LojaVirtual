import connection from "../connnection.js";

export const cadastrarEnderecoUser = async (info,usuario_id) => {
    const comando = `
    insert into endereco (nm_rua,num_casa,cep_casa,bairro,cidade,endereco_prin,usuario_id)
    values (?,?,?,?,?,?,?);
    `;
    const [resposta] = await connection.execute(comando,[info.nm_rua, info.num_casa, info.cep_casa, info.bairro, info.cidade, info.endereco_prin, usuario_id]);
    return resposta.insertId;
}

export const listarEnderecoUser = async (usuario_id) => {
    const comando = `
    select id_endereco, nm_rua,num_casa,cep_casa,bairro,cidade,endereco_prin,usuario_id
    from endereco
    where usuario_id = ?;
    `;
    const [resposta] = await connection.execute(comando,[usuario_id]);
    return resposta;
}