import { useState } from "react";
import UserContext from "../src/context/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";

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
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/historico" element={<HistoricPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
