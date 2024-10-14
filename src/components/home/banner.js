import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './../../App.css';
import Animation from '../animation';

const Banner = () => {
    return (
        <>
        <Animation/>
            <Container className='py-5'>
                <Row className='align-items-center' style={{ gap: '30px' }}>
                    <Col className='col-lg-6' 
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                    >
                        <a href='/images/profile1.jpg'>
                            <img src='/images/profile1.jpg'
                            className='img-fluid bannerRadius shadow-lg'
                            alt="Profile" />
                        </a>
                    </Col>
                    <Col className='col-lg-5 d-flex justify-content-center flex-column'
                        data-aos="fade-down-left"
                    >
                        <h1 className='fw-bold'>Laegan S. Pangantihon</h1>
                        <h3>Web Developer</h3>
                    </Col>
                </Row>
            </Container>
            
        </>
    );
}

export default Banner;
