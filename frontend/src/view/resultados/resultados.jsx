function Resultados() {

return (
    <div className="min-h-screen bg-gray-50 p-10">
    <div className="max-w-6xl mx-auto">

    {/* essa parte é dos titulos*/}
    <h2 className="text-5xl font-bold text-[#0D0D0D] mb-10">
    Meus Pedidos:
    </h2>
    
    {/* essa div é o card de trás que aumenta/diminui conforme o tanto de pedidos*/}
<div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl flex flex-col gap-6">
    
    {/* essa parte é que exibe o codigo,nome e status do pedido*/}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div className="flex gap-4">
            <h2 className="text-[#00695c] font-bold text-2xl">
            Código do pedido: 0000 <span className="text-black font-mono"></span>
            </h2>
            <h2 className="text-[#00695c] font-bold text-2xl ml-4">
            Nome: #### <span className="text-gray-400 font-normal italic"></span>
            </h2>
        </div>
        <span className="text-emerald-500 font-black text-2xl uppercase">
            Status:
        </span>
        </div>

    {/* essa parte é que ta as informações do pedido*/}

<div className="grid grid-cols-4 gap-0 text-center mb-8">
<div className="border-r border-gray-200">
    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Origem</p>
<p className="font-extrabold text-[#00796b] text-xl">Manaus</p>
</div>
<div className="border-r border-gray-200">
    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Destino</p>
    <p className="font-extrabold text-[#00796b] text-xl">Maués</p>
</div>
<div className="border-r border-gray-200">
    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Duração</p>
    <p className="font-extrabold text-[#00796b] text-xl">18H</p>
</div>
<div>
    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Partida</p>
    <p className="font-extrabold text-[#00796b] text-xl">25/04 - 09H</p>
</div>
</div>

<div className="grid grid-cols-4 gap-0 items-end text-center">
<div className="border-r border-gray-200 pb-1">
    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Valor da Passagem</p>
    <p className="font-extrabold text-[#00796b] text-lg">R$ 100,00</p>
</div>
<div className="border-r border-gray-200 pb-1">
    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Embarcação</p>
    <p className="font-extrabold text-[#00796b] text-lg">Filho do Rio</p>
</div>
<div className="border-r border-gray-200 pb-1">
    <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Assento</p>
    <p className="font-extrabold text-[#00796b] text-lg">B5</p>
</div>

<div className="flex justify-center px-4">
    <button className="w-full bg-[#56e39f] hover:bg-[#45cc8b] text-[#004d40] font-bold py-2 rounded-lg shadow-md transition-all hover:scale-105 text-[10px] uppercase">
    Ver resumo do pedido
    </button>
</div>
</div>

</div>
</div>
</div>
</div>
    
)

} export default Resultados