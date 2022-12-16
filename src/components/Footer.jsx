import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaFreeCodeCamp } from 'react-icons/fa'

// A single `Footer` component that appears on multiple pages
const Footer = ({ show, setShow }) => {

    return (
        <Navbar >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="fixed-bottom" style={{ backgroundColor: 'indigo', justifyContent: 'right', fontSize:'1.5rem', paddingBottom:'.5rem' }}>
                        <Nav.Link className='text-light' href="#" onClick={() => setShow(true)}><AiOutlineMail /></Nav.Link>
                        <Nav.Link className='text-light' href="https://github.com/Glitch0320"><AiOutlineGithub /></Nav.Link>
                        <Nav.Link className='text-light' href="https://www.linkedin.com/in/jon-ziemann-825798246/"><AiFillLinkedin /></Nav.Link>
                        <Nav.Link className='text-light' href="https://www.freecodecamp.org/fccd25b65df-d538-43e2-ac4d-e9b899a1a4a7"><FaFreeCodeCamp /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer