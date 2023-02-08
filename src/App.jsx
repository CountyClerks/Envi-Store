import Home from "./components/Home";
import Artists from "./components/Artists";
import Header from "./components/Header";
import art from "./Art";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home art={art}/>} />
        <Route path="/artists" element={<Artists art={art}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
