import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import "./index.css";
import { AuthContext } from "../../contexts/auth";
import Loading from "../../components/Loading";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    signIn(email, password);
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
          <h1>Entrar</h1>
          <input
            type="email"
            placeholder="Ex.: joao@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Ex.: ******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
