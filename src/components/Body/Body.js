import React,{useState,useEffect} from 'react';
import { Container,Row,Col,Card,Carousel } from 'react-bootstrap';
import '../Body/Body.css';
// import products from '../../products';
import { Cardd } from './Cardd';
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

import { CartAction } from "../../Actions/CartAction";


const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: "../images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    image: "../images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Amazon Echo Dot 3rd Generation",
    image: "/images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];


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
                alt={products[0].description}
              />
              <Carousel.Caption>
                <h3>{products[0].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 immm"
                src={products[1].image}
                alt={products[1].description}
              />

              <Carousel.Caption>
                <h3>{products[1].name}</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 immm"
                src={products[2].image}
                alt={products[2].description}
              />

              <Carousel.Caption>
                <h3>{products[2].name}</h3>
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
              onChange={() => brandHandler()}
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
                    onClick={() => CartHandler(ele.id)}
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
