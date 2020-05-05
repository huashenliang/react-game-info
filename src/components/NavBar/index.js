import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl,Button } from 'react-bootstrap'
  import { Link } from 'react-router';


const MainNav = () => {
    return ( 
            <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="/">Game Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Game Types" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/pc_game">PC Games</NavDropdown.Item>
                        <NavDropdown.Item href="/ps4_game">PS4 Games</NavDropdown.Item>
                        <NavDropdown.Item href="/xbox">Xbox Games</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">All Games</NavDropdown.Item>
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