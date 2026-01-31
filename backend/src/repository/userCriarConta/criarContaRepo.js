import connection from "../connnection.js";
import bcrypt from 'bcrypt';

export async function cadastrarUser(info) {
    const comando = `
    INSERT INTO usuarios (
        nm_usuario,
        sen_usuario,
        cpf_usuario,
        email_usuario,
        dt_nascimento
    ) VALUES (?, ?, ?, ?, ?)
    `;

    try {
        // criptografar a senha com bcrypt (10 salt rounds)
        const senhaHash = await bcrypt.hash(info.sen_usuario, 10);

        const [resposta] = await connection.query(comando, [
            info.nm_usuario,
            senhaHash,
            info.cpf_usuario,
            info.email_usuario,
            info.dt_nascimento
        ]);

        // resposta.insertId contém o id gerado pela inserção
        return resposta.insertId ?? resposta;
    } catch (err) {
        console.error('SQL MESSAGE:', err.sqlMessage);
        console.error('SQL COMPLETO:', err.sql);
        throw err;
    }
}

export async function consultarCPF(cpf) {
    const comando = `
    SELECT * FROM usuarios
    WHERE cpf_usuario = ?
    `;

    try {
        const [resposta] = await connection.query(comando, [cpf]);
        return resposta[0] ?? null;
    } catch (err) {
        console.error('SQL MESSAGE:', err.sqlMessage);
        console.error('SQL COMPLETO:', err.sql);
        throw err;
    }
}

export async function veirificarUser(nome) {
    const comando = `
    SELECT * FROM usuarios
    WHERE nm_usuario LIKE ?
    `;

    try {
        const [resposta] = await connection.query(comando, [`%${nome}%`]);
        return resposta;
    } catch (err) {
        console.error('SQL MESSAGE:', err.sqlMessage);
        console.error('SQL COMPLETO:', err.sql);
        throw err;
    }
}
