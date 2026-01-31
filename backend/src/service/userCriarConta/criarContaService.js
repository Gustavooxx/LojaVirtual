import { cadastrarUser, consultarCPF } from "../../repository/userCriarConta/criarContaRepo.js";
import { cadastrarUserValidation, validarCpfBanco } from "../../validation/userCriarConta/criaContaValidation.js";

export async function criaContaService(info) {
    try {
        // validação básica dos campos
        cadastrarUserValidation(info);

        // consultar por CPF (somente o valor do cpf)
        const registro = await consultarCPF(info.cpf_usuario);
        validarCpfBanco(registro);

        // cadastrar e retornar id inserido
        const id = await cadastrarUser(info);
        return id;
    } catch (err) {
        throw err;
    }
}