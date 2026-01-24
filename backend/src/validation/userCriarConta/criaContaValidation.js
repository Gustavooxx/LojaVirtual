import { cadastrarUser } from "../../repository/userCriarConta/criarContaRepo.js";

export function validarCpf(cpf) {
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf[i]) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    let digit1 = remainder === 10 ? 0 : remainder;
    if (digit1 !== parseInt(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf[i]) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    let digit2 = remainder === 10 ? 0 : remainder;
    return digit2 === parseInt(cpf[10]);
}


export async function cadastrarUserValidation(info) {
    if(!info.nm_usuario)
        throw new Error('Obrigario colocar o nome')

    if(!info.sen_usuario)
        throw new Error('Obrigario colocar a senha')

    if(!info.cpf_usuario)
        throw new Error('Obrigario colocar o CPF')

    if(!info.email_usuario)
        throw new Error('Obrigario colocar o email')

    if(!info.dt_nascimanto)
        throw new Error('Obrigario colocar a data de nascimento')

    if( isNaN(info.cpf_usuario))
         throw new Error('É obrigatório que o CPF seja em números');


    if(info.cpf_usuario.length !== 11)
         throw new Error('CPF deve ter 11 dígitos');



}

export function validarCpfBanco(registro){
    if(registro){
        throw new Error('CPF ja cadastrado')
    }
}