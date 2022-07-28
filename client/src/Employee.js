import React,{useEffect ,createContext} from 'react';
import { Link,useLocation,useHistory } from "react-router-dom";
import {useContext} from 'react';
import { LabLoginContext , LoginContext} from './App';
import './Home.css';
 const Employee = () => {
  const location = useLocation();
  const history=useHistory();
  const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
  useEffect(() => {
    if(!isLabLogin) history.push({pathname: "/Main"});
  }, []);
  const uname=location.state.uname;
  const ccity=location.state.city;
  useEffect(() => {
     console.log(location.pathname);
     
     console.log(location.state);
  }, [location]);
    return (
         <div className='hom'>
                <ul className='hom'>
                  <li><Link to ={{ pathname: '/AddEmployee', state: { uname:uname,city:ccity} }}><button>Add Employee:</button></Link></li>
                  <li><Link to ={{ pathname: "/EmployeeDetails", state: { uname:uname,city:ccity} }}><button>Employee Details:</button></Link></li>
                </ul>
            </div>
    )
}
export default Employee;