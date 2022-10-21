import styled from "styled-components";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    
  return (
    <Container>
      <h1 onClick={() => navigate("/habitos")}>Hábitos</h1>
      <section onClick={() => navigate("/hoje")}>
        <CircularProgressbar
          text="Hoje"
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
      <h1 onClick={()=> navigate("/historico")}>Histórico</h1>
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

  h1 {
    font-size: 18px;
    color: #52b6ff;
  }
  section {
    width: 90px;
    height: 90px;
  }
`;
