import { useContext, useState } from "react";
import { Context } from "../context/VarContext";

function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const { setDados, setTrade, darkMode, setEstaLogado } = useContext(Context);

  const TentarLogin = async () => {
    const user = {
      name: name,
      pass: pass,
    };

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (data.message !== "Logado") {
        alert("Credenciais inválidas");
      } else {
        setDados(data.user);
        setEstaLogado(true);
      }
    } catch (error) {
      console.error("Erro no fetch:", error);
    }
  };

  return (
    <div className="w-[30%] h-[40%] flex flex-col justify-start items-center gap-[0.8em] bg-[#BDC7CF]/50 rounded-[1.2em]">
      <div className="bg-[url(https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/user.svg)]"></div>
      <h1 className="text-white text-[1.8em]">LOGIN</h1>
      <input
        type="text"
        value={name}
        onChange={(inf) => setName(inf.target.value)}
        style={{ backgroundColor: darkMode ? "#CCCCCC" : "white" }}
        className="outline-none text-center w-[80%] h-[2.3em] bg-no-repeat bg-[position:1em_center] bg-[length:20px_20px] bg-[url('https://raw.githubusercontent.com/feathericons/feather/master/icons/user.svg')]"
        placeholder="Username"
      />
      <input
        type="password"
        value={pass}
        onChange={(inf) => setPass(inf.target.value)}
        style={{ backgroundColor: darkMode ? "#CCCCCC" : "white" }}
        className="outline-none mb-[0.8em] text-center w-[80%] h-[2.3em] bg-no-repeat bg-[position:1em_center] bg-[length:20px_20px] bg-[url('https://raw.githubusercontent.com/feathericons/feather/master/icons/lock.svg')]"
        placeholder="Password"
      />
      <button
        onClick={TentarLogin}
        className="bg-[#62BEE5] p-[0.5em] w-[46%] rounded-[2em] text-white hover:bg-[#4296CC] cursor-pointer outline-none"
      >
        Login
      </button>
      <p>
        Don't have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => {
            setTrade((prev) => !prev);
          }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;
