import React from 'react'
import {Link,useLocation} from "react-router-dom";
 const LabHome = () => {
    // const location = useLocation();
    // useEffect(() => {
    //    console.log(location.state.city);
    // }, [location]);
    // const tass=location.state.city;
    return (
        <div className='hom'>
                <ul>
                  <li><Link to ="/Collector" ><button>Home SampleCollection</button></Link></li>
                  <li><Link to ="/Employee"><button>Employee Page</button></Link></li>
                </ul>
            </div>
    )
}
export default LabHome;