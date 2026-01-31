import connection from "../connnection.js";

export async function findUserByEmail(email) {
  try {
    const query = `
      SELECT id_usuario, nm_usuario, email_usuario, sen_usuario
      FROM usuarios 
      WHERE email_usuario = ?
      LIMIT 1
    `;
    
    const [rows] = await connection.execute(query, [email]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw new Error(`Erro ao buscar usuário: ${error.message}`);
  }
}

export async function loginUser(email) {
  return findUserByEmail(email);
}