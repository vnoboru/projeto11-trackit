import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../context/UserContext";
import logo from "../../assets/images/logo.jpg";
import Container from "../../assets/styles/Container";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUsuario } = useContext(UserContext);
  const [loginUsuario, setLoginUsuario] = useState({ email: "", password: "" });
  const [carregando, setCarregando] = useState(false);

  function enviarDados(event) {
    event.preventDefault();
    setCarregando(true);

    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
    const promise = axios.post(URL, loginUsuario);
    promise.then((response) => {
      setUsuario(response.data);
      navigate("/hoje");
    });

    promise.catch(() => {
      alert("Email e/ou senha incorreto(s). Tente novamente.");
      setCarregando(false);
      setLoginUsuario({ email: "", password: "" });
    });
  }

  return (
    <Container>
      <img src={logo} alt={logo} />
      <form onSubmit={enviarDados}>
        <input
          data-identifier="input-email"
          required
          type="email"
          placeholder="email"
          onChange={(email) =>
            setLoginUsuario({ ...loginUsuario, email: email.target.value })
          }
          disabled={carregando}
        ></input>

        <input
          data-identifier="input-password"
          required
          type="password"
          placeholder="senha"
          onChange={(password) =>
            setLoginUsuario({...loginUsuario, password: password.target.value})}
          disabled={carregando}
        ></input>

        <button data-identifier="login-btn">
          {carregando ? (
            <ThreeDots color="#ffffff" width="50px" height="50px" />
          ) : (
            <>Entrar</>
          )}
        </button>
      </form>

      <Link to="/cadastro">
        <p data-identifier="sign-up-action">Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
