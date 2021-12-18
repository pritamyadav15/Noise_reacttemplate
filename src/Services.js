import React from 'react'
import { Row, Col, Card } from "reactstrap";


export default function Services() {
    const resp=[{ id:1,
        img:"./images/safeshopping.png" ,
        text:"Safe Shopping",
        text1: "Safe, private & secure transaction",
    },
    { id:2,
        img:"./images/shipping.png",
        text:"Free Shipping",
        text1: "Delivering anywhere in the country",
    },
    { id:3,
        img:"./images/inclusivepricing.png",
        text:"Inclusive Pricing",
        text1: "Best deals including GST",
    },
    { id:4,
        img:"./images/trustedproduct.png",
        text:"Trusted Products",
        text1:"Beware of counterfeits & shop from official website" ,
    },

]
    return (
        <div>
            <Row className="marg">
                {resp.map((m)=> (
                <Col sm="3" key={m.id}>
                    <img src={m.img} />
                    <h3>{m.text}</h3>
                    <p>{m.text1}</p>
                </Col>
            ))}
            </Row>
           
        
        </div>
    )
}
