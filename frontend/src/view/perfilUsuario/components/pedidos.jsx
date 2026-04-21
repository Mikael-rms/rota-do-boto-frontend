function Pedidos() {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-green-800 mb-6">
          Pedidos
        </h1>

        <div className="bg-white border border-gray-200 rounded-3xl p-4 sm:p-6 shadow-xl flex flex-col gap-6">

          <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 border-b pb-4">

              <div className="flex flex-col sm:flex-row sm:gap-6">
                <p className="text-[#00695c] font-bold text-lg sm:text-xl">
                  Código: <span className="text-[#00695c] font-mono">0000</span>
                </p>

                <p className="text-[#00695c] font-bold text-lg sm:text-xl">
                  Nome: <span className="text-gray-500 font-normal italic">####</span>
                </p>
              </div>

              <span className="text-[#00695c] font-black text-lg sm:text-xl uppercase">
                Status
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">

              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Origem</p>
                <p className="font-extrabold text-[#00796b] text-lg">Manaus</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Destino</p>
                <p className="font-extrabold text-[#00796b] text-lg">Maués</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Duração</p>
                <p className="font-extrabold text-[#00796b] text-lg">18H</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">Partida</p>
                <p className="font-extrabold text-[#00796b] text-lg">25/04 - 09H</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-end text-center">

              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">
                  Valor
                </p>
                <p className="font-extrabold text-[#00796b] text-sm sm:text-base">
                  R$ 100,00
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">
                  Embarcação
                </p>
                <p className="font-extrabold text-[#00796b] text-sm sm:text-base">
                  Filho do Rio
                </p>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">
                  Assento
                </p>
                <p className="font-extrabold text-[#00796b] text-sm sm:text-base">
                  B5
                </p>
              </div>

              <div className="flex justify-center">
                <button className="w-full sm:w-auto bg-[#56e39f] hover:bg-[#45cc8b] text-[#004d40] font-bold py-2 px-4 rounded-lg shadow-md transition-all hover:scale-105 text-xs uppercase">
                  Ver resumo
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Pedidos