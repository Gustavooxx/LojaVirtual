export const loginValidationRules = {
  validateCredentials(credentials) {
    const errors = [];

    if (!credentials.email_usuario || credentials.email_usuario.trim() === '') {
      errors.push('Email é obrigatório');
    } else if (!this.isValidEmail(credentials.email_usuario)) {
      errors.push('Formato de email inválido');
    }

    if (!credentials.sen_usuario || credentials.sen_usuario.trim() === '') {
      errors.push('Senha é obrigatória');
    } 

    if (errors.length > 0) {
      const error = new Error('Erro de validação');
      error.details = errors;
      error.statusCode = 400;
      throw error;
    }
  },

  validateUserExists(user) {
    if (!user) {
      const error = new Error('Email ou senha incorretos');
      error.statusCode = 401;
      throw error;
    }
  },

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
};