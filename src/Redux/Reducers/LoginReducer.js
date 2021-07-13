const iState ={
    isLoggedIn: false,
      userId:'',
      name:'',
      email:'',
      picture :'',
      loginType:''
}
export const SaveLoginReducer =(state=iState,action)=>{
    
    switch (action.type) {
        case 'SaveLogin':
            return {                
                state:action.payload
            }
            break;
    
        default:
            return state;
    }
}