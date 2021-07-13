import React,{useState} from 'react'
import { GoogleLogin } from 'react-google-login';

function Google() {
    const iGoogleState ={
        isLoggedIn: false,
        name :'',
        email:'',
        picture:'',
        loginType:''
    }
    
    const [state, setGoogleState] = useState(iGoogleState)
    const responseGoogle = (response) => {
        setGoogleState({
            isLoggedIn : true,
            name : response.profileObj.name,
            email : response.profileObj.email,
            picture : response.profileObj.imageUrl,
            loginType:'google'
        })
      }
      let googleContent;
      
      if(state.isLoggedIn && state.loginType=='google')
      {
        
        googleContent=(
<div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px"
            }}
          >
            <img src={state.picture} alt={state.name} />
            <h2>Welcome {state.name}</h2>
            Email: {state.email}
          </div>
        );
      }
      else
      {
          if(state.loginType=="" || state.loginType!="facebook")
          {
            
        googleContent=(
            <GoogleLogin
                clientId="323037035963-1iach7o2ngnot4g3p34eigskl3m4hq82.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              /> 
                    );
        }
      }
    return (
        <>
       
        {googleContent}
        
           
        </>
    )
}

export default Google
