import { Router } from "express";
import { criaContaService } from "../../service/userCriarConta/criarContaService.js";
import { veirificarUser } from "../../repository/userCriarConta/criarContaRepo.js";

const endConta = Router();


endConta.post('/cadastrar', async (req, res) => {
  try {
    const info = req.body;
    const result = await criaContaService(info);

    // `cadastrarUser` normalmente retorna o resultado da query; extrai o id se existir
    const id = result && (result.insertId ?? result.id ?? result);

    return res.status(201).json({ id });
  } catch (err) {
    // erros de validação gerados nas camadas de service/validation retornam mensagem clara
    const msg = err && err.message ? err.message : 'Erro interno no servidor';
    const isClientError = /Obrigar|Obrigat|CPF|email|senha|data/i.test(msg);
    return res.status(isClientError ? 400 : 500).json({ error: msg });
  }
});

endConta.get('/users/:nome', async (req, res) => {
    try{
        const nome = req.params.nome
        const resposta = await veirificarUser(nome);
        res.status(201).send(resposta)
    } catch(err){
        console.error('SQl MESSAGE' + err.sqlMessage);
        console.error('SQL COMPLETO '+ err.sql);
        throw err;
        
    }
})

export default endConta;