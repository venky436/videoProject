import React,{useState,useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import products from '../products';
import { Cardd } from '../components/Body/Cardd';
import axios from 'axios';

export const BrandScreen = ({match,history}) => {

    let [pp,setPp] = useState()

    

    let viewHandler = (id) => {
      history.push(`/product/${id}`);
    };
   
    let backHandler=()=>{
        history.push('/')
    }
    
    
    useEffect(()=>{
        
        let category = match.params.id;

        async function Cat(){

          let { data } = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
          );
          console.log(data)
          setPp(data)
        }
        Cat()
    },[])
    console.log(pp)
    let fil = [];

  return (
    <div>
      <Container style={{ marginTop: "9rem", minHeight: "70vh" }}>
        <Row>
          <Col md-3>
            <button
              className="d-block my-5"
              style={{
                display: "block",
                width: "20rem",
                height: "5rem",
                fontSize: "2rem",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
              }}
              onClick={backHandler}
            >
              Go Back
            </button>
          </Col>
             
          <Col md-4>
            <h3 className='d-block text-center   fw-bold  text-uppercase ' style={{fontSize:'3rem',margin:'5rem 0',borderBottom:'1px solid black'}}>{match.params.id}</h3>

          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-around">
          {pp ? (
            pp.map((ele, index) => (
              <Col
                key={index}
                md={3}
                className="my-4 p-2 coo"
                style={{ height: "45rem" }}
              >
                <Cardd value={ele} className="cc" />

                <div className="con d-flex justify-content-around">
                  <i
                    class="far fa-eye i"
                    onClick={() => viewHandler(ele.id)}
                  ></i>
                  <i class="far fa-heart i"></i>
                  <i
                    class="fas fa-cart-plus i"
                    //   onClick={() => LikeHandler(ele._id)}
                  ></i>
                </div>
              </Col>
            ))
          ) : (
            <div class="d-flex justify-content-center align-items-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};
