import compra from "./controller/compraController/compraController.js";
import endereco from "./controller/enderecoController/enderecoController.js";
import login from "./controller/login/login.js";
import produto from "./controller/produtoController/produtoController.js";
import endConta from "./controller/userCriarConta/criarContaController.js";

export default function rotas(app){
    app.use(endConta)
    app.use(login)
    app.use(produto)
    app.use(endereco)
    app.use(compra)
}