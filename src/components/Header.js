import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../Images/logo.png'

export class Header extends Component {
  render() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/home"><img src={logo} height="30" alt="Your logo" className="d-inline-block align-top" /></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/business">Business</Nav.Link>
              <Nav.Link href="/entertainment">Entertainment</Nav.Link>
              <Nav.Link href="/genrel">Genrel</Nav.Link>
              <Nav.Link href="/health">Health</Nav.Link>
              <Nav.Link href="/contact">Science</Nav.Link>
              <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/technology">Technology</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header
