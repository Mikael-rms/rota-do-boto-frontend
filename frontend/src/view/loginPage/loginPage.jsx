function HomePage() {
    return (
    <section className="min-h-screen w-screen flex justify-center">
      <div className="flex flex-col items-center mt-20">
        <h1 className=" text-6xl font-bold mb-6 text-[rgb(0,107,0)]">
            Login
        </h1>

        <div className="bg-white border border-gray-400 rounded-2xl shadow-xl p-8 w-[450px]">

        <input type="email" placeholder="Digite seu email" className="w-full border border-gray-400 rounded-full px-4 py-2 outline-none mb-6"/>
        <input type="password" placeholder="Digite sua senha" className="w-full border border-gray-400 rounded-full px-4 py-2 outline-none mb-6"/>

        <button className="w-full bg-[rgb(92,214,143)] text-black font-medium py-2 rounded-lg shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
          Entrar
        </button>

        <p className="text-center text-gray-600 text-sm mt-3 cursor-pointer hover:underline">
          CRIAR UMA CONTA
        </p>
        </div>
      </div>

    </section>
    );
}

export default HomePage;