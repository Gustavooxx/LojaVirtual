import { cadastrarUser, consultarCPF } from "../../repository/userCriarConta/criarContaRepo.js";
import { cadastrarUserValidation, validarCpfBanco } from "../../validation/userCriarConta/criaContaValidation.js";

export async function criaContaService(info) {
    
    try{
        
        cadastrarUserValidation(info);

        let registro = await consultarCPF(info)
        validarCpfBanco(registro)

        let id = await cadastrarUser(info)
        return id;

    } catch(err){
        throw err;
    }
}