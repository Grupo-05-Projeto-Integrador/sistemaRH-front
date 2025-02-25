import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
                           bg-orange-300 text-white'>

                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">NextGen RH</Link>

                    <div className='flex gap-10'>
                    <Link to='/home' className="text-1xl font-bold">Home</Link>
                    <Link to='/sobre' className="text-1xl font-bold">Sobre</Link>
                    <Link to='/funcionarios' className="text-1xl font-bold">Funcionarios</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar