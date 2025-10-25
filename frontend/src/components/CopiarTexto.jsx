import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const CopiarTexto = ({ texto }) => {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1500);
    } catch (err) {
      console.error("Erro ao copiar: ", err);
    }
  };

  return (
    <span
      onClick={copiar}
      className="w-80 h-10 p-2 text-white text-lg bg-gray-800 rounded-2xl cursor-pointer flex justify-between items-center shadow-sm shadow-gray-500 hover:bg-gray-700 transition-colors duration-200"
    >
      {!copiado && (
        <div className="w-full flex justify-between items-center">
          {texto}
          <FaRegCopy className="text-gray-400 hover:text-white transition-colors duration-200" />
        </div>
      )}

      {copiado && (
        <span className="text-sm text-green-400 ml-2">Copiado!</span>
      )}
      
    </span>
  );
};

export default CopiarTexto;
