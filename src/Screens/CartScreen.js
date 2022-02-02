import React,{useState,useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import products from '../products';
import {useSelector} from 'react-redux'

export const CartScreen = () => {

   let cartI = useSelector((state)=>state.cartItems)
   useEffect(()=>{
         console.log(cartI);

   })

  return <div>
      <Container  style={{marginTop :'9rem',minHeight:'80vh'}}>
         <Row>
             <Col>
                       cartScreen
              </Col>
         </Row>
      </Container>
     
      
      </div>;
};
