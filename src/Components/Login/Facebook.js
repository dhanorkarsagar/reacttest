import React,{useState,useEffect} from 'react'
import { useDispatch } from "react-redux";
import FacebookLogin  from 'react-facebook-login'
//import SaveLoginAction from '../../Redux/Actions/LoginAction'
import { SaveLoginAction } from '../../Redux/Actions/LoginAction'
import Google from './Google';
import MainPage from './../MainPage';
import { useSelector } from 'react-redux';
import Login from './../Login'
function Facebook() {
    const iFBState = 
     {
         isLoggedIn: false,
         userId:'',
         name:'',
         email:'',
         picture :'',
         loginType:''
     }
     const loginInfoState = useSelector(state => state);
     

     const [state, setFBState] = useState(iFBState)
     const  dispatch = useDispatch();
    const responseFacebook = response => {
       
        if(response.status!="unknown")
        {
         setFBState({
          isLoggedIn: true,
          userId: response.userID,
          name: response.name,
          email: response.email,
          picture: response.picture.data.url,
          loginType:'facebook'
        });    
          
    }
       
      };

      useEffect(() => {
          
         dispatch(SaveLoginAction(state))
      }, [state])



     let fbContent; 
     
     if (state.isLoggedIn) {
        fbContent = (
            <>
            <MainPage></MainPage>  
            
            </>
        );
      } else {
          if(state.loginType!="google")
          {
        fbContent = (
            <>
           
          <FacebookLogin
            appId="3689975794561505"
            autoLoad={true}
            fields="name,email,picture"            
            callback={responseFacebook}
          />
          
          </>
        );
          }

      }
    return (
        
        <>
            {fbContent}
        </>
    )
}

export default Facebook
