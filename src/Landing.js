import React from 'react'
import './Product.css';
function Landing() {
    return (
        <div>
            <header>
                <p>BUY 1 GET FREE 1 !!</p>
            </header>
            <div className="navbar">
                <a href="/"><img src="images/bg.png" className="logo" alt=''/></a>
                <p>GB Clothings</p>
                <ul>
                    <li><a href="allproduct">MEN</a></li>
                    <li><a href="/">WOMEN</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">CART</a></li>
                    <li><a href="/">PROFILE</a></li>
                </ul>
            </div>
            <div className="background">
                <img src="images/bg.png" className="cover" alt=''/>
            </div>
            <div className="categories">
                <h2 className="fc">FEATURED COLLECTION</h2>
                <div className="card-slider">
                    <div className="content">
                        <div className="card">
                            <img src="images/bg2.jpg" className="card-image" alt='' />
                            <div className="card-body">
                                <button className="card-button" onClick={() => window.location.href='collection'}>Quick Add</button>
                            </div>
                        </div>
                        <p>Rs.699</p>
                    </div>
                    <div className="content">
                        <div className="card">
                            <img src="images/bg1.jpg" className="card-image" alt='' />
                            <div className="card-body">
                                <button className="card-button" onClick={() => window.location.href='collection'}>Quick Add</button>
                            </div>
                        </div>
                        <p>Rs.999</p>
                    </div>
                    <div className="content">
                        <div className="card">
                            <img src="images/bg2.jpg" className="card-image" alt=''/>
                            <div className="card-body">
                                <button className="card-button" onClick={() => window.location.href='collection'}>Quick Add</button>
                            </div>
                        </div>
                        <p>Rs.699</p>
                    </div>
                    <div className="content">
                        <div className="card">
                            <img src="images/bg1.jpg" className="card-image" alt=''/>
                            <div className="card-body">
                                <button className="card-button" onClick={() => window.location.href='collection'}>Quick Add</button>
                            </div>
                        </div>
                        <p>Rs.999</p>
                    </div>
                    <div className="item">
                        <div className="item"></div>
                        <a href="collection"> SHOP ALL FEATURED COLLECTION </a>
                    </div>
                </div>
            </div>
            <div className="new-arrival">
                <p>New Arrivals</p>
                <div className="line"></div>
                <div className="new">
                    <div className="content">
                        <div className="cards">
                            <img src="images/bg4.jpg" className="cards-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.699</h3>
                    </div>
                    <div className="content">
                        <div className="cards">
                            <img src="images/bg3.jpg" className="cards-image" onClick={() => window.location.href='collection'} alt='' />
                        </div>
                        <h3>Rs.699</h3>
                    </div>
                    <div className="content">
                        <div className="cards">
                            <img src="images/bg5.jpg" className="cards-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.649</h3>
                    </div>
                    <div className="content">
                        <div className="cards">
                            <img src="images/bg6.jpg" className="cards-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.649</h3>
                    </div>
                </div>
            </div>

            <div className="Unisex">
                <p>MENS & WOMENS COLLECTIONS</p>
                <div className="btn">
                    <button>Round Neck T-Shirt</button>
                    <button>Sweartshirt</button>
                    <button>Polo T-Shirt</button>
                    <button>Unisex T-shirt</button>
                </div>
                <div className="all-items">
                    <div className="content">
                        <div className="all">
                            <img src="images/bg6.jpg" className="all-image" onClick={() => window.location.href='collection'} alt='' />
                        </div>
                        <h3>Rs.649</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg1.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.999</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg3.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.699</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg5.jpg" className="all-image" onClick={() => window.location.href='collection'} alt='' />
                        </div>
                        <h3>Rs.649</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg9.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg10.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg11.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg12.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg13.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.599</h3>
                    </div>
                    <div className="content">
                        <div className="all">
                            <img src="images/bg14.jpg" className="all-image" onClick={() => window.location.href='collection'} alt=''/>
                        </div>
                        <h3>Rs.599</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing