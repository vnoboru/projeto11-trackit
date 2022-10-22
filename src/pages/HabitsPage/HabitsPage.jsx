import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function HabitsPage() {
  const [clicado, setClicado] = useState(false);
  const diasDaSemana = [
    { dia: "D", numero: 0 },
    { dia: "S", numero: 1 },
    { dia: "T", numero: 2 },
    { dia: "Q", numero: 3 },
    { dia: "Q", numero: 4 },
    { dia: "S", numero: 5 },
    { dia: "S", numero: 6 },
  ];

  return (
    <>
      <NavBar />
      <ContainerPrincipal>
        <ContainerHabits>
          <h1>Meus hábitos</h1>
          <button onClick={() => setClicado(!clicado)}>+</button>
        </ContainerHabits>
        <ContainerNovo>
          <NovoHabito>
            <input placeholder="Nome do hábito"></input>
            <div>
              <button>D</button>
              <button>S</button>
              <button>T</button>
              <button>Q</button>
              <button>Q</button>
              <button>S</button>
              <button>S</button>
            </div>
            <ContainerOpcoes>
              <h1>Cancelar</h1>
              <button>Salvar</button>
            </ContainerOpcoes>
          </NovoHabito>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
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

const ContainerHabits = styled.div`
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

  margin-top: 40px;
`;

const NovoHabito = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding-left: 25px;
  padding-top: 18px;
  width: 340px;
  height: 180px;
  background: #ffffff;

  input {
    width: 303px;
    height: 45px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }

  input::placeholder {
    color: #dbdbdb;
  }

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
`;

const ContainerOpcoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 25px;

  h1 {
    font-size: 16px;
    margin-right: 20px;
    color: #52b6ff;
  }

  button {
    background: #52b6ff;
    color: #ffffff;
    margin-right: 30px;
    width: 85px;
    height: 35px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
  }
`;
