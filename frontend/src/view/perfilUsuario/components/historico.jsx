import { Ticket } from "lucide-react";

function Historico() {
  return (
    <div className="text-center py-20 animate-in slide-in-from-bottom-4 duration-500">
              <Ticket size={48} className="mx-auto text-gray-200 mb-4" />
              <h2 className="text-gray-400 italic">Você ainda não possui pedidos realizados.</h2>
            </div>
  )
}export default Historico;