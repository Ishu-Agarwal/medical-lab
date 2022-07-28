import React,{useEffect} from 'react';
import { Link,useLocation } from "react-router-dom";
import "./TodoItem.css"
 const Todo = (props) => {
    const location = useLocation();
    useEffect(() => {
       console.log(location.pathname);
       console.log(location.state.data);
    }, [location]);
    const tass=location.state.data;
    const uname=tass[0].labname;
    const ccity=tass[0].city;

    return (
        <div className='his'>
              
        <table>
            <tr>
               <th>Name</th>
               <th> Position</th>
               <th> city</th>
               <th>Phone_Number</th>
               <th> Lab_Name</th>
            </tr>
            {tass.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.city}</td>
                <td>{item.number}</td>
                <td>{item.labname}</td>
              </tr>
            ))}
        </table>
        <Link to={{ pathname: "/Employee", state: { uname:uname,city:ccity} }} activeClassName="active">
          Go_Back
        </Link>
        </div>
    )
}

export default Todo;
