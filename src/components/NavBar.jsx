import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function NavBar() {
  const { usuario } = useContext(UserContext);
  console.log(usuario);
  return (
    <Container>
      <h1>TrackIt</h1>
      <img src={usuario.image} alt="imagem" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 70px;
  background: #126ba5;
  padding: 0px 18px;
  margin: auto;

  img {
    width: 51px;
    height: 51px;
    background: url(image.png);
    border-radius: 90px;
  }
`;
