import styled from "styled-components";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function HistoricPage() {
  return (
    <>
      <NavBar />
      <ContainerHistorico>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </ContainerHistorico>
      <Footer />
    </>
  );
}

const ContainerHistorico = styled.div`
  padding-top: 100px;
  padding-left: 20px;

  h1 {
    font-size: 24px;
    color: #126ba5;
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    color: #666666;
  }
`;
