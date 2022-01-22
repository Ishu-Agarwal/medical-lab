import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import'./Appointment.css';
const Collector = () => {
     const history=useHistory();
    const [user,setUser] = useState({
        city:"",sdoa:"",ldoa:""
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
        const {city,sdoa,ldoa} =user;
        const res = await fetch("/labhome",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    city,sdoa,ldoa
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
            <label for="city">City</label>
                    <select id="" name="city"  value={user.city} onChange={handleInputs}>
                    <option value="Delhi">Delhi</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Kota">Kota</option>
                </select>
            <br></br>
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
export default Collector;