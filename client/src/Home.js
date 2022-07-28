import React,{useEffect ,createContext} from 'react';
import { Link,useLocation ,useHistory } from "react-router-dom";
import {useContext} from 'react';
import { LabLoginContext , LoginContext} from './App';
import './Home.css';

export const appContext=createContext(null);
 const Home = () => {
  const location = useLocation();
  const history=useHistory();
  const [isLogin, setIsLogin] =  useContext(LoginContext);
  useEffect(() => {
    if(!isLogin) history.push({pathname: "/Main"});
  }, []);
  const uname=location.state.uname;
  useEffect(() => {
     console.log(location.pathname);
     
     console.log(location.state.uname);
  }, [location]);

    return (
      
        <div className='home'>
                <ul className='hom'>
                  <li><Link to={{ pathname: '/Book', state: {uname} }}>
                    <button>Book Test</button></Link></li>
                  <li><Link to ={{ pathname: '/History', state: {uname} }}><button>VIEW HISTORY</button></Link></li>
                  <li><Link to ="/Center"><button>Lab Center</button></Link></li>
                </ul>
            </div>
    )
}
export default Home;