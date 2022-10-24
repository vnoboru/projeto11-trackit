import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/images/logo.jpg";
import Container from "../../assets/styles/Container";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(false);
  const [cadastroUsuario, setCadastroUsuario] = useState({email: "", password: "", name: "", image: ""});

  function enviarCadastro(event) {
    event.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, cadastroUsuario);

    promise.then(() => {
      navigate("/");
    });

    promise.catch(() => {
      alert("Cadastro não pode ser concluído, verifique os dados e tente novamente.");
      setCarregando(false);
      setCadastroUsuario({ email: "", password: "", name: "", image: "" });
    });
  }

  return (
    <Container>
      <img src={logo} alt={logo} />
      <form onSubmit={enviarCadastro}>
        <input
          data-identifier="input-email"
          required
          type="email"
          placeholder="email"
          onChange={(email) =>
            setCadastroUsuario({...cadastroUsuario, email: email.target.value})}
          disabled={carregando}
        ></input>

        <input
          data-identifier="input-password"
          required
          type="password"
          placeholder="senha"
          onChange={(password) =>
            setCadastroUsuario({...cadastroUsuario, password: password.target.value})}
          disabled={carregando}
        ></input>

        <input
          data-identifier="input-name"
          required
          type="text"
          placeholder="nome"
          onChange={(name) => 
            setCadastroUsuario({...cadastroUsuario, name: name.target.value})}
          disabled={carregando}
        ></input>

        <input
          data-identifier="input-photo"
          required
          type="url"
          placeholder="foto"
          onChange={(image) =>
            setCadastroUsuario({...cadastroUsuario, image: image.target.value})}
          disabled={carregando}
        ></input>

        <button>
          {carregando ? (
            <ThreeDots color="#ffffff" width="50px" height="50px" />
          ) : (
            <>Cadastrar</>
          )}
        </button>
      </form>

      <Link to="/">
        <p data-identifier="back-to-login-action">Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}
