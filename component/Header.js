import React, {Component} from 'react'
import Head from "next/head";
import {Form, FormControl, Nav, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                    <div className="container">
                        {/*<a className="navbar-brand" href="#">Start Bootstrap</a>*/}
                        <a className="navbar-brand" href="#">
                            <img src="https://res.cloudinary.com/zalajobi/image/upload/v1605233607/Zhik%20Tours/Logo/logo_transparent_wetmtj.png" style={{height: "100px", width: "100px"}}/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <Head>
                    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"/>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"/>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"/>
                </Head>
            </React.Fragment>
        )
    }
}
