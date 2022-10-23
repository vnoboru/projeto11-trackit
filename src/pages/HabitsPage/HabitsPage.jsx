import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useState } from "react";
import CriarHabitos from "./CreateHabits";

export default function HabitsPage() {
  const [clicado, setClicado] = useState(false);

  return (
    <>
      <NavBar />
      <ContainerPrincipal>
        <ContainerHabitos>
          <h1>Meus hábitos</h1>
          <button onClick={() => setClicado(!clicado)}>+</button>
        </ContainerHabitos>
        <ContainerNovo>
          {clicado ? <CriarHabitos /> : ""}
          {/*
          <ContainerLista>
          </ContainerLista>*/}
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

  margin-top: 40px;
`;

const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: initial;
  padding-left: 25px;
  padding-top: 18px;
  width: 340px;
  height: 180px;
  background: #ffffff;

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
