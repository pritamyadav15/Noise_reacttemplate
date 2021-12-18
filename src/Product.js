import React from "react";
import { Row, Col, Card } from "reactstrap";
import data from "./data";
import Commontag from './Commontag';


export default function Product() {
  return (
    <>
      <div className="head">
        <img src="./images/noise5.jpg" />
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
