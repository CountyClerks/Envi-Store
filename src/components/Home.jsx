import art from "../Art";
import Footer from "./Footer";
import React from 'react';

export default function Home(props) {

    const [artArray, setArtArray] = React.useState(art);

    const featuredArt = artArray.map((art, index) => {
        return (
                <div className="home-card" key={index} >
                    <img src={art.image} alt="" className="art-image"/>
                    <div className="art-info">
                        <h1 className="art-title">{art.name}</h1>
                        <h2 className="art-artist">{art.artist}</h2>
                        <p className="art-medium">{art.medium}</p>
                    </div>
                    <div className="buy-art">
                        <p className="art-price">${art.price}</p>
                        <button type="button" className="buy-art-button" onClick={handleClick} name={art.name} value={art.price} id={index}></button>
                    </div>
                </div>
        )
    })
    
    function handleClick(event) {
        const {name, value, id} = event.target
        const currentArt = {name: name, value: value, id: id}
        props.setCartArtwork(cartArtwork => [...cartArtwork, currentArt])
        props.setTotalPrice(props.totalPrice + parseInt(event.target.value))
    }

    return (
        <div className="container">
            <div className="home-page">
                <main>
                    <div className="home-main">
                        <h1 className="main-title">Featured Paintings</h1>
                    </div>
                    <div className="home-artwork">
                        {featuredArt}
                    </div>
                </main>
                <Footer art={art}/>
            </div>
        </div>
    )
}