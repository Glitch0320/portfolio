import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

// A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

const Navigation = ({ resume, setResume }) => {
    return (
        <Navbar>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto fixed-top"
                    style={{ backgroundColor: 'indigo' }}>
                    <Nav.Link style={{ color: 'white' }} href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="#bio">Who I Am</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} href="#goals">Who I'm Becoming</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} onClick={() => setResume(true)}>Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation