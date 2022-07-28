import React,{useState,useEffect } from 'react';
import { Link,useLocation ,useHistory } from "react-router-dom";
import {useContext} from 'react';
import { LabLoginContext , LoginContext} from './App';
import'./book.css';
const LabHistory = (props) => {
     const history=useHistory();
     const location = useLocation();
     const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
     useEffect(() => {
       if(!isLabLogin) history.push({pathname: "/Main"});
     }, []);
     useEffect(() => {
        console.log(location.pathname);
        console.log(location.state.uname);
     }, [location]);

    const [user,setUser] = useState({
        labname: location.state.uname , city:location.state.city , sdoa:"",ldoa:""
    });
    let name,value;
    const handleInputs=(event)=>{
        console.log(event);
        name=event.target.name;
        value=event.target.value;
        setUser({...user,[name]:value});
    }
    const PostData=async (event)=>{
        event.preventDefault();
        const {labname,city,sdoa,ldoa} =user;
        const res = await fetch("/labhistory",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    labname,city,sdoa,ldoa
                }
            )
        });
         const data = await res.json();
         if(data.status===400 || !data.length)
        {
            window.alert("No record present");
            console.log("invalid");
        }
        else{
            console.log(data);     
            history.push({
                pathname: '/TodoItem',
                state:{data}
            });
        } 
    }
    return (
        <div class="caard">
             <form method="POST" >
            <h3 style={{'color':'black'}}>Fill the Detail to Search:</h3><br></br>
            <label for="uname">Lab Name:</label>
                <input type="text"  name="uname"  value={user.labname} disabled="true"/>
                <label for="city">City:</label>
                <input type="text" name="city"  value={user.city} disabled="true"/>
            <label for="sdate">Start_date:</label><br></br>
                <input type="date" placeholder="Start date"name="sdoa"  value={user.sdoa} onChange={handleInputs}/>
                <br></br>
            <label for="ldate">Last_date:</label>
                <input type="date" placeholder="Last date"name="ldoa"  value={user.ldoa} onChange={handleInputs}/>
            <input type="submit" placeholder="Submit"  onClick={PostData}/>
             </form>
        </div>
    );
}
export default LabHistory;