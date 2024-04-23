import React from 'react'
//navbar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Cart.css';

function Cart() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-secondary" style={{ display: 'flex', position: 'absolute', margin: '0', top: '0px', height: 'auto', alignItems: 'center', padding: '0' }}>
                <Navbar.Brand href="#home" style={{ color: 'black' }}>
                    <img src='/Images/bg.png' style={{ height: '50px', borderRadius: '25px', marginRight: '10px' }} />
                    GB Clothing
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Category" id="collapsible-nav-dropdown" style={{ color: 'black', fontSize: '18px' }}>
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
                        <Nav.Link href="/" style={{ color: 'black', fontSize: '18px' }}>
                            Favourite
                        </Nav.Link>
                        <Nav.Link href="/" style={{ color: 'black', fontSize: '18px' }}>
                            About
                        </Nav.Link>
                        <Nav.Link href="login" style={{ color: 'black', fontSize: '18px' }}>
                            Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='products'>
                <div className='first-product'>
                    <img src='/Images/bg4.jpg' alt='' className='product-image' />
                    <div className='product-details'>
                        <h2>Luffy Gear 5th (Unisex)</h2>
                        <p>280 GSM Premiuim Cotton.<br></br>
                            All Season Wear.<br></br>
                            DTF Design Print.
                        </p>
                    </div>
                </div>
                <div className='first-product'>
                    <img src='/Images/bg5.jpg' alt='' className='product-image' />
                    <div className='product-details'>
                        <h2>Luffy Gear 5th (Unisex)</h2>
                        <p>280 GSM Premiuim Cotton.<br></br>
                            All Season Wear.<br></br>
                            DTF Design Print.
                        </p>
                    </div>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
