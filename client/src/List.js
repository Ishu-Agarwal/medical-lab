import React,{useEffect} from 'react';
import { Link,useLocation } from "react-router-dom";
import "./TodoItem.css"
 const List = (props) => {
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
                <td>{item.uname}</td>
                <td>{item.city}</td>
                <td>{item.number}</td>
                <td>{item.address}</td>
                
              </tr>
            ))}
        </table>
        <Link to="/History" activeClassName="active">
          Go_Back
        </Link>
        </div>
    )
}

export default List;
