import React,{useEffect} from 'react';
import { Link,useLocation } from "react-router-dom";
import './Home.css';
 const Home = () => {
  // const location = useLocation();
  // useEffect(() => {
  //    console.log(location.pathname);
  //    console.log(location.state.data);
  // }, [location]);
  // const tass=location.state.data;
    return (
      
        <div className='hom'>
                <ul className='hom'>
                  <li><Link to ="/Book" ><button>Book Test</button></Link></li>
                  <li><Link to ="/History"><button>VIEW HISTORY</button></Link></li>
                  <li><Link to ="/Center"><button>Lab Center</button></Link></li>
                </ul>
            </div>
    )
}
export default Home;