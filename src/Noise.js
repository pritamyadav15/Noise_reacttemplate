import React, { useState } from "react";
import { Row, Col, Card, Container } from "reactstrap";
import Noidivrow from "./Noidivrow";
import Commontag from './Commontag';


export default function Noise() {
  const [active, setActive] = useState();
  return (
    <div>
        <Container fluid>
      <Row>
        <img
          className="imag"
          src="https://m.media-amazon.com/images/I/71-nFlhHVjL._SL1500_.jpg"
        />
      </Row>
      <div >
        <Row className="prodview">
          <Row>
            <Col md="6">
              <Card className="card">
                <div className="diview">
                  <h1>Smart Watches</h1>
                  <h3>Upgrade your lifestyle</h3>
                  <a href="http://localhost:3000/support">Know More</a>
                  <div >
                    <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/banner_6dfd25d2-894e-41bf-b2aa-7e133ddabdf7_360x.png?v=1628860894" style={{height:300}} />
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
                  <div >
                    <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group_7_360x.png?v=1612690910" style={{height:300}} />
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
                  <div >
                    <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/Mask_Group-3_d51a1e9a-a1f0-4bbf-838d-322f6ee4272b_360x.png?v=1612690782" style={{height:300}} />
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
                  <div >
                    <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/Noise_Smart_Wearables_Accessories_360x.png?v=1613499955"style={{height:300}} />
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Row>
      </div>
    
      <Row>
      <video controls
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop >
      <source src="https://cdn.shopify.com/s/files/1/0997/6284/files/Wide_Snippet.mp4?v=1633179474" type="video/mp4"/>
     </video>
      </Row>
     
      
      < Row >
      
          <Col sm="6">
          <div className="prodview">
          <h1>Campus <br />
             Noisemaker</h1>
<p> A chance to avail exculsive student discounts </p>
<h3>
<button className="avbtn" onclick={{}}>Avail now</button>

</h3>
          </div>
        
          </Col>
          <Col sm="6">
            
              <img className="img" src="https://cdn.shopify.com/s/files/1/0997/6284/articles/image_2021_10_20T08_52_00_527Z.png?v=1634791716" />
          
          </Col>
      </Row>
      <Row className="brand">
        <Col className="noise" sm="8">
          <h1>The best, offically</h1>
          <p>Your favourites aprove us.Isn't that another reason to join the <br />
            #Noisemaker family? </p>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/IDC_2Q21_Unit_-_Transparent.svg?v=1630142885" style={{height:200}} />
            </div>

        </Col>
        <Col sm="4">
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/Noise_Smart_Watches_India_s_No_1_Wearable_Watch_Brand_480x.png?v=1619766767" />
          </div>
        </Col>

      </Row>
      <div className="noise">
        <Row >
          <h1> In the Press</h1>
          <p>Places where we have been making Noise</p>
          <Col sm="4"><img className="img"  src="https://todayepaper.co/wp-content/uploads/2021/02/13.jpg" /></Col>
          <Col sm ="4"><img className="img" src="https://www.aranca.com/assets/uploads/logos/publishers/et-logo_200921_132540.png" /></Col>
          <Col sm="4"> <img className="img" src="https://seekvectorlogo.com/wp-content/uploads/2018/11/techradar-vector-logo.png" /></Col>
          </Row>

      </div>
      <div className="divrow">
        <Noidivrow />
      </div>
      </Container>
      <Commontag />
      
    </div>
  );
}
