import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import'./Appointment.css';
const History = () => {
     const history=useHistory();
    const [user,setUser] = useState({
        fname:"",lname:"",sdoa:"",ldoa:""
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
        const {fname,lname,sdoa,ldoa} =user;
        const res = await fetch("/history",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    fname,lname,sdoa,ldoa
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
            <h3>Fill the Detail to Search:</h3><br></br>
            <label for="fname">First Name:</label>
            <input type="text" placeholder="first name"     name="fname"  value={user.fname} onChange={handleInputs}/>
            <label for="lname">Last Name:</label>
            <input type="text" placeholder="last name"      name="lname"  value={user.lname} onChange={handleInputs}/>
            <label for="sdate">Start_date:</label>
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