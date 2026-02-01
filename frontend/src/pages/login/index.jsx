import { useNavigate } from "react-router-dom";
import api from "../../app";


export default function Login() {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Lógica para lidar com o login do usuário
        const formData = new FormData(e.target);
        const data = {
            email_usuario: formData.get('email'),
            sen_usuario: formData.get('senha')
        }

        try {
            const response = await api.post('/login', data)
            const token = response.data.token;
            const userId = response.data.userId;
            const userName = response.data.userName;

            localStorage.setItem('token',token);
            localStorage.setItem('USUARIO', JSON.stringify({ id_usuario: userId, nm_usuario: userName }));
            alert('Login realizado com sucesso! Bem-vindo, ' + userName);
            navigate('/');
        } catch (erro) {
            alert('Erro ao fazer login' + erro.response.data.error);
        }
    }

    return (
        <div id="Login" className="h-auto" >
            <h1 className="flex text-blue-500 font-bold text-3xl text-"  >Login</h1>
            <div >
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Senha" name="senha" required />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>

    )
}
    