import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Container,
} from "reactstrap";
import Commontag from "./Commontag";

const Support = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  const Submit = (e) => {
    e.preventDefault();
    alert(`Email:${data.email} Password: ${data.password}`);
  };

  return (
    <div>
      <Container>
        <Row className="rowsupport">
          <Col sm="5">
            <Form onSubmit={Submit}>
              <FormGroup>
                <Label for>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  id="exampleEmail"
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for>Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  id="examplePassword"
                  placeholder="Password"
                />
              </FormGroup>
              <p>
                {" "}
                <span>
                  {" "}
                  <input type="checkbox" />{" "}
                </span>{" "}
                Remember me
              </p>

              <Button>Sign In</Button>
            </Form>
          </Col>
          <Col sm="3" className="prodview">
            <h3>Welcome to Noise Support</h3>
            <h5>We have got your back</h5>
          </Col>
          <Col sm="3">
            <img
              className="img"
              src="https://www.thetechedvocate.org/wp-content/uploads/2018/01/crew-22235-1-1024x683.jpg"
            />
          </Col>
        </Row>
        <div style={{ marginTop:50}}>
          <h1>
            <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/support-page-faq.svg?v=909531312465717987" />{" "}
            Frequently Asked Question
          </h1>
          <h2 style={{ marginTop: 5 }}>PAYMENTS:</h2>
          <h3>How do I make my payments at www.gonoise.com? </h3>
          <pre><b>{`
            You have multiple options: 
            -All debit and credit cards 
            -UPI 
            -All wallet such as PayTM, Amazon, PhonePay, Airtel, Freecharge & Jio.
            -Net banking via all leading banks. 
            -Paypal 
            -Credit Card EMIoptions(3,6,9,12 months) 
            -Cardless EMI options(0% EMI by Zestmoney,Instacred) `}</b>
          </pre>

        </div>
        <Commontag />
      </Container>
    </div>
  );
};

export default Support;
