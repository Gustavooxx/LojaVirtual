import { Router } from "express";
import { compraService } from "../../service/compraService/compraService.js";
import { getAuthentication } from "../../utils/jwt.js";
import { itensVendas, listarCompras } from "../../repository/compraRepo/compraRepo.js";

const compra= Router();
const auth = getAuthentication();

compra.post('/compra/usuario/:endeID',auth, async (req, res) => {
    try {
        const endereco_id = req.params.endeID;
        const usuario_id = req.user && req.user.id_usuario;
        const info = req.body;
        const resposta = await compraService(info,usuario_id);
        res.status(201).json(resposta);
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

compra.post('/compra/itensvenda/:compraID/:produtoID/:quantidade/:preco', auth, async (req, res) => {
    try {
        const compra_id = req.params.compraID;
        const produto_id = req.params.produtoID;
        const quantidade = req.params.quantidade;
        const preco = req.params.preco;
        const resposta = await itensVendas(compra_id, produto_id, quantidade, preco);
        res.status(201).json({message: 'Itens da venda cadastrados com sucesso!', resposta});
    } catch(err){
        res.status(400).json({error: err.message})
    
    }
})

compra.get('/compra/lista',  async (req, res) => {
    try {
        const resposta = await listarCompras();
        res.status(200).json(resposta);
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

export default compra