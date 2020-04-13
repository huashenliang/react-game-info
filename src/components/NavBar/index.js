import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl,Button } from 'react-bootstrap'


const MainNav = () => {
    return ( 
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Game Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">PC Games</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">PS4</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">OneBox</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">All Games</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>

    );
}
 
export default MainNav;