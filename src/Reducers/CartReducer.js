
export const CartReducer = (state = {cartItems : []},action) =>{

    switch(action.type){
        case 'ADD_TO_CART_REQUEST':
            return{
                loading : true
            }
        case 'ADD_TO_CART_SUCCESS':
            
            //  let item = action.payload
            //  let exit = state.cartItems ? state.cartItems.find((e)=>e.id == item.id) : []
            //  if(exit){
            //     return{
            //         ...state,
            //         loading : false,
            //         cartItems : state.cartItems ? state.cartItems.map((x)=>x.id === exit.id ? exit : x) : []
            //     }
            //  }else{
            //      return{
            //          loading: false,
            //          ...state,
            //          cartItems : [...state.cartItems,item]
            //      }
            //  }
            let ii = state.cartItems && [...state.cartItems,action.payload]
            return{
                loading : false,
                ...state,
                cartItems :  [ii]
            }
            
        case 'ADD_TO_CART_FAIL':
            return{
                loading : false,
                error: action.payload
            }
        case 'CART_ITEM_REMOVE':
            return{

            }
        default:
            return {
                ...state
            }
        }

    }
