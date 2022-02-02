
import axios from 'axios'


export const CartAction = (id) => async (dispatch,getState)=>{

    try{
        dispatch({
         type: "ADD_TO_CART_REQUEST"
    });

    let {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
     
    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload : data
          
    });

    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))


    }catch (error) {
        dispatch({
          type: "ADD_TO_CART_FAIL",
          payload : `somthing wrong + ${error}`
        });
    }

    

}