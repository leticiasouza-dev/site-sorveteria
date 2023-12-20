import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import PaginaHome from "./pages/PaginaHome";
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <PaginaHome/>

    </div>
  );
}

export default App;
