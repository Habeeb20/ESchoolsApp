import { Link } from "react-router-dom";
import Container  from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import React from 'react'
import footerLogo from '../../../assets/website/logo.png'

export default function HomeNavbar() {
  return (
    <div>
        <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand d-flex align-items-center'>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" class="bi bi-backpack-fill" viewBox="0 0 16 16">
                <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
                <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6.002 6.002 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6.04 6.04 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
              </svg> */}
              <span className='mx-2 text-light lh-1 fw-semibold'>
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              
                ESchools
              
             
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light h-6' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav  className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/admissiondat' className='text-uppercase'>Admission</Nav.Link>
              <Nav.Link href="/secondary-schools/private" className='text-uppercase'>Schools</Nav.Link>
              <Nav.Link href='/teacherpage' className='text-uppercase'>Teacher</Nav.Link>
              <Nav.Link href='/ejobslogin' className='text-uppercase'>E-jobs</Nav.Link>
              <Nav.Link href='/scholarship' className='text-uppercase'>Scholarships</Nav.Link>
              <Nav.Link href='/exammainpage' className='text-uppercase'>Exams</Nav.Link>
              <Nav.Link href='/Aihome' className='text-uppercase'>Comparism</Nav.Link>
              <Nav.Link href='/mainpage' className='text-uppercase'>Books</Nav.Link>
              <Nav.Link href='/tutorial' className='text-uppercase'>Tutorial</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Abroad</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}
