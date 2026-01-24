import endConta from "./controller/userCriarConta/criarContaController.js";

export default function rotas(app){
    app.use(endConta)
}