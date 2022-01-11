import React from 'react'
import {BrowserRouter as Link} from "react-router-dom";
 const Home = () => {
    // const location = useLocation();
    // useEffect(() => {
    //    console.log(location.pathname);
    // }, [location]);
    // const tass=location.state.data||"";
    return (
      
        <div className='hom'>
                <ul>
                  <li><Link to ="/Book" ><button>Book Test</button></Link></li>
                  <li><Link to ="/History"><button>VIEW HISTORY</button></Link></li>
                </ul>
            </div>
    )
}
export default Home;