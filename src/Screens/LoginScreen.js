import React,{useState,useEffect} from 'react';
import {Container,Row,Col,Form,FormControl,FormGroup} from'react-bootstrap';
import '../components/Login.css'
import {Link} from 'react-router-dom'
import { userLoginAction } from '../Actions/LoginAction';
import {useSelector,useDispatch} from 'react-redux'
import * as jwt_decode from "jwt-decode";

export const LoginScreen = ({history}) => {

  let [username,setUsername] = useState('')
  let [password, setPassword] = useState("");
  


  let dispatch = useDispatch()

  
  let log = useSelector((state)=>state.userInfo)


  
  let submitHandler =(e)=>{
    e.preventDefault()
    if(username && password !== ''){
        
       dispatch(userLoginAction({ 'username' : username,'password' : password }));
        
    }else{
      return alert('you must fill the form to login')
    }
    
  }


  useEffect(()=>{
    if(!log.token){
     
        // let decode = jwt_decode(log.token);
        // console.log(decode);
        alert("wrong details");
    }else{
       history.push("/");
    }
  },[log])





  return (
    <div>
      <Container
        style={{ marginTop: "9rem", minHeight: "80vh" }}
        className="cooo"
      >
        <Row className="roo p-4">
          <Col className="  cooo">
            <img
              src="https://img.freepik.com/free-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg?size=626&ext=jpg"
              className="d-block w-100 h-100"
            />
          </Col>

          <Col className="cooo bg-light ">
            {/* <h4
              className="text-center fs-1 fw-bold"
              style={{ marginBottom: "3rem " }}
            >
              Login
            </h4> */}
            {/* <Row className="bg-light d-flex justify-content-center ">
              <i class="far fa-user-circle"></i>
            </Row> */}

            <Row className="  d-flex align-items-center justify-content-center  bg-light w-100 h-100 vvv">
              <Col>
                <form onSubmit={submitHandler} className="formm d-flex w-100 align-items-center justify-content-start formm">
                  <label for="#username" className="form-label fs-2 la">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="enter username"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                  <label for="#password" className="form-label fs-2 la">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="enter password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <input type="submit" value="Login" />

                  <span className='d-block my-5 fs-2 '>Dont't have an account <Link to='/user/register'>Register</Link> here</span>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
