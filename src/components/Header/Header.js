import React,{useState,useEffect} from 'react'
import '../Header/Header.css'
import {Container,Navbar,Nav,Form,Button,FormControl,NavDropdown} from 'react-bootstrap'


import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

import {useSelector} from 'react-redux'

export const Header = () => {
  let [menu,setMenu] = useState(false)

  // let menuHandler =()=>{
  //  setMenu(!menu)
  // }

  

  
  let pro = useSelector(state=>state.userInfo)

 let title = pro ? 
  pro.username
 : (
   <i class="far fa-user-circle text-white"></i>
 );
  useEffect(()=>{

  },[])





    return (
      <>
        <Navbar bg="success" expand="lg" className="nn p-3 fixed-top shadow-lg ">
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand href="#" className="d-block fs-1 ml-5 logo">
                <h3 className='d-block text-white  fw-bold  ' style={{marginLeft:'6rem',textTransform:'uppercase',fontSize:'3rem',fontFamily:'sans-serif'}}>Eshop</h3>
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1"></Nav.Link>


                <LinkContainer to="/cart">
                  <Nav.Link
                    href="#action2"
                    className="text-white"
                    style={{ marginRight: "4rem" }}
                    title="Cart"
                  >
                    <i class="fas fa-cart-plus "></i>
                  </Nav.Link>
                </LinkContainer>


                <Link to="/like">
                  <Nav.Link
                    href="#action2"
                    className="text-white"
                    style={{ marginRight: "4rem" }}
                    title="Liked"
                  >
                    <i class="far fa-heart "></i>
                  </Nav.Link>
                </Link>

                <NavDropdown
                  title={title}
                  id="navbarScrollingDropdown"
                  className="text-white"
                  style={{ marginRight: "10rem" }}
                >
                  <LinkContainer to="/login">
                    <NavDropdown.Item href="#action3" className="ii">
                      Login
                    </NavDropdown.Item>
                  </LinkContainer >

                  <LinkContainer to='/add/product'>
                  <NavDropdown.Item href="#action4" className="ii">
                    Add Product
                  </NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="ii">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              {/* <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}
