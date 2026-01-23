import express from 'express'
import cors from 'cors'

const api = express();

api.use(express.json())
api.use(cors());


api.listen(3000, () => console.log(`Servidor subiu na porta 3000`))