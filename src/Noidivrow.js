import React from 'react'
import { Row, Col, Card } from "reactstrap";


export default function Noidivrow() {
    const resp=[{ id:1,
        img:"https://cdn.shopify.com/s/files/1/0997/6284/files/1161490_2x_ff68105c-5553-4a16-80e8-da5c1ad167b6_360x.png?v=1601882646" ,
        text:"Safe Shopping",
        text1: "Safe, private & secure transaction",
    },
    { id:2,
        img:"https://cdn.shopify.com/s/files/1/0997/6284/files/175461_2x_9230efcc-319f-44ce-b309-1d48149a268e_180x.png?v=1601882717",
        text:"Free Shipping",
        text1: "Delivering anywhere in the country",
    },
    { id:3,
        img:"https://cdn.shopify.com/s/files/1/0997/6284/files/group-11_2x_4383daf7-cb04-4f0b-bfe9-a70e777510fd_180x.png?v=1601882743",
        text:"Inclusive Pricing",
        text1: "Best deals including GST",
    },
    { id:4,
        img:"https://cdn.shopify.com/s/files/1/0997/6284/files/2583131_2x_e0d4d78e-8f39-4526-bff3-21c265ae6856_360x.png?v=1601882796",
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
