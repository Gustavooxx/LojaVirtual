import { compraRepo } from "../../repository/compraRepo/compraRepo.js";
import { compraValidation } from "../../validation/compraValidation/compraValidation.js";

export async function compraService(info, usuario_id){
    try {
        if (!usuario_id) throw new Error('Usuário não autenticado');
        compraValidation(info);

        const resposta = await compraRepo(info, usuario_id);
        return { mensagem: 'Compra criada com sucesso', resposta };
    } catch(err){
        throw err
    }
}