import React from "react";
import { Row, Col, Card, Container } from "reactstrap";
import Services from "./Services";
import Commontag from "./Commontag";

export default function Noise() {
  return (
    <div>
      <Container fluid>
        <Row>
          <img className="imag" src="./images/noise2.jpg" />
        </Row>
        <div>
          <Row className="prodview">
            <Row>
              <Col md="6">
                <Card className="card">
                  <div className="diview">
                    <h1>Smart Watches</h1>
                    <h3>Upgrade your lifestyle</h3>
                    <a href="http://localhost:3000/support">Know More</a>
                    <div>
                      <img src="./images/smartwatch.png" style={{ height: 300 }} />
                    </div>
                  </div>
                </Card>
              </Col>

              <Col md="6">
                <Card>
                  <div className="diview">
                    <h1>Wireless Earbuds</h1>
                    <h3>Go wireless in Style</h3>
                    <a href="#">Know More</a>
                    <div>
                      <img src="./images/earbuds.png" style={{ height: 300 }} />
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col sm="6">
                <Card>
                  <div className="diview">
                    <h1>Bluetooth Neckbands</h1>
                    <h3>Tune into your inner noise</h3>
                    <a href="#">Know More</a>
                    <div>
                      <img src="./images/bluetoothbuds.png" style={{ height: 300 }} />
                    </div>
                  </div>
                </Card>
              </Col>

              <Col sm="6">
                <Card>
                  <div className="diview">
                    <h1>Accessories</h1>
                    <h3>Make the best of your Noise gadgets</h3>
                    <a href="#">Know More</a>
                    <div>
                      <img src="./images/accessories.png" style={{ height: 300 }} />
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Row>
        </div>

        <Row>
          <video controls muted autoPlay={"autoplay"} preLoad="auto" loop>
            <source src="./videos/nvideo1.mp4" type="video/mp4" />
          </video>
        </Row>

        <Row>
          <Col sm="6">
            <div className="prodview">
              <h1> Campus <br /> Noisemaker </h1>
              <p> A chance to avail exculsive student discounts </p>
              <h3> <button className="avbtn" onclick={{}}> Avail now </button> </h3>
            </div>
          </Col>

          <Col sm="6">
            <img className="img" src="./images/noise3.png" />
          </Col>
        </Row>

        <Row className="brand">
          <Col className="noise" sm="8">
            <h1>The best, offically</h1>
            <p> Your favourites aprove us.Isn't that another reason to join the <br />
              #Noisemaker family? </p>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0997/6284/files/IDC_2Q21_Unit_-_Transparent.svg?v=1630142885" style={{ height: 200 }} />
            </div>
          </Col>
          <Col sm="4">
            <div>
              <img src="./images/noise1.png" />
            </div>
          </Col>
        </Row>
        <div className="noise">
          <Row>
            <h1> In the Press</h1>
            <p>Places where we have been making Noise</p>
            <Col sm="4">
              <img className="img" src="./images/press1.jpg" />
            </Col>
            <Col sm="4">
              <img className="img" src="./images/press2.png" />
            </Col>
            <Col sm="4">
              {" "}
              <img className="img" src="./images/press3.png" />
            </Col>
          </Row>
        </div>

        <div className="divrow">
          <Services />
        </div>
      </Container>
      <Commontag />
    </div>
  );
}
