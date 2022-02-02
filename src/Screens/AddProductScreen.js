import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Container,Row,Col } from 'react-bootstrap';
export const AddProductScreen = () => {

  let [name,setName] = useState('')
  let [price,setPrice] = useState()
  let [description,setDescription] = useState('')
  let [category,setCategory] = useState('')
  let [image,setImage] = useState('')


  let submitHandler =(e)=>{
      e.preventDefault()
     
      if(name && description && image && category !== ''){

        //   async function Add() {
        //     let config = {
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     };

        //     let { data } = await axios.post(
        //       "https://fakestoreapi.com/products",
        //       {
        //         title: name,
        //         price: price,
        //         description: description,
        //         image: image,
        //         category: category,
        //       },
        //       config
        //     );

        //     console.log(data);
        //   }
        //   Add();

        fetch("https://fakestoreapi.com/products", {
          method: "POST",
          body: JSON.stringify({
            title: name,
            price: price,
            description: description,
            image: image,
            category: category,
          }),
        })
          .then((res) => res.json())
          .then((json) => console.log(json));
      }else{
            alert('Some fields are missing')
         
      }

      
  }

  useEffect(()=>{

  },[])

  return (
    <div>
      <Container style={{ marginTop: "9rem", minHeight: "80vh" }}>
        <Row>
          <h4
            className="d-block text-center my-5 fs-1 fw-bold text-uppercase py-2"
            style={{ borderBottom: "1px solid green", width: "40rem",margin:'0 auto' }}
          >
            Add New Product
          </h4>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col md-4>
            <form onSubmit={submitHandler} className="d-block w-100">
              <input
                type="text"
                placeholder="enter name"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="enter price"
                className="form-control"
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
              />
              <input
                type="text"
                placeholder="description"
                className="form-control"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="category"
                className="form-control"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
              />
              <input
                type="text"
                placeholder="image URL"
                className="form-control"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
              />
              <button
                className="my-4 w-25 bg-primary text-white" type='submit'
                style={{ display: "block", height: "5rem", fontSize: "2rem" }}
              >
                Add Product
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
