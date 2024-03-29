import React,{useState,useEffect } from 'react';
import { Link,useLocation ,useHistory } from "react-router-dom";
import {useContext} from 'react';
import { LabLoginContext , LoginContext} from './App';
import'./book.css';
const History = (props) => {
     const history=useHistory();
     const location = useLocation();
     const [isLogin, setIsLogin] =  useContext(LoginContext);
     useEffect(() => {
       if(!isLogin) history.push({pathname: "/Main"});
     }, []);

     const uname=location.state.uname;

     useEffect(() => {
        console.log(location.pathname);
        console.log(location.state.uname);
     }, [location]);

    const [user,setUser] = useState({
        uname: location.state.uname ,fname:"",lname:"",phone:"",sdoa:"",ldoa:""
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
        const {uname,fname,lname,phone,sdoa,ldoa} =user;
        const res = await fetch("/history",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    uname,fname,lname,phone,sdoa,ldoa
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
             <form method="POST" className='container1'>
            <h3 style={{'color':'black'}}>Fill the Detail to Search:</h3><br></br>
            <label for="uname">Account User:</label>
                <input type="text"  name="uname"  value={user.uname} disabled="true"/>
            <label for="fname">First Name:</label>
            <input type="text" placeholder="first name"     name="fname"  value={user.fname} onChange={handleInputs}/>
            <label for="lname">Last Name:</label>
            <input type="text" placeholder="last name"      name="lname"  value={user.lname} onChange={handleInputs}/>
            <label for="phone">Phone Number:</label><br></br>
            <input type="number" placeholder="XXXXXXXXXX"      name="phone"  value={user.phone} onChange={handleInputs}/>
            
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
export default History;