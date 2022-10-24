import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import CriarHabitos from "./CreateHabits";
import UserContext from "../../context/UserContext";
import axios from "axios";
import icone from "../../assets/images/trash.jpg";

export default function HabitsPage() {
  const { usuario, mostrarSessao, setMostrarSessao } = useContext(UserContext);
  const [meusHabitos, setMeusHabitos] = useState([]);
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  //Pegar token autorização para enviar/imprimir habitos
  const header = { headers: { Authorization: `Bearer ${usuario.token}` } };
  console.log(header);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const token = usuario.token;

    const promise = axios.get(URL, header);

    promise.then((response) => {
      let listaHabitos = response.data;
      setMeusHabitos(listaHabitos);
      console.log("lista atualizada:", meusHabitos);
    });

    promise.catch((error) => {
      console.log(error);
    });
  }, []);

  function excluirHabito(props) {
    let idHabito = props;
    let confirmacao = window.confirm("Deseja excluir este hábito?");
    if (confirmacao === true) {
      const novaListaHabitos = meusHabitos.filter((h) => h.id !== idHabito);
      setMeusHabitos(novaListaHabitos);

      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`;

      const promise = axios.delete(URL, header);

      promise.then((res) => {
        console.log(res.data);
      });

      promise.catch((err) => {
        console.log(err);
      });
    }
  }

  return (
    <>
      <NavBar />
      <ContainerPrincipal>
        <ContainerHabitos>
          <h1>Meus hábitos</h1>
          <button
            onClick={() => setMostrarSessao(true)}
            data-identifier="create-habit-btn"
          >
            +
          </button>
        </ContainerHabitos>
        <ContainerNovo>
          {mostrarSessao ? <CriarHabitos /> : ""}
          {meusHabitos ? (
            meusHabitos.map((dados) => (
              <ContainerLista id={dados.id}>
                <h1 data-identifier="habit-name">{dados.name}</h1>
                <div>
                  {dias.map((d, i) =>
                    dados.days.includes(i) ? (
                      <button className="marked">{d}</button>
                    ) : (
                      <button>{d}</button>
                    )
                  )}
                </div>
                <Deletar
                  data-identifier="delete-habit-btn"
                  onClick={() => excluirHabito(dados.id)}
                >
                  <img src={icone} alt="lixeira" />
                </Deletar>
              </ContainerLista>
            ))
          ) : (
            <p data-identifier="no-habit-message">
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          )}
        </ContainerNovo>
      </ContainerPrincipal>
      <Footer />
    </>
  );
}

const ContainerPrincipal = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;

  p {
    margin-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: justify;
    font-size: 18px;
    line-height: 20px;
    color: #666666;
  }
`;

const ContainerHabitos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 96px;
  padding-left: 20px;

  h1 {
    font-size: 24px;
    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;
    border: none;
    background: #52b6ff;
    border-radius: 5px;
    margin-right: 15px;
    color: #ffffff;
    font-size: 27px;
  }
`;

const ContainerNovo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding-bottom: 100px;
  margin-top: 40px;
`;

const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding-left: 25px;
  padding-top: 18px;
  width: 330px;
  height: 80px;
  background: #ffffff;
  border-radius: 5px;
  padding: 18px;
  margin-top: 15px;

  div {
    padding-top: 10px;
  }

  button {
    margin-right: 8px;
    width: 30px;
    height: 30px;
    font-size: 20px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: #dbdbdb;
  }

  .marked {
    background-color: #52b6ff;
    border: 1px solid #52b6ff;
    color: #ffffff;
  }
`;

const Deletar = styled.div`
  position: absolute;
  margin-left: 310px;

  img {
    width: 20px;
    height: 20px;
  }
`;
