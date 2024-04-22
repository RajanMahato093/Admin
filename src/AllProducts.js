import React from 'react'
import './Product.css';
function AllProducts() {
    return (
        <div>
            <header>
                <p>5% off on prepaid orders!</p>
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
                <div className='section'>
                    <div class="all-items">
                        <div class="content">
                            <div class="all">
                                <img src='/Images/bg4.jpg' class="all-image" onclick="location.href='cart.html'" />
                                <p>oversized Tshirt</p>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg1.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg3.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg5.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg9.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div class="all-items">
                        <div class="content">
                            <div class="all">
                                <img src="images/bg10.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg11.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg12.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg13.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg14.jpg" class="all-image" onclick="location.href='cart.html'" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts
