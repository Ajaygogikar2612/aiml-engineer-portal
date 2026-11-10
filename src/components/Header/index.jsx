import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'

const Header = ({ onOpenModal }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-2">
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold fs-4 text-primary d-flex align-items-center">
          <i className="bi bi-cpu-fill me-2 fs-3"></i>AI/ML Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link href="#hero">Overview</Nav.Link>
            <Nav.Link href="#why-us">Why Us</Nav.Link>
            <Nav.Link href="#eligibility">Eligibility</Nav.Link>
            <Nav.Link href="#curriculum">Curriculum</Nav.Link>
            <Nav.Link href="#placements">Placements</Nav.Link>
            <Button variant="primary" className="ms-lg-2 px-3 fw-medium" onClick={onOpenModal}>
              Request Call Back
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header