import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/images/logo.jpg";
import Container from "../../assets/styles/Container";
import Token from "../../context/Token";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const setUsuario = useContext(UserContext);
  const [loginUsuario, setLoginUsuario] = useState({ email: "", password: "" });
  const [carregando, setCarregando] = useState(false);
  const { setToken } = useContext(Token);

  //Função para enviar email/senha API
  function enviarDados(event) {
    event.preventDefault();

    setCarregando(true);
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`;
    const promise = axios.post(URL, loginUsuario);

    //Caso de sucesso
    promise.then((response) => {
      setToken(response.data.token);
      setUsuario.setUsuario(response.data);
      navigate("/hoje");
    });

    //Caso de erro
    promise.catch((error) => {
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
          required
          type="email"
          placeholder="email"
          onChange={(email) =>
            setLoginUsuario({ ...loginUsuario, email: email.target.value })
          }
          disabled={carregando}
        ></input>
        <input
          required
          type="password"
          placeholder="senha"
          onChange={(password) =>
            setLoginUsuario({
              ...loginUsuario,
              password: password.target.value,
            })
          }
          disabled={carregando}
        ></input>

        <button>
          {carregando ? (
            <ThreeDots color="#ffffff" width="50px" height="50px" />
          ) : (
            <>Entrar</>
          )}
        </button>
      </form>

      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
