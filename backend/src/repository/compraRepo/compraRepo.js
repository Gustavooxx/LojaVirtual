import connection from "../connnection.js"

export async function  compraRepo(compra,usuario_id) {
    const comando = `
    insert into compra (forma_pagamento, status_pagamento ,usuario_id, endereco_id)
 values (?,?,?,?);
    `
    const [resposta] = await connection.execute(comando, [compra.forma_pagamento, compra.status_pagamento, usuario_id, compra.endereco_id]);
    return resposta;
} 

export async function itensVendas( compra_id, produto_id, quantidade, preco) {
    const comando = `
    insert into itens_compra (compra_id, produto_id, quantidade, preco_unitario)
    values (?,?,?,?);
    `   
    const listarItens = `
    sele
    `

    const [resposta] = await connection.execute(comando, [compra_id, produto_id, quantidade, preco]);
    return resposta;
}

export async function 
listarCompras() {
    const comando = `
    select * from compra
    `
    const [resposta] = await connection.execute(comando);
    return resposta;
}