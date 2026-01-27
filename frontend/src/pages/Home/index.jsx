import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DoisRockeiros from '../../assets/images/DoisRoqueiros.png'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Beneficios from '../../components/Beneficios'
import Produtos from '../../components/Produtos'
import Avaliacoes from '../../components/Avaliações'

export default function Home() {
    const [lista, setLista] = useState('')

    async function ListarProdutos() {

    }

    return (
        <div id='Home' className='h-auto'>
            <Header />
            <div className='flex pt-20 justify-center'>
                <div className="flex justify-center flex-col w-[60%] h-[60vh]">
                    <div className='flex justify-center flex-row self-center'>
                        <div className="flex flex-col self-center">
                            <h1 className="flex text-black font-bold text-6xl">DESPERTE O</h1>
                            <h3 className="flex text-blue-600 font-bold text-6xl">ROCKSTAR EM VOCÊ!</h3>
                            <h4 className="flex self-center text-black font-semibold text-2xl">Descubra instrumentos de qualidade excepcional para todos os níveis.</h4>
                            <div className="flex w-100% gap-2 pt-5">
                                <Link to={'/Produtos'}><button className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-bold justify-center w-50 items-center h-12 shadow-2xl shadow-black/40 rounded-sm cursor-pointer">EXPLORAR</button></Link>
                                <button className="bg-white hover:bg-gray-300 transition-all justify-center w-50 items-center h-12 shadow-2xl shadow-black/40 rounded-sm cursor-pointer">OFERTAS</button>
                            </div>
                        </div>
                        <div>
                            <img className='h-full w-130 object-cover' src={DoisRockeiros} alt="" />
                            <h1>ola</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Beneficios />
            <Produtos />
            <Avaliacoes />
            <Footer />
        </div>
    )
}