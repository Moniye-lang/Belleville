import React, { useState } from "react";
import './productdata';
import './product.css'
import { products } from "./productdata";
import { Star } from "lucide-react";

export default function Prod() {
    const [product, setProduct] = useState(products);
    const [ratings, setRatings] = useState({});

    function All() {
        setProduct(products);
    }

    function FilteredDaily() {
        const filtday = products.filter((item) => item.category === 'Daily Essentials');
        setProduct(filtday);
    }

    function FilteredNight() {
        const filtnight = products.filter((item) => item.category === 'Special');
        setProduct(filtnight);
    }

    function FilteredSensitivity() {
        const filtsen = products.filter((item) => item.category === 'Elec');
        setProduct(filtsen);
    }

    function handleRating(productId, ratingValue) {
        setRatings((prev) => ({
            ...prev,
            [productId]: prev[productId] === ratingValue ? 0 : ratingValue
        }));
    }

    function clearRating(productId) {
        setRatings(prev => {
            const updated = { ...prev };
            delete updated[productId];
            return updated;
        });
    }

    return (
        <div className="mainprod" id="products">
            <h1>Products</h1>
            <div className="fstsub">
                <button onClick={All}>All</button>
                <button onClick={FilteredDaily}>Daily Essentials</button>
                <button onClick={FilteredNight}>Special Products</button>
                <button onClick={FilteredSensitivity}>Electronic Products</button>
            </div>
            <div className="pro">
                {product.map((item) => (
                    <div key={item.id} className="product-card">
                        <img src={item.img} alt={item.products} height={200} width={200} />
                        <div className="text">{item.products} - {item.price}</div> 
                        <div className="nsi">  
                        <button className="but3">Add to Cart</button>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <Star
                                    key={value}
                                    size={20}
                                    color={value <= (ratings[item.id] || 0) ? "#007bff" : "#e4e5e9"}
                                    onClick={() => handleRating(item.id, value)}
                                    style={{ cursor: "pointer", marginRight: "4px" }}
                                    className="star"
                                />
                            ))}
                        </div>

                        {ratings[item.id] > 0 && (
                            <button
                                onClick={() => clearRating(item.id)}
                                className="clear"
                            >
                                Clear Rating
                            </button>
                        )}
                    </div>
                            </div>   
                ))}
            </div>
        </div>
    );
}
    