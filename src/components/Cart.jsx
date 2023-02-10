import React from "react"
import '../Cart.css'

export default function Cart(props) {
    const [artArray, setChosenArt] = React.useState(props.cartArtwork);

    const renderArray = artArray.map((art, id) => {
        return (
            <div className="bought-art" key={id}>
                <div className="bought-art-info">
                    <h1 className="bought-art-title">{art.name}</h1>       
                    <h2 className="bought-art-price">${art.value}</h2>
                </div>
            </div>
        )
    })

    return (
        <div className="cart-body">
            <div className="cart-container">
                <div className="cart-titles">
                    <h1>Item</h1>
                    <h1>Price</h1>
                </div>
                {renderArray}
                <div className="check-out">
                    <h1>Total Price: ${props.totalPrice}</h1>
                    <button type="button" className="check-out-btn">Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}