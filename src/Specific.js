import React from 'react'
import './Product.css';

function Specific() {
    return (
        <div>
            <header>
                <p>BUY 1 GET FREE 1 !!</p>
            </header>
            <div className="navbar">
                <a href="/"><img src="images/bg.png" className="logo" /></a>
                <p>GB Clothings</p>
                <ul>
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">ACCOUNT</a></li>
                    <li><a href="/">CART</a></li>
                </ul>
            </div>
            <div className="product">
                <div className="image">
                    <img src="images/bg1.jpg" />
                </div>
                <div className="details">
                    <h1>Luffy Gear 5th (Unisex)</h1>
                    <p>280 GSM Premiuim Cotton.<br></br>
                        All Season Wear.<br></br>
                        DTF Design Print.<br></br>
                        Pre-Shrunk & Bio Washed.<br></br>
                        Free Delivery All Over India.<br></br>
                    </p>
                    <div className="size">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>
                    <div className="buy">
                        <button style={{background: 'coral'}}>Buy Now</button>
                        <button style={{background: 'yellow'}}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specific
