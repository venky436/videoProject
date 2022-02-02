import React,{useState,useEffect} from 'react';
import { Container,Row,Col,Card,Carousel } from 'react-bootstrap';
import '../Body/Body.css';
import products from '../../products';
import { Cardd } from './Cardd';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

import { CartAction } from "../../Actions/CartAction";


export const Body = ({ history }) => {
  let [brand, setBrand] = useState("");

  let [ppp, setPpp] = useState();

  //  console.log(brand)
  let dispatch = useDispatch();



  let CartHandler = (id) => {
     dispatch(CartAction(id));
  };



  let viewHandler = (id) => {
    history.push(`/product/${id}`);
  };

  //Brand .......
  
  function brandHandler(e){
    setBrand(e.target.value);
  
  }
   let {cartItems,loading} = useSelector((state) => state.cart);
   console.log(cartItems)
   
  useEffect(() =>{
       if (brand !== "") {
         history.push(`/brand/${brand}`);
       }
          async function Fetch(){
             let {data} = await axios.get("https://fakestoreapi.com/products");
             setPpp(data)
           }
           Fetch()

  }, [brand]);


  return (
    <div>
      <Container className="mb-5 bb">
        <Row className="cas ">
          <Carousel variant="dark" className="cas-sub  cccc">
            <Carousel.Item>
              <img
                className="d-block w-100 immm"
                src={products[0].image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{products[0].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 immm"
                src={products[1].image}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>{products[1].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 immm"
                src={products[2].image}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>{products[3].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className=" text-center  pp">Latest Products</h4>

            <select
              title="Brand"
              className="form-control d-block w-25 text-center bg-light"
              style={{ height: "4rem", fontSize: "2rem" }}
              value={brand}
              onChange={()=>brandHandler()}
            >
              <option>Category</option>
              <option value="electronics">electronics</option>
              <option value="jewelery">jewelery</option>
              <option value="men's clothing">men's clothing</option>
              <option value="women's clothing">women's clothing</option>
            </select>
          </div>

          {ppp ? (
            ppp.map((ele, index) => (
              <Col
                key={index}
                md={3}
                className="my-4  coo "
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
                    onClick={()=>CartHandler(ele.id)}
                    class="fas fa-cart-plus i"
                  ></i>
                </div>
              </Col>
            ))
          ) : (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};;
