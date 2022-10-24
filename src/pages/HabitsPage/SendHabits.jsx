import axios from "axios";

export default function enviarHabito(props) {
  const { criarHabito, header, setMostrarSessao } = props;

  if (criarHabito.days.length === 0 && criarHabito.name.length === 0) {
    return alert("Preencha o nome do hábito e o dia da semana!");
  } else if (criarHabito.days.length === 0) {
    return alert("selecione um dia da semana!");
  } else if (criarHabito.name.length === 0) {
    return alert("Digite o nome do hábito!");
  }

  const URL ="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  const promise = axios.post(URL, criarHabito, header);

  promise.then(() => {
    console.log("Hábito registrado com sucesso!");
    setMostrarSessao(false);
  });

  promise.catch(() => {
    console.log(
      "Não foi possivel enviar o hábito. Por favor, tente novamente!"
    );
  });
}
