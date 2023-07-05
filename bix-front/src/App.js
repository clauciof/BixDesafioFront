
import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
        <Route element = { <Home/> }  path="/home" exact />
           <Route element = { <Login/> }  path="/" />
           <Route element = { <Subscribe/> }  path="/subscribe" />
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
