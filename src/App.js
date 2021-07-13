import './App.css';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
function App() {
  const loginInfo = useSelector(state => state.loginDetails.state);
    console.log("loginType In app "+ JSON.stringify(loginInfo) );

if(loginInfo== undefined || loginInfo.isLoggedIn==false)
{
  return <Login></Login>
}
else
{
  return <MainPage></MainPage>
}
}

export default App;
