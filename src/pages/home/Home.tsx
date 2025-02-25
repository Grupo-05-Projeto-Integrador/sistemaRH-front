function Home() {
    return (
        <>
            <div className="bg-blue-300 flex justify-center h-screen">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            NextGen RH
                        </h2>
                        <p className='text-xl'>
                        Conectando Talentos a Empresas que Acreditam no seu Potencial
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Novo Funcionário
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://cdn.tanca.io/b2api/v1/b2_download_file_by_id?fileId=4_zb3eb0aa049c5ad54704b0010_f1039aa0aa7dce3f5_d20220917_m043207_c002_v0001107_t0034_u01663389127728"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home