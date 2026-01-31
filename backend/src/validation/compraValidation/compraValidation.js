
export function compraValidation(info){
    const {forma_pagamento, status_pagamento, endereco_id} = info;
    if(!forma_pagamento || forma_pagamento.trim() === '') throw new Error('Forma de pagamento é obrigatória');
    if(!status_pagamento || status_pagamento.trim() === '') throw new Error('Status de pagamento é obrigatório');
    if(!endereco_id) throw new Error('ID do endereço é obrigatório');
}