import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function NavBar() {
  const { usuario } = useContext(UserContext);
  return (
    <Container>
      <h1>TrackIt</h1>
      <img data-identifier="avatar" src={usuario.image} alt="imagem" />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #126ba5;
  top: 0px;
  left: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;

  h1 {
    font-family: PlayBall;
    font-size: 40px;
    color: #ffffff;
    margin-left: 10px;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 90px;
    margin-right: 10px;
  }
`;
