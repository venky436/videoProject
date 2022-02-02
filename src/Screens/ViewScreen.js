import React,{useState,useEffect} from 'react';
import { Container,Row,Col,Card,ListGroup } from 'react-bootstrap';
import products from '../products'

import {Rating} from '../components/Body/Rating'
import '.././components/Body/Body.css'
import axios from 'axios';

export const ViewScreen = ({match}) => {

    let [email,setEmail] = useState('')
    let [comment,setComment] = useState('')
    let [rat,setRat] = useState()
 
    // Reviewssssssssssssssssssssssss
   
   var reviews = []
// reviews//////// Array

    
let [product,setProduct] = useState()

   

    // let {title,id,price,description,countInStock,rating,image,numReviews} = item



    let reviewHandler = (e) =>{
        e.preventDefault();
        // let r = Rev(email, comment, rat);
        // return r
         function Revvv(){
               return {
                 email,
                 comment,
                 rat,
               };
             }
             var rr = new Revvv()
            //  console.log(rr)
       
    }
    // reviews.push(rr);
    // console.log(reviews);
    
    //  console.log(Id);

    let Id = match.params.id;

    let dd;
        useEffect(() => {

          // async function Product(){
          //   let {data}  = await axios.get(`https://fakestoreapi.com/products/${Id}`);
          //   setProduct(data)
          //   console.log(data)
          // }
          // Product()
          

         async function Item(){
          dd = await axios.get(`https://fakestoreapi.com/products/${Id}`);
          //  console.log(data)
          
           console.log(dd)
           setProduct(dd.data)

         }
         Item()
         
        },[Id]);
        console.log(product)
        
       
        // let item = {}
       
  return (
    <div>
      <Container style={{ marginTop: "9rem", minHeight: "90vh" }}>
        {/* <Row className=' d-flex align-items-center justify-content-start bg-dark' style={{marginTop:'6rem'}}>
          
            <button className="btn btn-success-outline w-25 my-4">Back</button>
            
          
        </Row> */}

        <Row className="d-flex  py-5 px-3">
          <Col md-5 style={{ height: "50rem" }}>
            {product ? (
              <img
                src={product && product.image}
                className="d-block w-100 h-100"
              />
            ) : (
              <div class="d-flex justify-content-center align-items-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </Col>
          <Col md-6 className="">
            <Card>
              <Card.Body>
                <Card.Title as="h2">{product && product.title}</Card.Title>
                <Rating rating={product && product.rating.rate} />

                <hr />
                <Card.Title as="h2">
                  Price : ${product && product.price}
                </Card.Title>
                <hr />
                <Card.Title as="h2">Description :</Card.Title>
                {product ? (
                  <Card.Text
                    as="h4"
                    className="my-3"
                    style={{ lineHeight: "2rem" }}
                  >
                    {product && product.description}
                  </Card.Text>
                ) : (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="my-5">
          <h4 className="d-block text-success  fw-bold revv">Reviews</h4>
        </Row>

        <Row style={{ marginBottom: "11rem" }}>
          <Col md-6 className="">
            <form onSubmit={reviewHandler} className="d-block w-100">
              <input
                type="text"
                placeholder="enter Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter Comment"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter Rating - ? / 5"
                className="form-control"
                value={rat}
                onChange={(e) => setRat(e.target.value)}
              />
              <input type="submit" value="Review" className="bbb" />
            </form>
          </Col>
          <Col md-4></Col>
        </Row>
      </Container>
    </div>
  );
};
