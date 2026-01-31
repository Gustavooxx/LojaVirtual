import login from "./controller/login/login.js";
import endConta from "./controller/userCriarConta/criarContaController.js";

export default function rotas(app){
    app.use(endConta)
    app.use(login)
}