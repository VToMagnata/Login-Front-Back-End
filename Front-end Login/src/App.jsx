import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Context } from "./context/VarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Info from "./components/Info";

function App() {
  const [trade, setTrade] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [estaLogado, setEstaLogado] = useState(false);
  const [dados, setDados] = useState({});

  const toggleDark = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <Context.Provider
      value={{
        setTrade,
        darkMode,
        setDados,
        setEstaLogado,
        dados,
      }}
    >
      <div
        className={`w-screen h-screen flex flex-col justify-center items-center relative ${
          darkMode ? "bg-[#1A1A1A]" : "bg-white"
        }`}
      >
        <header className="w-[10em] h-[5em] absolute right-0 top-0 flex justify-center items-center">
          {darkMode ? (
            <FontAwesomeIcon
              icon={faMoon}
              style={{ color: "white" }}
              size="2x"
              onClick={toggleDark}
              className="cursor-pointer"
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              className="cursor-pointer"
              size="2x"
              onClick={toggleDark}
            />
          )}
        </header>
        {estaLogado ? <Info /> : trade ? <Login /> : <Register />}
      </div>
    </Context.Provider>
  );
}

export default App;
