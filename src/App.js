import { useState } from "react";
import UserContext from "../src/context/UserContext"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";

function App() {
  const [usuario, setUsuario] = useState({});

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<TodayPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
