import React from 'react'
import './Userprofile.css'
//navbar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import freq from './Fetchreq';
import Cookies from "universal-cookie";

function Userprofile() {
    let i1, i2, i3, i4, i5, i6;
    const cookies = new Cookies();
    const handle = (e) => {
        e.preventDefault();
        i1 = e.target.i1.value;
        i2 = e.target.i2.value;
        i3 = e.target.i3.value;
        i4 = e.target.i4.value;
        i5 = e.target.i5.value;
        i6 = e.target.i6.value;
        const formData = { 'n1': i1, 'n2': i2, 'n3': i3, 'n4': i4, 'n5': i5, 'i6': i6 }
        console.log(formData);
        // try {
        //   const response = await fetch('', {
        //     mode: 'cors',
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });
        //   if (response.ok) {
        //     const responseData = await response.json();
        //     console.log(responseData);
        //   }
        //   else {
        //     console.error('No Response');
        //   }
        // } catch (error) {
        //   console.error('Error sending data:', error);
        // }
    }

    const logout = (e) =>{
        e.preventDefault();
        cookies.remove("token");
    }
    return (
        <div className='body'>
            <header>
                <p>5% off on prepaid orders!</p>
            </header>
            <Navbar collapseOnSelect expand="lg" className="bg-secondary" style={{ display: 'flex', position: 'absolute', margin: '0', top: '39px', height: 'auto', alignItems: 'center', padding: '0' }}>
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
                            Cart
                        </Nav.Link>
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
            <div className="form">
                <form onSubmit={handle}>
                    <div className='parent'>
                        <div className='child'>
                            <label className='c1'>Name: </label>
                            <input type='text' placeholder={"User Name"} className='c2' name='i1'></input>
                        </div>
                        <div className='child'>
                            <label className='c1'>Email: </label>
                            <input type='email' placeholder={"youremail@gmail.com"} className='c2' name='i2'></input>
                        </div>
                        <div className='child'>
                            <label className='c1'>Number: </label>
                            <input type='text' placeholder={"Number"} className='c2' name='i3' pattern="[6-9]\d{9}"></input>
                        </div>
                        <div className='child'>
                            <label className='c1'>DOB: </label>
                            <input type='date' placeholder={"00/00/00"} className='c2' name='i4' min="1900-01-01" max="2014-12-31"></input>
                        </div>
                        <div className='child'>
                            <label className='c1'>City: </label>
                            <input type='text' placeholder={"eg: Mumbai"} className='c2' name='i5' ></input>
                        </div>
                        <div className='child'>
                            <label className='c1'>State: </label>
                            <input type='text' placeholder={"eg: Maharashtra"} className='c2' name='i6'></input>
                        </div>
                        <div className='button'>
                            <button> Submit </button>
                        </div>
                    </div>
                </form>

            </div>
            <div className='edit'>
                <button>Edit</button>
            </div>
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Userprofile
