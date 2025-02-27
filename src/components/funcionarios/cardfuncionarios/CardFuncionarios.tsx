import { Link } from 'react-router-dom'

function CardFuncionarios() {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-orange-300 text-white font-bold text-2xl'>
                Funcionario
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>
                Francisco Lopes
                wandson_lopes@hotmail.com
                21 96878-5513 - 
                25/02/2025
            </p>

            <div className="flex">
                <Link to=''
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to='' className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>




    )
}


export default CardFuncionarios