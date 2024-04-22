import React from 'react'
import './Product.css';
import freq from './Fetchreq';
//navbar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Landing() {
    const products = freq("GET", "home")
    console.log(products);
    return (
        <div>
            {!products ? (
                <h1>Loading...</h1>
            ) : (products.length)}
            <div>
                <header>
                    <p>5% off on prepaid orders!</p>
                </header>
                <Navbar collapseOnSelect expand="lg" className="bg-secondary" style={{display:'flex',position:'absolute',margin:'0',top:'39px',height:'auto',alignItems:'center',padding:'0'}}>
                        <Navbar.Brand href="#home" style={{color:'black'}}>
                            <img src='Images/bg.png' style={{height:'50px',borderRadius:'25px',marginRight:'10px'}}/>
                            GB Clothing
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="allproduct" style={{color:'black',fontSize:'18px'}}>
                                    Shop
                                </Nav.Link>
                                <NavDropdown title="Category" id="collapsible-nav-dropdown" style={{color:'black',fontSize:'18px'}}>
                                    <NavDropdown.Item href="/" >
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
                <div className="background">
                    <img src='/Images/bg.png' className="cover" alt='' />
                </div>
                <div className="categories">
                    <h2 className="fc">FEATURED COLLECTION</h2>
                    <div className="card-slider">
                        <div className="content">
                            <div className="card">
                                <img src="/Images/bg2.jpg" className="card-image" alt='' />
                                <div className="card-body">
                                    <button className="card-button" onClick={() => window.location.href = 'cart'}>Quick Add</button>
                                </div>
                            </div>
                            <p>Rs.699</p>
                        </div>
                        <div className="content">
                            <div className="card">
                                <img src="/Images/bg1.jpg" className="card-image" alt='' />
                                <div className="card-body">
                                    <button className="card-button" onClick={() => window.location.href = 'cart'}>Quick Add</button>
                                </div>
                            </div>
                            <p>Rs.999</p>
                        </div>
                        <div className="content">
                            <div className="card">
                                <img src="/Images/bg2.jpg" className="card-image" alt='' />
                                <div className="card-body">
                                    <button className="card-button" onClick={() => window.location.href = 'cart'}>Quick Add</button>
                                </div>
                            </div>
                            <p>Rs.699</p>
                        </div>
                        <div className="content">
                            <div className="card">
                                <img src="/Images/bg1.jpg" className="card-image" alt='' />
                                <div className="card-body">
                                    <button className="card-button" onClick={() => window.location.href = 'cart'}>Quick Add</button>
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
                                <img src="/Images/bg4.jpg" className="cards-image" onClick={() => window.location.href = 'product'} alt='' />
                            </div>
                            <h3>Rs.699</h3>
                        </div>
                        <div className="content">
                            <div className="cards">
                                <img src="/Images/bg3.jpg" className="cards-image" onClick={() => window.location.href = 'product'} alt='' />
                            </div>
                            <h3>Rs.699</h3>
                        </div>
                        <div className="content">
                            <div className="cards">
                                <img src="/Images/bg5.jpg" className="cards-image" onClick={() => window.location.href = 'product'} alt='' />
                            </div>
                            <h3>Rs.649</h3>
                        </div>
                        <div className="content">
                            <div className="cards">
                                <img src="/Images/bg6.jpg" className="cards-image" onClick={() => window.location.href = 'product'} alt='' />
                            </div>
                            <h3>Rs.649</h3>
                        </div>
                    </div>
                </div>
                <div className="Unisex">
                    <p>Shop by Category</p>
                    <div className="all-items">
                        <div className="content">
                            <div className="all">
                                <img src="/Images/bg1.jpg" className="all-image" onClick={() => window.location.href = 'product'} alt='' />
                                <button>Sweartshirt</button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="all">
                                <img src="/Images/bg3.jpg" className="all-image" onClick={() => window.location.href = 'product'} alt='' />
                                <button>Round Neck T-Shirt</button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="all">
                                <img src="/Images/bg14.jpg" className="all-image" onClick={() => window.location.href = 'product'} alt='' />
                                <button>Polo T-Shirt</button>
                            </div>
                        </div>
                        <div className="content">
                            <div className="all">
                                <img src="/Images/DSC07272.jpg" className="all-image" onClick={() => window.location.href = 'product'} alt='' />
                                <button>Unisex T-shirt</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
