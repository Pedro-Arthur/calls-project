import React, { useState, useContext } from "react";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
import "../SignIn/index.css";
import { AuthContext } from "../../contexts/auth";
import Loading from "../../components/Loading";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    signUp(name, email, password);
  }

  if (loadingAuth) {
    return <Loading />;
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="logo-area">
          <img src={logo} alt="logo" />
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Registrar</button>
        </form>

        <div className="register-link">
          <p>Já tem conta?</p>
          <Link to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
