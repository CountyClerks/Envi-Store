import Home from "./components/Home";
import Artwork from "./components/Artwork";
import Artists from "./components/Artists";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
