import React from "react";
import { Button, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";
import "../../node_modules/video-react/dist/video-react.css";

import Header from "../components/Header";
import DetailedFooter from "../components/DetailedFooter";

import iosApp from "../images/iosApp.png";
import androidApp from "../images/androidApp.png";
import Patient from "../images/patient.png";
import Driver from "../images/driver.png";
import { Player } from "video-react";

import nbc from "../images/news/nbc-ct.png";
import publichealth from "../images/news/publichealthyale.png";
import ceid from "../images/news/ceid.png";
import whitescreen from "../images/news/white-screen.png";

import Roseman from "../images/partners/roseman_flyer.png";

function buttonClickHandler() {
  console.log("clicked");
}

const OpeningPage = () => (
  <div>
    <Header />
    <div className="pharm-background background-home container center column-dir after-heading">
      <div className="homescreen center container column-dir">
        <h2 className="opening-text">
          Free on-demand medication pick-up and delivery from any pharmacy for
          the elderly and vulnerable during COVID-19.
        </h2>

        <div classname="container">
          <a
            href="https://apps.apple.com/us/app/pills2me/id1512849998"
            target="_blank"
          >
            <img
              src={iosApp}
              style={{
                width: "160px",
                height: "62px;",
                objectFit: "cover",
                borderRadius: "10px",
                margin: "10px"
              }}
            ></img>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.apps.pills2me"
            target="_blank"
          >
            <img
              src={androidApp}
              style={{
                width: "160px",
                height: "62px;",
                objectFit: "cover",
                borderRadius: "10px",
                margin: "10px"
              }}
            ></img>
          </a>
        </div>

        <div className="">
          <div className="container space">
            <Button variant="" onClick={() => window.scrollTo(0, 0)}>
              <Link to="/patient-form">
                <div className="round-button container center column-dir">
                  <img className="icon" src={Patient} />
                  Request Delivery
                </div>
              </Link>
            </Button>

            <Button variant="" onClick={buttonClickHandler}>
              <Link to="/driver-form">
                <div className="round-button container center column-dir">
                  <img className="icon" src={Driver} />
                  Drive for Pills2Me
                </div>
              </Link>
            </Button>
          </div>
          <div className="container space">
            <h3 className="button-labels">
              You can also call our toll-free number (800)-475-7488 to make the
              prescription pickup request.
            </h3>

            <h3 className="button-labels">
              Have free time to help deliver medication to patients?
            </h3>
          </div>
        </div>
      </div>
      <div className="section">
        <iframe
          src="https://youtube.com/embed/wBpzBJFz_U8"
          frameborder="0"
          title="Pills2Me"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "70%", height: "400px" }}
        />
      </div>

      <div className="section" style={{ color: "#0084F4" }}>
        <h1 class="section-heading">Bringing Your Pharmacy to You</h1>
        <div className="container stretch extra-margin responsiveCols">
          <div className="left-align blue-border-box top-align">
            <h2 className="center-text ">Our Patients</h2>
            <ul style={{ marginTop: "20px" }}>
              <li class="offerList">
                Free on-demand medication delivery from any pharmacy.
              </li>
              <li className="offerList">
                we deliver in as little as 45 minutes from request.
              </li>
              <li className="offerList">Free pharmacist consultation</li>
              <li className="offerList">
                Purchase over-the-counter items and have them delivered within a
                couple of hours.
              </li>
              <li className="offerList">
                Enjoy special offers and discounts from our partner pharmacies.
              </li>
            </ul>
          </div>
          <div className="left-align blue-border-box top-align">
            <h2 className="center-text">Our Pharmacy Partners</h2>
            <ul style={{ marginTop: "20px" }}>
              <li class="offerList">
                Free on-demand medication delivery for your elderly and
                immunocompromised patients.
              </li>
              <li className="offerList">Free promotion on our platforms.</li>
              <li className="offerList">
                Patients can purchase your OTC items using our platform.
              </li>
              <li className="offerList">And much more.....</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <Row>
          <Col md={8}>
            <div
              className="section-text container space column-dir"
              style={{
                height: "100%",
                textAlign: "center",
                padding: "50px"
              }}
            >
              <h1 class="section-heading">Need to Consult a Doctor?</h1>
              <p style={{ fontSize: "20px" }}>
                For Nevada patients, we have partnered with the Roseman Medical
                Group to give you access to licensed doctors.
              </p>
              <a href="https://rosemanmedicalgroup.com/" target="_blank">
                <Button className="blue-btn">
                  Visit Roseman Medical Group
                </Button>
              </a>
            </div>
          </Col>
          <Col>
            <img
              src={Roseman}
              alt="Roseman Medical Group Flyer"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </div>

      {/**************** PILLS2ME BY THE NUMBERS ********************/}
      {/* <div className="section" style={{ backgroundColor: '#e6e6e6' }}>
				<Row>
					<Col>
						<h1 className="bythenumber">88</h1>
						<h4 className="bythenumbers-text">Drivers</h4>
					</Col>
					<Col>
						<h1 className="bythenumber">3</h1>
						<h4 className="bythenumbers-text">Cities across the US</h4>
					</Col>
					<Col>
						<h1 className="bythenumber">4</h1>
						<h4 className="bythenumbers-text">Partner Pharmacies</h4>
					</Col>
				</Row>
			</div> */}

      {/**************** PILLS2ME IN THE NEWS ********************/}
      <div className="section">
        <h1 className="section-heading">Pills2Me in the News</h1>
        <hr className="colored-line" />
        <div className="container center">
          <Carousel style={{ width: "80%" }} className="shadow">
            <Carousel.Item>
              <img className="d-block w-100" src={nbc} alt="NBC Article" />

              <Carousel.Caption>
                <a
                  className="carousel-link"
                  target="_blank"
                  href="https://www.nbcconnecticut.com/news/coronavirus/volunteer-prescription-delivery-taking-off-in-new-haven/2264635/"
                >
                  <h3>
                    “Volunteer Prescription Delivery Taking Off in New Haven”
                  </h3>
                </a>
                <p>FROM NBC CONNECTICUT</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={publichealth}
                alt="Public Health Yale Article"
              />

              <Carousel.Caption>
                <a
                  className="carousel-link"
                  target="_blank"
                  href="https://publichealth.yale.edu/news-article/24005/"
                >
                  <h3>“YSPH Student Innovators Respond to Pandemic Needs”</h3>
                </a>
                <p>FROM STARTUP YALE</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={ceid} alt="Third slide" />

              <Carousel.Caption>
                <a
                  className="carousel-link"
                  target="_blank"
                  href="https://yaledailynews.com/blog/2020/03/31/yalies-engage-in-community-assistance-during-coronavirus-outbreak/"
                >
                  <h3>
                    “Yalies engage in community assistance during coronavirus
                    outbreak”
                  </h3>
                </a>
                <p>FROM YALE DAILY NEWS</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={whitescreen} />
              <Carousel.Caption
                style={{
                  backgroundColor: "transparent",
                  bottom: "30%",
                  left: "15%",
                  right: "15%",
                  width: "auto"
                }}
              >
                <h3 style={{ color: "black", fontSize: "35px" }}>
                  See more articles on Pills2Me
                </h3>
                <Link to="news">
                  <Button
                    onClick={() => window.scrollTo(0, 0)}
                    variant="primary"
                    className="blue-btn shadow"
                    style={{ marginTop: "20px" }}
                  >
                    PILLS2ME IN THE NEWS
                  </Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/**************** TESTIMONIALS ********************/}
      {/* <div className="section" style={{ backgroundColor: '#e6e6e6' }}>
				<blockquote>
					<h3 className="quote" style={{ paddingBottom: '10px' }}>
						Here is my testimonialHere is my testimonialHere is my testimonialHere is my testimonialHere is
						my testimonialHere is my testimonialHere is my testimonialHere is my testimonialHere is my
						testimonialHere is my testimonialHere is my testimonialHere is my testimonialHere is my
						testimonialHere is my testimonialHere is my testimonialHere is my testimonial
					</h3>
					<p style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
						- John Doe from Illinois
					</p>
				</blockquote>
			</div> */}
      <DetailedFooter />
    </div>
  </div>
);

export default OpeningPage;
