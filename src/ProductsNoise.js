import React from "react";
import { Row, Col, Card } from "reactstrap";
import data from "./data";
import Commontag from './Commontag';


export default function ProductsNoise() {
  return (
    <>
      <div className="head">
        <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/Common_Page_Banner_2_4fe0c0c8-5ca3-4a89-95af-dfb2400f7a34_1500x.jpg?v=1633347167" />
      </div>
      <Row>
        {data.map((d) => (
          <Col sm="4" >
            <Card key={d.id} className="diview">
              <img src={d.img} style={{height:300, width:300}} />
              <h2>{d.name} </h2>
              <strong> ₹ {d.price}</strong>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
          <Commontag />
      </div>
    </>
  );
}
