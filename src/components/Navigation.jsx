import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Navigation = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto fixed-top"
                    style={{ backgroundColor: 'indigo' }}>
                    <Nav.Link style={{ color: 'white' }} href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="#bio">Who I Am</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="#goals">Who I'm Becoming</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href='https://glitch0320.github.io/resume/Jon_Ziemann_Resume.pdf' >Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation