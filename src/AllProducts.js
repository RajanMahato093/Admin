import React from 'react'
import './Product.css';
function AllProducts() {
    return (
        <div>
            <header>
                <p>BUY 1 GET FREE 1 !!</p>
            </header>
            <div class="navbar">
                <a href="#"><img src="images/bg.png" class="logo" /></a>
                <p>GB Clothings</p>
                <ul>
                    <li><a href="allproduct.html">MEN</a></li>
                    <li><a href="#">WOMEN</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CART</a></li>
                    <li><a href="#">PROFILE</a></li>
                </ul>
            </div>
            <div class="Unisex">
                <p>MENS & WOMENS COLLECTIONS</p>
                <div class="btn">
                    <button>Round Neck T-Shirt</button>
                    <button>Sweartshirt</button>
                    <button>Polo T-Shirt</button>
                    <button>Unisex T-shirt</button>
                </div>
                <div class="all-items">
                    <div class="content">
                        <div class="all">
                            <img src='/Images/bg4.jpg' class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.649</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg1.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.999</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg3.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.699</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg5.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.649</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg9.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg10.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg11.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg12.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.449</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg13.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.599</h3>
                    </div>
                    <div class="content">
                        <div class="all">
                            <img src="images/bg14.jpg" class="all-image" onclick="location.href='cart.html'" />
                        </div>
                        <h3>Rs.599</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllProducts
