import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

export default class LandingPageCarousel extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="overlay">
                    {/*Carousel Slider*/}
                    <Carousel className="h-100 w-auto">
                        <Carousel.Item interval={3000}>
                            <img className="block w-100" src="https://res.cloudinary.com/zalajobi/image/upload/v1605225253/Zhik%20Tours/eiffel-tower-3349075_1920_bjk8w0.jpg" alt="eiffel Tower" style={{objectFit: "cover"}}/>

                            <Carousel.Caption>
                                <div className="d-flex flex-column w-100 align-items-center justify-content-center mb-2">
                                    <h1 className="font-italic font-weight-light slider-font">Take a trip to the <b className="text-uppercase font-weight-bolder">eiffel towers</b> <b>Venice</b></h1>
                                    <button className="btn text-white mb-1 semi-transparent-button">Discover</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={3000}>
                            <img className="block w-100" src="https://res.cloudinary.com/zalajobi/image/upload/v1605225253/Zhik%20Tours/grand-canal-1246629_1920_jg0lpb.jpg" alt="Grand Canal, Venice" style={{objectFit: "cover"}}/>

                            <Carousel.Caption>
                                <div className="d-flex flex-column w-100 align-items-center justify-content-center mb-2">
                                    <h1 className="font-italic font-weight-light slider-font">Explore the beauty of the <b className="text-uppercase font-weight-bolder">Grand Canal, </b> <b>Venice</b></h1>
                                    <button className="btn text-white mb-1 semi-transparent-button">Discover</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={3000}>
                            <img className="block w-100" src="https://res.cloudinary.com/zalajobi/image/upload/v1605225253/Zhik%20Tours/acropolis-2725918_1920_acrtxm.jpg" alt="Ancient Athens, Greece" style={{objectFit: "cover"}}/>

                            <Carousel.Caption>
                                <div className="d-flex flex-column w-100 align-items-center justify-content-center mb-2">
                                    <h1 className="font-italic font-weight-light slider-font">Explore the Ancient city of <b className="text-capitalize font-weight-bolder">athens, greece</b></h1>
                                    <button className="btn text-white mb-1 semi-transparent-button">Discover</button>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </React.Fragment>
        )
    }
}
