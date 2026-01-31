import { Router } from "express";
import { compraService } from "../../service/compraService/compraService.js";
import { getAuthentication } from "../../utils/jwt.js";
import { listarCompras } from "../../repository/compraRepo/compraRepo.js";

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

compra.get('/compra/lista',  async (req, res) => {
    try {
        const resposta = await listarCompras();
        res.status(200).json(resposta);
    } catch(err){
        res.status(400).json({error: err.message})
    }
})

export default compra