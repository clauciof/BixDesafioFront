
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route element = { <Home/> }  path="/home" exact />
           <Route element = { <Login/> }  path="/" />
           <Route element = { <Cadastro/> }  path="/cadastro" />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
