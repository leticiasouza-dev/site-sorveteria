import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import PaginaHome from "./pages/PaginaHome";
import Footer from "./components/Footer";
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <PaginaHome/>
      <Footer />
    </div>
  );
}

export default App;
