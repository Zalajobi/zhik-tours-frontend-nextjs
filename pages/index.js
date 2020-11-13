import Head from 'next/head'
import Header from "../component/Header";
import React, {Component} from "react";
import LandingPageCarousel from "../component/Carousel/LandingPageCarousel";
import TopDestination from "../component/Landing Page/TopDestination";


export default class Home extends Component {

  render() {

      return (
          <React.Fragment>
              <Header/>

              <LandingPageCarousel/>

              <TopDestination/>

              <Head>
                  <title className="text">Zhik Tours ~ Explore the world at affordable price</title>
              </Head>
          </React.Fragment>
      )
  }
}
