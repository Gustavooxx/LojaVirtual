import express from 'express'
import cors from 'cors'
import rotas from './routes.js';

const api = express();

api.use(express.json())
api.use(cors());

rotas(api)

api.listen(3000, () => console.log(`Servidor subiu na porta 3000`))