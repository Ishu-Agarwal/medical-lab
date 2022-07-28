import React,{useEffect,useContext} from 'react';
import { Link,useLocation,useHistory} from "react-router-dom";
import { LabLoginContext , LoginContext} from './App';
import "./TodoItem.css"
 const TodoItem = (props) => {
    const location = useLocation();
    const addr=location.pathname;

    const history=useHistory();
    const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
    const [isLogin, setIsLogin] =  useContext(LoginContext);

    useEffect(() => {
       console.log(location.pathname);
       console.log(location.state.data);
    }, [location]);
    const tass=location.state.data;
    const uname=tass[0].uname;
    const uname1=tass[0].labname;
    const ccity=tass[0].city;
    return (
        <div className='his'>
              
        <table>
            <tr>
              <th> Id</th>
               <th> fname</th>
               <th> lname</th>
               <th> city</th>
               <th> Lab name</th>
               <th> doa</th>
               <th> test</th>
            </tr>
            {tass.map((item) => (
              <tr>
                <td>{item._id}</td>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.labname}</td>
                <td>{item.city}</td>
                <td>{new Date(item.doa).toDateString()} </td>
                <td>{item.test}</td>
              </tr>
            ))}
        </table>
        {
          isLogin ? <Link to ={{ pathname: "/History", state: { uname} }}activeClassName="active">Go_Back</Link>
          : <Link to={{ pathname: "/LabHome", state: { uname:uname1,city:ccity} }} activeClassName="active">Go_Back</Link>
        }
        </div>
    )
}

export default TodoItem;
