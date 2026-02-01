import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Produto from './pages/Produto'
import Cadastro from './pages/cadastro'
import Login from './pages/login'

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/produto' element={<Produto />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}