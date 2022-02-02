
import axios from 'axios'

export const userLoginAction = (dd)=> async (dispatch) => {
    try{
        dispatch({
            type : 'USER_LOGIN_REQUEST',

        })
         
        let config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        let { data } = await axios.post("https://fakestoreapi.com/auth/login",dd,config);

        data.username = dd.username
        data.password = dd.password

    
        dispatch({
            type : 'USER_LOGIN_SUCCESS',
            payload : data
            
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
          dispatch({
              type : 'USER_LOGIN_FAIL',
              payload : 'somthing wrong'
          })
    }
}