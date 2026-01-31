import Router from "express";
import { listarProduto, listarProdutoId } from "../../repository/produtosRepo/produtosRepo.js";

const produto = Router();

produto.get("/produtos", async (req, res) => {
    try {
        const produtos = await listarProduto();
        res.status(201).json(produtos);
    } catch (error){
        const msg = error && error.message ? error.message : 'Erro interno no servidor';
        res.status(401).send(msg);
    }
})

produto.get("/produto/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const produto = await listarProdutoId(id)
        res.status(201).json(produto);
    } catch (error){
        const msg = error && error.message ? error.message : 'Erro interno no servidor';
        res.status(401).send(msg);
    }
})

export default produto;