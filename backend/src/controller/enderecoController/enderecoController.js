import { Router  } from "express";
import { cadastrarEnderecoUser, listarEnderecoUser } from "../../repository/enderecoUserRepo/enderecoRepo.js";
import { getAuthentication } from "../../utils/jwt.js";
import { cadastrarEnderecoService } from "../../service/enderecoService/enderecoService.js";

const endereco = Router();
const auth = getAuthentication();

endereco.post("/cadastrarEndereco", auth, async (req, res) => {
    try{
        const endereco = req.body;
        const usuario_id = req.user && req.user.usuario_id
        const resposta = await cadastrarEnderecoService(endereco, usuario_id);
        res.status(201).json({message: 'Endereço cadastrado com sucesso!', id: resposta});
    } catch (error){
        const msg = error && error.message ? error.message : 'Erro interno no servidor';
        res.status(401).send(msg);
    }
})

endereco.get("/listarEndereco/:id", async (req, res) => {
    try{
        const usuario_id = req.params.id;
        const resposta = await listarEnderecoUser(usuario_id);
        res.status(201).json(resposta);
    }
    catch (error){
        const msg = error && error.message ? error.message : 'Erro interno no servidor';
        res.status(401).send(msg);
    }
})

export default endereco;