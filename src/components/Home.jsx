import art from "../Art";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home(props) {

    const featuredArt = props.art.map((art, index) => {
        return (
            <Link to="/artwork" key={index}>
                <div className="home-card" >
                    <img src={art.image} alt="" className="art-image"/>
                    <div className="art-info">
                        <h1 className="art-title">{art.name}</h1>
                        <h2 className="art-artist">{art.artist}</h2>
                        <p className="art-medium">{art.medium}</p>
                    </div>
                </div>
            </Link>
        )
    })

    return (
        <div className="container">
            <main>
                <div className="home-main">
                    <h1 className="home-title">Featured Paintings</h1>
                    <button type="button" className="main-art-button" ></button>
                </div>
                <div className="home-artwork">
                    {featuredArt}
                </div>
            </main>
            <Link to="/artists">
                <Footer art={art}/>
            </Link>
        </div>
    )
}