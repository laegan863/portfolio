import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../App.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <>
            <Navbar expand="lg" sticky="top" className="bg-navbar py-3 shadow-sm" style={{ borderRadius: '0 0 50px 50px' }}>
                <Container>
                    <Navbar.Brand href="#home" className='text-light fw-bold'>
                        <i className="bi bi-person-circle"></i> My Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Link className='text-decoration-none text-light nav-menu px-3 fw-bold' to='/'>
                                Home
                            </Link>
                            <Link className='text-decoration-none text-light nav-menu px-3 fw-bold' to='/'>
                                Sample Projects
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;
