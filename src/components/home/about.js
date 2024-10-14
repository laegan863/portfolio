import { Container } from "react-bootstrap";
const About = () => {
    return(
        <>
            <Container className="my-5"
                data-aos="zoom-in-up"
            >
                <div className="card borderTop shadow p-5">
                    <div className="text-uppercase h3 fw-bold"
                        data-aos="zoom-in-up"
                    >
                        about me
                    </div>
                    <p style={{ fontSize: 18 }} 
                        data-aos="zoom-in-up"
                    >
                        As a web developer with a strong proficiency 
                        in HTML, CSS, PHP, Bootstrap, Laravel, React Native, Shopify, 
                        and WordPress, I am seeking a challenging position where I can 
                        leverage my extensive experience in developing robust and user-friendly 
                        web applications. My expertise in API integration, including SMS APIs 
                        and payment gateways such as NMI, Stripe, and PayPal, equips me to create 
                        seamless and efficient web solutions. I am eager to contribute to a dynamic 
                        team and help drive innovative projects that enhance user experiences and achieve 
                        business goals.
                    </p>
                </div>
            </Container>
        </>

    )
}

export default About;