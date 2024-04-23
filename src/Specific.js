import React from 'react'
import './Product.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Specific() {
    return (
        <div>
            <header>
                <p>BUY 1 GET FREE 1 !!</p>
            </header>
            <Navbar collapseOnSelect expand="lg" className="bg-secondary" style={{display:'flex',position:'absolute',margin:'0',top:'39px',height:'auto',alignItems:'center',padding:'0',zIndex:'1'}}>
                        <Navbar.Brand href="#home" style={{color:'black'}}>
                            <img src='/Images/bg.png' style={{height:'50px',borderRadius:'25px',marginRight:'10px'}}/>
                            GB Clothing
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
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
                                    Cart
                                </Nav.Link>
                                <Nav.Link href="/" style={{color:'black',fontSize:'18px'}}>
                                    Favourite
                                </Nav.Link>
                                <Nav.Link href="/" style={{color:'black',fontSize:'18px'}}>
                                    About
                                </Nav.Link>
                                <Nav.Link href="login" style={{color:'black',fontSize:'18px'}}>
                                    Profile
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            <div className="product">
                <div className="image-container">
                    <div className='image'>
                        <img src="/Images/bg1.jpg" />
                        <img src="/Images/bg2.jpg" />
                    </div>
                    {/* <div className='image'>
                        <img src="/Images/bg2.jpg" />
                    </div> */}
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
                        <button style={{ background: 'coral' }}>Buy Now</button>
                        <button style={{ background: 'yellow' }}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specific
