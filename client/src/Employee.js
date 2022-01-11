import React from 'react'
import {BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import './Home.css';
 const Employee = () => {
    // const location = useLocation();
    // useEffect(() => {
    //    console.log(location.pathname);
    // }, [location]);
    // const tass=location.state.data||"";
    return (
         <div className='hom'>
                <ul className='hom'>
                  <li><Link to ="/AddEmployee" ><button>Add Employee:</button></Link></li>
                  <li><Link to ="/EmployeeDetails"><button>Employee Details:</button></Link></li>
                </ul>
            </div>
    )
}
export default Employee;