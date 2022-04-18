import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import'./Appointment.css';
const EmployeeDetails = () => {
     const history=useHistory();
    const [user,setUser] = useState({
        name:"",city:"",labname:""
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
        const {name,city,labname} =user;
        const res = await fetch("/employeedetails",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    name,city,labname
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
                pathname: '/Todo',
                state:{data}
            });
        } 
    }
    return (
        <div class="caard">
             <form method="POST" class="box" style={{'color':'white'}}>
            <h3 >Fill the Detail to Search:</h3><br></br>
            <label for="lname">Name:</label>
            <input type="text" placeholder="Name"      name="name"  value={user.name} onChange={handleInputs}/>
            <label for="city">City:</label>
            <select id="" name="city"  value={user.city} onChange={handleInputs}>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Kota">Kota</option>
                </select>
            <label for="fname">Lab Name:</label>
            <input type="text" placeholder="Lab Name"     name="labname"  value={user.labname} onChange={handleInputs}/>
            <input type="submit" placeholder="Submit"  onClick={PostData}/>
             </form>
        </div>
    );
}
export default EmployeeDetails;