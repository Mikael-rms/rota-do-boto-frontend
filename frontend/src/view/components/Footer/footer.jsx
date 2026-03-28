import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full  bg-[rgb(21,40,47)] text-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div>
                <h2 className="font-bold text-xl mb-4">Institucional</h2>
                <ul className="space-y-2 text-sm">
                    <li className="cursor-pointer hover:underline">Quem somos</li>
                    <li className="cursor-pointer hover:underline">Como funciona?</li>
                    <li className="cursor-pointer hover:underline">Destino</li>
                </ul>
            </div>

            <div>
                <h2 className="font-bold text-xl mb-4">Políticas</h2>
                <ul className="space-y-2 text-sm">
                    <li className="cursor-pointer hover:underline">Privacidade e segurança</li>
                    <li className="cursor-pointer hover:underline">Cancelamentos</li>
                    <li className="cursor-pointer hover:underline">Termos de Uso</li>
                </ul>
            </div>

            <div>
                <h2 className="font-bold text-xl mb-4">Redes Sociais</h2>
                    <a href="https://www.instagram.com/rotadoboto/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition">
                        <FaInstagram className="w-5 h-5" />
                        <span className="text-sm">Instagram</span>
                    </a>
            </div>

            <div>
                <h2 className="font-bold text-xl mb-4">Precisa de Ajuda?</h2>
                <ul className="space-y-2 text-sm">
                    <li className="cursor-pointer hover:underline">Suporte</li>
                    <li className="cursor-pointer hover:underline">Cancelar pedido</li>
                </ul>
            </div>

        </div>
    </footer>
  );
}