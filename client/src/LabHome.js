import React,{useEffect ,createContext} from 'react';
import { Link,useHistory,useLocation  } from "react-router-dom";
import {useContext} from 'react';
import { LabLoginContext , LoginContext} from './App';
import './Home.css';
 const LabHome = () => {
  const location = useLocation();
  
  const history=useHistory();
  const uname=location.state.uname;
  const ccity=location.state.city;
  useEffect(() => {
     console.log(location.pathname);
     
     console.log(location.state);
  }, [location]);
  const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
  useEffect(() => {
    if(!isLabLogin) history.push({pathname: "/Main"});
  }, []);
    return (
        <div className='hom'>
                <ul className='hom'>
                  <li><Link to ={{ pathname: '/Collector', state: { uname:uname,city:ccity} }} ><button>Home SampleCollection</button></Link></li>
                  <li><Link to ={{ pathname: '/LabHistory', state: { uname:uname,city:ccity} }} ><button>Lab Booking Record</button></Link></li>
                  <li><Link to ={{ pathname: '/Employee', state: { uname:uname,city:ccity} }}><button>Employee Page</button></Link></li>
                </ul>
            </div>
    )
}
export default LabHome;