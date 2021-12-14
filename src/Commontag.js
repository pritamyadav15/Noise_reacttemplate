import React from "react";
import { Row, Col, Card, Container } from "reactstrap";


export default function Commontag() {
  return (
    <div>
      <Container>
        <div className="stadiv">
          <h1>Crafted for your inner 'Noise'</h1>

          <h5 style={{ marginTop: 25 }}>
            Founded in 2018, Noise is the leading Indian connected lifestyle
            brand that is changing the way India remains connected and building
            India's largest and most active buoyant lifestyle community. With
            its remarkable range of best-in-class smart hearables and wearables
            Noise has also been awarded India’s No.1 wearable watch brand in
            2020 by IDC Worldwide Wearable Device Tracker. Smart h5roducts with
            the latest features make Noise the right brand for your music and
            fitness needs.
          </h5>
        </div>
        <hr />
        <Row>
          <Col sm="3">
            <h3>Our products</h3>
            <p>Smart Watch</p>
            <p>Bluetooth Earphone</p>
            <p>Wireless Earbuds</p>
            <p>Fit App</p>
          </Col>
          <Col sm="3">
            <h3>Support</h3>
            <p>FAQ</p>
            <p>Download your Invoice</p>
            <p>Track Your Order</p>
            <p>Warrenty Guidelines</p>
          </Col>
          <Col sm="3">
            <h3>About Noise</h3>
              <p>About Us</p>
            <p>Stories</p>
            <p>Careers</p>
          </Col>
          <Col sm="3">
            <h3>Follow us</h3>
            <p>
              <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/Instagram_1x.png?v=1600417234" />{" "}
              Join over 650K fans
            </p>
            <p>
              <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/fb_1x.png?v=1600417211" />{" "}
              over 450K fans
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
