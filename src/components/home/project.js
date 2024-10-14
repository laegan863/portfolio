import { Container } from "react-bootstrap";
import './../../App.css';
import Img from "../tags/img";
import { Link } from "react-router-dom";
const Project = () => {

    return(
        <>
            <Container className="my-5">
                <div className="card p-5 borderTop shadow">
                    <div className="h3 text-uppercase fw-bold">
                        My Sample Projects
                    </div>
                    <div className="row">
                        <div className="col-lg-4 my-3">
                            <label className="fw-bold mb-2">Voting System</label>
                            <Img source='/images/voting/4.png'/>
                        </div>
                        <div className="col-lg-4 my-3">
                            <label className="fw-bold mb-2">Emergency tracking System</label>
                            <Img source='/images/tracking/2.png'/>
                        </div>
                        <div className="col-lg-4 my-3">
                            <label className="fw-bold mb-2">Appointment System</label>
                            <Img source='/images/appointment/1.png'/>
                        </div>
                    </div>
                    <div>
                        <Link to="/projects" className="link link-primary text-decoration-none fw-bold">
                            View all projects
                        </Link>
                    </div>
                </div>
            </Container>
        </>
    )

}

export default Project;