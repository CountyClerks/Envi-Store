import art from "../Art";
import Footer from "./Footer";

export default function Home() {
    return (
        <div className="container">
            <main>
                <div className="home-main">
                    <h1 className="home-title">Featured Paintings</h1>
                    <button type="button" className="main-art-button" ></button>
                </div>
                <div className="home-artwork">
                    <div className="home-card">
                        <img src={art[0].image} alt="" />
                    </div>
                    <div className="home-card">
                        <img src={art[1].image} alt="" />
                    </div>
                    <div className="home-card">
                        <img src={art[2].image} alt="" />
                    </div>
                    <div className="home-card">
                        <img src={art[3].image} alt="" />
                    </div>
                    <div className="home-card">
                        <img src={art[4].image} alt="" />
                    </div>
                </div>
            </main>
            <Footer art={art}/>
        </div>
    )
}