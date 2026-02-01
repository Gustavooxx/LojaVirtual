import api from "../../app";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
        e.preventDefault();

        // Lógica para lidar com o cadastro do usuário
        const formData = new FormData(e.target);
        const data = {
            nm_usuario: formData.get('nome'),
            email_usuario: formData.get('email'),
            sen_usuario: formData.get('senha'),
            dt_nascimento: formData.get('data'),
            cpf_usuario: formData.get('cpf')
        };

        try {
            const response = await api.post('/cadastrar', data)
            alert('Cadastro realizado com sucesso! ID: ' + response.data.id);
            navigate('/login');
        } catch (erro) {
            alert('Erro ao cadastrar: ' + erro.response.data.error);
        }
    }

    return (
        <div id="Cadastro" className="h-auto" >
            <h1 className="flex text-blue-500 font-bold text-3xl text-"  >Cadastrar-se</h1>
            <div >
                <form onSubmit={handleCadastro}>
                    <input type="text" placeholder="nome" name="nome" required />
                    <input type="email" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Senha" name="senha" required />
                    <input type="date" placeholder="Data de Nascimento" name="data" required />
                    <input type="text" placeholder="CPF" name="cpf" required />
                    <button type="submit">Cadastrar-se</button>
                </form>
            </div>

        </div>

    )
}