import Home from "./components/Home";
import Artists from "./components/Artists";
import Header from "./components/Header";
import Cart from "./components/Cart";
import art from "./Art";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [cartArtwork, setCartArtwork] = React.useState([])
  const [totalPrice, setTotalPrice] = React.useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home art={art} cartArtwork={cartArtwork}  setCartArtwork={setCartArtwork} setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>} />
        <Route path="/artists" element={<Artists art={art}/>} />
        <Route path="/cart" element={<Cart cartArtwork={cartArtwork} totalPrice={totalPrice}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



// function removeCartItem(item) {
//   const itemIndex = artArray.findIndex((i) => i.id === item.id)

//   const newCart = artArray.splice(itemIndex, 1);
//   setCartArtwork(newCart);
// }