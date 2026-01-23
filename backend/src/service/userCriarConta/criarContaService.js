import { cadastrarUserValidation } from "../../validation/userCriarConta/criaContaValidation.js";

export async function criaContaService(info) {
    
    try{
        await cadastrarUserValidation(info)
        const id = criaContaService(info)
        return id;
    } catch(err){
        throw err;
    }
}