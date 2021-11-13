import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import './Header.css';

const Header = () => {
    const {user, logout, admin} = useAuth();

    return (
        <>
            <Navbar bg="dark"  variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link}  to="/"><h2>Watch Shop</h2></Navbar.Brand>
                    <Navbar.Toggle className="items"/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} className="items" to="/explore">Explore Products</Nav.Link>
                        
                            { 
                                user?.email ? 
                                    <>
                                        {
                                            admin && <Nav.Link as={Link} className="items" to="/dashboard/manageAllOrders">Dash Board</Nav.Link>
                                        }
                                        {
                                            !admin && <Nav.Link as={Link} className="items" to="/dashboard/manageOrders">Dash Board</Nav.Link>
                                        }
                                        <Button onClick={logout} className="me-3" variant="light">Logout</Button>
                                    </>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        <Navbar.Text>
                            
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;