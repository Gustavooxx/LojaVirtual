import { cadastrarEnderecoUser } from "../../repository/enderecoUserRepo/enderecoRepo.js";
import { validarEndereco } from "../../validation/enderecoValidation/enderecoValidation.js";

export async function cadastrarEnderecoService(info){
    try {
        validarEndereco(info);
        
        const cadastrar = await cadastrarEnderecoUser(info);
        return cadastrar;
    } catch (err) {
        throw err;
    }
}