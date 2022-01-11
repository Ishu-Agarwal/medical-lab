import React,{useEffect} from 'react';
import { Link,useLocation } from "react-router-dom";
import "./TodoItem.css"
 const TodoItem = (props) => {
    const location = useLocation();
    useEffect(() => {
       console.log(location.pathname);
       console.log(location.state.data);
    }, [location]);
    const tass=location.state.data;

    return (
        <div className='his'>
              
        <table>
            <tr>
               <th> fname</th>
               <th> lname</th>
               <th> city</th>
               <th> doa</th>
               <th> test</th>
            </tr>
            {tass.map((item) => (
              <tr>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.city}</td>
                <td>{new Date(item.doa).toDateString()} </td>
                <td>{item.test}</td>
              </tr>
            ))}
        </table>
        <Link to="/History" activeClassName="active">
          Go_Back
        </Link>
        </div>
    )
}

export default TodoItem;
