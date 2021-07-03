import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import "./index.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Clicou");
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="logo-area">
          <img src={logo} alt="logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type="email"
            placeholder="joao@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Acessar</button>
        </form>

        <div className="register-link">
          <p>Não tem conta?</p>
          <Link to="/register">Crie aqui</Link>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
