import bcrypt from 'bcrypt';
import { loginUser } from "../../repository/login/loginUserRepo.js";
import { loginValidationRules } from "../../validation/login/loginValidation.js";

export async function loginService(credentials) {
  try {
    // Validar credenciais
    loginValidationRules.validateCredentials(credentials);

    // Buscar usuário no banco
    const user = await loginUser(credentials.email_usuario);

    // Validar se usuário existe
    loginValidationRules.validateUserExists(user);

    // Comparar senha com hash armazenado
    const isPasswordValid = await bcrypt.compare(
      credentials.sen_usuario,
      user.sen_usuario
    );

    if (!isPasswordValid) {
      const error = new Error('Email ou senha incorretos');
      error.statusCode = 401;
      throw error;
    }

    // Retornar usuário sem a senha
    const { sen_usuario, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    throw error;
  }
}