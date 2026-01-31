import { Router } from "express";
import { generateToken } from "../../utils/jwt.js";
import { loginService } from "../../service/login/loginService.js";

const login = Router();

login.post('/login', async (req, res) => {
  try {
    const credentials = req.body;
    const user = await loginService(credentials);

    const token = generateToken(user);

    return res.status(200).json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id_usuario: user.id_usuario,
        nm_usuario: user.nm_usuario,
        email_usuario: user.email_usuario,
        role: user.role || 'user'
      }
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message = error.details ? 
      { erro: error.message, detalhes: error.details } : 
      { erro: error.message };
    
    return res.status(statusCode).json(message);
  }
});

export default login;