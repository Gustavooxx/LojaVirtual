export function validarCpf(cpf) {
    if (!cpf || typeof cpf !== 'string') return false;
    const clean = cpf.replace(/\D/g, '');
    if (clean.length !== 11 || /^(\d)\1+$/.test(clean)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(clean[i], 10) * (10 - i);
    let remainder = (sum * 10) % 11;
    let digit1 = remainder === 10 ? 0 : remainder;
    if (digit1 !== parseInt(clean[9], 10)) return false;

    sum = 0;
    for (let i = 0; i < 10; i++) sum += parseInt(clean[i], 10) * (11 - i);
    remainder = (sum * 10) % 11;
    let digit2 = remainder === 10 ? 0 : remainder;
    return digit2 === parseInt(clean[10], 10);
}

export function cadastrarUserValidation(info) {
    if (!info || typeof info !== 'object')
        throw new Error('Dados do usuário inválidos');

    const { nm_usuario, sen_usuario, cpf_usuario, email_usuario, dt_nascimento } = info;

    if (!nm_usuario) throw new Error('Obrigatório colocar o nome');
    if (!sen_usuario) throw new Error('Obrigatório colocar a senha');
    if (!cpf_usuario) throw new Error('Obrigatório colocar o CPF');
    if (!email_usuario) throw new Error('Obrigatório colocar o email');
    if (!dt_nascimento) throw new Error('Obrigatório colocar a data de nascimento');

    const cpfStr = String(cpf_usuario).replace(/\D/g, '');
    if (isNaN(Number(cpfStr))) throw new Error('É obrigatório que o CPF seja em números');
    if (cpfStr.length !== 11) throw new Error('CPF deve ter 11 dígitos');
    if (!validarCpf(cpfStr)) throw new Error('CPF inválido');
 
    const senhaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!senhaRegex.test(sen_usuario)) throw new Error('Senha deve ter no mínimo 8 caracteres, incluindo letras e números');

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nameRegex.test(nm_usuario)) throw new Error('Nome deve conter apenas letras e espaços');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email_usuario))) throw new Error('Email inválido');

    // validação simples da data (YYYY-MM-DD ou similar)
    const date = new Date(dt_nascimento);
    if (Number.isNaN(date.getTime())) throw new Error('Data de nascimento inválida');
}

export function validarCpfBanco(registro) {
    if (registro) throw new Error('CPF já cadastrado');
}