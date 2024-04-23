import React from 'react'
import './Product.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function AllProducts() {
    return (
        <div>
            <header>
                <p>5% off on prepaid orders!</p>
            </header>
            <Navbar collapseOnSelect expand="lg" className="bg-secondary" style={{display:'flex',position:'absolute',margin:'0',top:'39px',height:'auto',alignItems:'center',padding:'0',zIndex:'1'}}>
                        <Navbar.Brand href="#home" style={{color:'black'}}>
                            <img src='Images/bg.png' style={{height:'50px',borderRadius:'25px',marginRight:'10px'}} alt=''/>
                            GB Clothing
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="allproduct" style={{color:'black',fontSize:'18px'}}>
                                    Shop
                                </Nav.Link>
                                <NavDropdown title="Category" id="collapsible-nav-dropdown" style={{color:'black',fontSize:'18px'}}>
                                    <NavDropdown.Item href="/">
                                        Oversized Tshirt
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/">
                                        Roundneck Tshirt
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/">
                                        Polo Tshirt
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="/">
                                        Sweartshirt
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/" style={{color:'black',fontSize:'18px'}}>
                                    About
                                </Nav.Link>
                                <Nav.Link href="/" style={{color:'black',fontSize:'18px'}}>
                                    Cart
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            <div class="Unisex-product">
                <div className='section'>
                    <div class="all-items">
                        <div class="content">
                            <div class="all">
                                <img src='/Images/bg4.jpg' class="all-image" onclick="location.href='cart.html'" alt=''/>
                                <p>oversized Tshirt</p>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg1.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg3.jpg" class="all-image" onclick="location.href='cart.html'" alt='' />
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg5.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg9.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section'>
                    <div class="all-items">
                        <div class="content">
                            <div class="all">
                                <img src="images/bg10.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg11.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg12.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg13.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                        <div class="content">
                            <div class="all">
                                <img src="images/bg14.jpg" class="all-image" onclick="location.href='cart.html'" alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts
