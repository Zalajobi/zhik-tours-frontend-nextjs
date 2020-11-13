import React, {Component} from "react";
import {Row, Col, Card} from "react-bootstrap";

export default class TopDestination extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{backgroundColor: "#f8f9fa"}}>
                    <div className="d-flex align-items-center justify-content-center mt-5 mb-4">
                        <h1 className="text-capitalize top-destination mb-3">Top Destination</h1>
                    </div>
                    <Row className="m-5" style={{width: "96%"}}>
                        <Col xs="auto" md="4" className="mt-5 ml-auto mr-auto">
                            <Card className="top_destination-card">
                                <Card.Img variant="top" src="https://res.cloudinary.com/zalajobi/image/upload/v1605238573/Zhik%20Tours/Landing%20Page/Rooms/img_1_g4gdkm.jpg" className="top_destination-card-image"/>

                                <Card.Body className="d-flex flex-column align-items-center mt-3">
                                    <Card.Link className="text-uppercase mb-4 card-link">Standard Room</Card.Link>

                                    <Card.Subtitle className="mb-5 mt-3">&#65284;350.00 / per night</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs="auto" md="4" className="mt-5 ml-auto mr-auto">
                            <Card className="top_destination-card">
                                <Card.Img variant="top" src="https://res.cloudinary.com/zalajobi/image/upload/v1605238573/Zhik%20Tours/Landing%20Page/Rooms/img_1_g4gdkm.jpg" className="top_destination-card-image"/>

                                <Card.Body className="d-flex flex-column align-items-center mt-3">
                                    <Card.Link className="text-uppercase mb-4 card-link">Standard Room</Card.Link>

                                    <Card.Subtitle className="mb-5 mt-3">&#65284;350.00 / per night</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs="auto" md="4" className="mt-5 ml-auto mr-auto">
                            <Card className="top_destination-card">
                                <Card.Img variant="top" src="https://res.cloudinary.com/zalajobi/image/upload/v1605238573/Zhik%20Tours/Landing%20Page/Rooms/img_1_g4gdkm.jpg" className="top_destination-card-image"/>

                                <Card.Body className="d-flex flex-column align-items-center mt-3">
                                    <Card.Link className="text-uppercase mb-4 card-link">Standard Room</Card.Link>

                                    <Card.Subtitle className="mb-5 mt-3">&#65284;350.00 / per night</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs="auto" md="4" className="mt-5 ml-auto mr-auto">
                            <Card className="top_destination-card">
                                <Card.Img variant="top" src="https://res.cloudinary.com/zalajobi/image/upload/v1605238573/Zhik%20Tours/Landing%20Page/Rooms/img_1_g4gdkm.jpg" className="top_destination-card-image"/>

                                <Card.Body className="d-flex flex-column align-items-center mt-3">
                                    <Card.Link className="text-uppercase mb-4 card-link">Standard Room</Card.Link>

                                    <Card.Subtitle className="mb-5 mt-3">&#65284;350.00 / per night</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs="auto" md="4" className="mt-5 ml-auto mr-auto">
                            <Card className="top_destination-card">
                                <Card.Img variant="top" src="https://res.cloudinary.com/zalajobi/image/upload/v1605238573/Zhik%20Tours/Landing%20Page/Rooms/img_1_g4gdkm.jpg" className="top_destination-card-image"/>

                                <Card.Body className="d-flex flex-column align-items-center mt-3">
                                    <Card.Link className="text-uppercase mb-4 card-link">Standard Room</Card.Link>

                                    <Card.Subtitle className="mb-5 mt-3">&#65284;350.00 / per night</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs="auto" md="4" className="mt-5 ml-auto mr-auto">
                            <Card className="top_destination-card">
                                <Card.Img variant="top" src="https://res.cloudinary.com/zalajobi/image/upload/v1605238573/Zhik%20Tours/Landing%20Page/Rooms/img_1_g4gdkm.jpg" className="top_destination-card-image"/>

                                <Card.Body className="d-flex flex-column align-items-center mt-3">
                                    <Card.Link className="text-uppercase mb-4 card-link">Standard Room</Card.Link>

                                    <Card.Subtitle className="mb-5 mt-3">&#65284;350.00 / per night</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
