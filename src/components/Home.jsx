import art from "../Art";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home(props) {

    const featuredArt = props.art.map((art, index) => {
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
                        <button type="button" className="buy-art-button"></button>
                    </div>
                </div>
        )
    })

    return (
        <div className="container">
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
    )
}