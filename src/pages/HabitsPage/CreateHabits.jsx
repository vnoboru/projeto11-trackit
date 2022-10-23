import { useState } from "react";
import styled from "styled-components";

function ContainerDias(props) {
  const { dia, numero, criarHabito, setCriarHabito } = props;
  return (
    <button
      className={criarHabito.days.includes(numero) ? "marked" : ""}
      onClick={() => {
        if (criarHabito.days.includes(numero)) {
          setCriarHabito({
            ...criarHabito,
            days: criarHabito.days.filter((day) => day !== numero),
          });
        } else {
          setCriarHabito({
            ...criarHabito,
            days: [...criarHabito.days, numero],
          });
        }
      }}
    >
      {dia}
    </button>
  );
}

function enviarHabito(props) {
  const { criarHabito } = props;

  if ((criarHabito.days.length === 0) && (criarHabito.name.length === 0)) {
    return alert("Preencha o nome do hábito e o dia da semana!");
  } else if (criarHabito.days.length === 0) {
    return alert("selecione um dia da semana!");
  } else if (criarHabito.name.length === 0) {
    return alert("Digite o nome do hábito!");
  }
}

export default function CreateHabits() {
  //Para enviar a requisição da API - nomehabito/selecionar dias
  const [criarHabito, setCriarHabito] = useState({ name: "", days: [] });
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
    <NovoHabito>
      <input
        required
        placeholder="Nome do hábito"
        type="text"
        onChange={(name) =>
          setCriarHabito({ ...criarHabito, name: name.target.value })
        }
      ></input>
      <div>
        {diasDaSemana.map((dados, index) => (
          <ContainerDias
            key={index}
            numero={dados.numero}
            dia={dados.dia}
            criarHabito={criarHabito}
            setCriarHabito={setCriarHabito}
          />
        ))}
      </div>
      <ContainerOpcoes>
        <h1>Cancelar</h1>
        <button
          onClick={() =>
            enviarHabito({
              criarHabito,
            })
          }
        >
          Salvar
        </button>
      </ContainerOpcoes>
    </NovoHabito>
  );
}

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

  .marked {
    background-color: #cfcfcf;
    color: #ffffff;
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
