import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import check from "../../assets/images/check.png";
import dayjs from "dayjs";
import ptBr from "dayjs/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

export default function TodayPage() {
  const [guardarHabitos, setguardarHabitos] = useState([]);
  const [renderizar, setRenderizar] = useState(0);
  const [done, setDone] = useState([]);
  const { usuario, porcentagem, setPorcentagem } = useContext(UserContext);
  const header = { headers: { Authorization: `Bearer ${usuario.token}` } };

  dayjs.locale(ptBr);
  let dataHoje = dayjs().format("dddd, DD/MM");

  let valor = ((done.length / guardarHabitos.length) * 100).toFixed(0);
  setPorcentagem(valor);

  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const promise = axios.get(URL, header);

    promise.then((response) => {
      setguardarHabitos(response.data);
    });

    promise.catch(() => alert("Não foi possível carregar os hábitos!"));
  }, [renderizar]);

  function marcarHabito(h) {
    let id = h.id;
    const URLcheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const URLuncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

    if (!done.includes(id)) {
      setDone([...done, id]);

      const promise = axios.post(URLcheck, id, header);
      promise.then(() => {
        setRenderizar(renderizar + 1);
      });

      promise.catch((error) => 
      console.log(error));
    } else {
      const novo = done.filter((d) => d !== id);
      setDone(novo);

      const promise = axios.post(URLuncheck, id, header);
      promise.then(() => {
        setRenderizar(renderizar - 1);
      });

      promise.catch((error) => 
      console.log(error));
    }
  }

  return (
    <>
      <NavBar />

      <ContainerToday>
        <ContainerTitulos>
          <h1 data-identifier="today-infos">{dataHoje}</h1>
          {porcentagem > 0 ? (
            <h2 data-identifier="today-infos">{porcentagem}% dos hábitos concluídos</h2>
          ) : (
            <h3> Nenhum hábito concluído ainda </h3>
          )}
        </ContainerTitulos>

        {guardarHabitos.map((h) => (
          <MyHabit data-identifier="today-infos" key={h.id}>
            <h1> {h.name} </h1>
            <h2> Sequência atual: {h.currentSequence} dias </h2>
            <h2> Seu recorde: {h.highestSequence} dias </h2>
            <div
              data-identifier="done-habit-btn"
              onClick={() => marcarHabito(h)}
              className={done.includes(h.id) ? "marcado" : "desmarcado"}
            >
              <img src={check} alt="icone concluído" />
            </div>
          </MyHabit>
        ))}
      </ContainerToday>

      <Footer />
    </>
  );
}

const ContainerToday = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e5e5;
  margin-bottom: 100px;

  p {
    font-size: 18px;
    line-height: 23px;
    color: #666666;
    margin-top: 10px;
  }
`;

const ContainerTitulos = styled.div`
  padding-left: 18px;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 28px;

  h1 {
    font-size: 23px;
    color: #126ba5;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 18px;
    color: #8fc549;
  }

  h3 {
    font-size: 18px;
    color: #bababa;
  }
`;
const MyHabit = styled.div`
  width: 340px;
  height: 94px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;

  h1 {
    margin-top: 10px;
    margin-left: 18px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #666666;
  }

  h2 {
    margin-left: 18px;
    font-size: 13px;
    color: #666666;
  }

  div {
    width: 69px;
    height: 69px;
    position: absolute;
    right: 13px;
    top: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  img {
    width: 35px;
    height: 28px;
  }

  .marcado {
    background-color: #8fc549;
  }

  .desmarcado {
    background-color: #ebebeb;
  }
`;
