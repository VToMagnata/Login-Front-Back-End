import { useContext } from "react";
import { Context } from "../context/VarContext";

function Info() {
  const { dados, setEstaLogado } = useContext(Context);
  return (
    <div className="w-[30%] h-[40%] flex flex-col justify-center items-center gap-[0.8em] bg-[#BDC7CF]/50 rounded-[1.2em]">
      <h1 className="text-center border-2 border-black p-[0.5em] rounded-[1em]">
        {dados.name}
      </h1>
      <h2 className="text-center border-2 border-black p-[0.5em] rounded-[1em]">
        {dados.email}
      </h2>
      <button
        onClick={() => setEstaLogado(false)}
        className="bg-[#62BEE5] p-[0.5em] w-[46%] rounded-[2em] text-white hover:bg-[#4296CC] cursor-pointer outline-none"
      >
        Back
      </button>
    </div>
  );
}

export default Info;
