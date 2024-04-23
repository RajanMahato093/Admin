import React from 'react'
import './Product.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function About() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-secondary" style={{display:'flex',position:'absolute',margin:'0',top:'0px',height:'auto',alignItems:'center',padding:'0',zIndex:'1'}}>
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
                                <Nav.Link href="login" style={{color:'black',fontSize:'18px'}}>
                                    Profile
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            <div className="about">
                <h2>About us</h2><div className='line'></div>
                <p>Welcome to GujjuBoy Clothing, where fashion is not just a trend - it's a lifestyle! Specializing in trendy t-shirts and hoodies, we are your ultimate destination for style that speaks volumes.</p>
                <p>Founded by Bhavik Jamaliya, a fashion enthusiast and trendsetter, we are all about celebrating individuality with every stitch. Each piece in our collection is carefully curated to embody the essence of the GujjuBoy spirit—bold, authentic, and always on point.</p>
                <p style={{margin:'0px'}}>Driven by our love for all things trendy and our commitment to quality, we strive to offer you the best in fashion.</p>
            </div>
            <div className="contact">
                <h2>Contact</h2><div className='line'></div>
                <p>If you have any questions or concerns regarding your order, delivery, or return process,
                    please don’t hesitate to reach out to our customer service team.
                    You can contact us via email at gujjuclothing@gmail.com  or by phone at8655418681. Our team is will assist you promptly
                </p>
                <p>Thank you for choosing GujjuBoy Clothing. We appreciate your trust in us and look forward to serving you again in the future.</p>
                <p style={{margin:'0px'}}>Stay stylish, stay cool!</p>
            </div>
        </div >
    )
}

export default About
