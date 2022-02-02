
export const userLoginReducer=(state = {userInfo : {}},action)=>{

    switch(action.type){
        case 'USER_LOGIN_REQUEST':
            return{
                loading : true,
                userInfo : {}
            }
        case 'USER_LOGIN_SUCCESS':
            return{
                loading : false,
                success : true,
                userInfo : action.payload
            }
        case 'USER_LOGIN_FAIL':
            return {
                loading : false,
                error : action.payload
            }
        default :
        return {
            ...state
        }
    }

}