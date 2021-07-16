import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import card_img from "../static/card_img.png"
import './cards.css';

const ItemCard = () => {
    return (
        <div className="card">
            <img src={card_img} alt="Denim Jeans"/>
                <h1>Tailored Jeans</h1>
                <p className="price">$19.99</p>
                <p>Some text about the jeans..</p>
                <p>
                    <button>Add to Cart</button>
                </p>
        </div>
);
}
export default ItemCard;