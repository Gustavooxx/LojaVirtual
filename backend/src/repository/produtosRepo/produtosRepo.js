import connection from "../connnection.js";


export async function listarProduto() {
    const comando = `
    select * from produtos
    `
    const [resposta] = await connection.execute(comando)
    return resposta;
}

export async function listarProdutoId(id) {
    const comando = `
    select * from produtos
    where id_produto = ?
    `
    const [resposta] = await connection.execute(comando, [id])
    return resposta;
}