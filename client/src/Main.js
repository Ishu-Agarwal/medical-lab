import React,{useEffect} from 'react';
import { Link,useLocation } from "react-router-dom";
import './Home.css';
 const Main = () => {
  // const location = useLocation();
  // useEffect(() => {
  //    console.log(location.pathname);
  //    console.log(location.state.data);
  // }, [location]);
  // const tass=location.state.data;
    return (
      
        <div className='hom'>
                <ul className='hom'>
                  <li><Link to ="/LabSection" ><button>Lab Home</button></Link></li>
                  <li><Link to ="/userSection"><button>User Home</button></Link></li>
                </ul>
            </div>
    )
}
export default Main;