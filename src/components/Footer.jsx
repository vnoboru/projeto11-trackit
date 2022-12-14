import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Footer() {
  const navigate = useNavigate();
  const { porcentagem } = useContext(UserContext);
  return (
    <Container>
      <h1
        data-identifier="habit-page-action"
        onClick={() => navigate("/habitos")}
      >
        Hábitos
      </h1>
      <section onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          text="Hoje"
          value={porcentagem}
          background
          backgroundPadding={5}
          styles={buildStyles({
            backgroundColor: "#52b6ff",
            textColor: "#ffffff",
            pathColor: "#ffffff",
            trailColor: "transparent",
          })}
        ></CircularProgressbar>
      </section>
      <h1
        data-identifier="historic-page-action"
        onClick={() => navigate("/historico")}
      >
        Histórico
      </h1>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  bottom: 0px;
  left: 0px;
  background: #ffffff;

  h1 {
    font-size: 18px;
    color: #52b6ff;
  }

  section {
    width: 90px;
    height: 90px;
  }
`;
