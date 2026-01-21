import express from 'express'
import cors from 'cors'

const api = express();

api.use(express.json())
api.use(cors())
    