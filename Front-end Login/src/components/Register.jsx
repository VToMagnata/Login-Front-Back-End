import { useContext, useState } from "react";
import { Context } from "../context/VarContext";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [avisar, setAvisar] = useState("");
  const { setTrade, darkMode } = useContext(Context);

  console.log(darkMode);

  function enviarDados(name, pass, pass2, email) {
    if (pass != pass2) {
      setAvisar("The passwords are different");

      setTimeout(() => {
        setAvisar("");
      }, 2000);

      return;
    }

    const user = {
      name: name,
      pass: pass,
      email: email,
      dados: {
        darkMode: darkMode,
        pref1: false,
        pref2: false,
      },
    };

    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    setName("");
    setPass("");
    setPass2("");
    setEmail("");
  }

  return (
    <div className="w-[30%] h-[63%] flex flex-col justify-start items-center gap-[1em] bg-[#BDC7CF]/50 rounded-[1.2em] ">
      <h1 className="text-white m-[0.6em] text-[1.8em]">SING UP</h1>
      <input
        type="text"
        value={name}
        onChange={(inf) => setName(inf.target.value)}
        style={{ backgroundColor: darkMode ? "#CCCCCC" : "white" }}
        className={
          "outline-none text-center w-[80%] h-[2.3em] bg-no-repeat bg-[position:1em_center] bg-[length:20px_20px] bg-[url('https://raw.githubusercontent.com/feathericons/feather/master/icons/user.svg')]"
        }
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(inf) => setEmail(inf.target.value)}
        style={{ backgroundColor: darkMode ? "#CCCCCC" : "white" }}
        className="outline-none text-center w-[80%] bg-white h-[2.3em] bg-no-repeat bg-[position:1em_center] bg-[length:20px_20px] bg-[url('https://raw.githubusercontent.com/feathericons/feather/master/icons/mail.svg')]"
        placeholder="E-mail"
      />
      <input
        type="password"
        value={pass}
        onChange={(inf) => setPass(inf.target.value)}
        style={{ backgroundColor: darkMode ? "#CCCCCC" : "white" }}
        className="outline-none text-center w-[80%] bg-white h-[2.3em] bg-no-repeat bg-[position:1em_center] bg-[length:20px_20px] bg-[url('https://raw.githubusercontent.com/feathericons/feather/master/icons/lock.svg')]"
        placeholder="Password"
      />
      <input
        type="password"
        value={pass2}
        onChange={(inf) => setPass2(inf.target.value)}
        style={{ backgroundColor: darkMode ? "#CCCCCC" : "white" }}
        className="outline-none text-center w-[80%] bg-white h-[2.3em] mb-[1.2em] bg-no-repeat bg-[position:1em_center] bg-[length:20px_20px] bg-[url('https://raw.githubusercontent.com/feathericons/feather/master/icons/lock.svg')]"
        placeholder="Confirm password"
      />
      <button
        onClick={() => enviarDados(name, pass, pass2, email)}
        className="bg-[#62BEE5] p-[0.5em] w-[46%] rounded-[2em] text-white hover:bg-[#4296CC] cursor-pointer outline-none"
      >
        CREATE ACCOUNT
      </button>
      <p>
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => {
            setTrade((prev) => !prev);
          }}
        >
          Log in
        </span>
      </p>
      <p>{avisar}</p>
    </div>
  );
}

export default Register;
