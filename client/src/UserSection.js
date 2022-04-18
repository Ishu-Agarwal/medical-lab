import React from 'react'
import {BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import './Home.css';
const UserSection = () => {
    // const location = useLocation();
    // useEffect(() => {
    //    console.log(location.pathname);
    // }, [location]);
    // const tass=location.state.data||"";
    return (
      
        <div className='hom' >
                <ul className='hom'>
                  <li><Link to ="/Login" ><button>User Login</button></Link></li>
                  <li><Link to ="/SignUp"><button>User SignUp</button></Link></li>

                </ul>
            </div>
    )
}
export default UserSection;