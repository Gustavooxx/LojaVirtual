
export  function validarEndereco(info){
    const {nm_rua, num_casa, cep_casa, bairro, cidade, endereco_prin} = info;
    if (!nm_rua || nm_rua.trim() === '') throw new Error('Nome da rua é obrigatório');
    if (!num_casa || isNaN(Number(num_casa))) throw new Error('Numero da casa é obrigatório e deve ser numérico');
    if (!cep_casa || /^\d{5}-?\d{3}$/.test(cep_casa) === false) throw new Error('CEP é obrigatório e deve estar no formato correto (XXXXX-XXX)');
    if (!bairro || bairro.trim() === '') throw new Error('Bairro é obrigatório');
    if (!cidade || cidade.trim() === '') throw new Error('Cidade é obrigatoria');
    
}
