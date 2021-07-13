import React,{useState,useEffect} from 'react'
import FacebookLogin  from 'react-facebook-login' 
import { GoogleLogin } from 'react-google-login';
import { useSelector,useDispatch } from 'react-redux';
import MainPage from './MainPage';
import { SaveLoginAction } from '../Redux/Actions/LoginAction'
function Login() {

  const iState = 
  {
      isLoggedIn: false,
      userId:'',
      name:'',
      email:'',
      picture :'',
      loginType:''
  }

  const [state, setLoginState] = useState(iState)
  const  dispatch = useDispatch();
  

  const responseFacebook = response => {       
    if(response.status!="unknown")
    {
      setLoginState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      loginType:'facebook'
    });          
   }   
  };

  const responseGoogle = (response) => {
    
    setLoginState({
        isLoggedIn : true,
        userId: response.profileObj.userID,
        name : response.profileObj.name,
        email : response.profileObj.email,
        picture : response.profileObj.imageUrl,
        loginType:'google'
    })
    
  }

  useEffect(() => {      
    
    console.log(state);    
    dispatch(SaveLoginAction(state))
 }, [state])

 let lLoginContent;

 if (state.isLoggedIn==true) {
  
  lLoginContent = (
      <>
      <MainPage></MainPage>       
      </>
  );
}
else
{
  lLoginContent="";  
  lLoginContent= 
  (
    <>           
    <FacebookLogin
      appId="3689975794561505"
      autoLoad={false}
      fields="name,email,picture"            
      callback={responseFacebook}
    />
    <br></br>    
            <GoogleLogin
                clientId="323037035963-1iach7o2ngnot4g3p34eigskl3m4hq82.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />                   
    </>
  );
}

return lLoginContent;
  
}

export default Login
