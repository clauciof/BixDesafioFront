
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import LinhaTempo from "./pages/LinhaTempo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element = { <Home/> }  path="/home" exact />
           <Route element = { <Login/> }  path="/" />
           <Route element = { <Cadastro/> }  path="/cadastro" />
           <Route element = { <LinhaTempo/> }  path="/timeline" />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
