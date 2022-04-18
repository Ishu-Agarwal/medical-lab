import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import './book.css';
const History = () => {
     const history=useHistory();
    const [user,setUser] = useState({
        name:"",dob:"",doj:"",position:"",labname:"",city:"",salary:"",number:""
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
        const {name,dob,doj,position,labname,city,salary,number} =user;
        const res = await fetch("/addemployee",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    name,dob,doj,position,labname,city,salary,number
                }
            )
        });
         const data = await res.json();
         if(data.status===400 || !data)
        {
            window.alert(data.message);
            console.log(data.message);
        }
        else{
            window.alert(data.message);
            console.log(data);     
            history.push("/Employee");
        } 
    }
    return (
        <div class="Card">
                <div className='container1'>
             <form method="POST" class="caaard">
            <h2>Fill the Detail to Search:</h2>
            <label for="fname">Full Name:</label>
            <input type="text" placeholder="Name"     name="name"  value={user.name} onChange={handleInputs}/>
            <label for="sdate">DOB:</label>
                <input type="date" placeholder="date_of_birth"name="dob"  value={user.dob} onChange={handleInputs}/>
                <br></br>
            <label for="jdate">Date_of_Joining:</label>
                <input type="date" name="doj"  value={user.doj} onChange={handleInputs}/>
                <br></br>

            <label for="position">Position:</label>
            <input type="text" placeholder="Position"      name="position"  value={user.position} onChange={handleInputs}/>
            <label for="labname">Lab Name:</label>
            <input type="text" placeholder="Lab Name"      name="labname"  value={user.labname} onChange={handleInputs}/>
            
            <label for="city">City</label>
                    <select id="" name="city"  value={user.city} onChange={handleInputs}>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Kota">Kota</option>
                </select>
            <label for="salary">Salary:</label>
            <input type="text" placeholder="salary"      name="salary"  value={user.salary} onChange={handleInputs}/>
            <label for="salary">Contact_Number:</label>
            <input type="text"    placeholder="XXXXXXXXXX"   name="number"  value={user.number} onChange={handleInputs}/>
            <input type="submit" placeholder="Submit"  onClick={PostData}/>
             </form>
        </div>
        </div>
    );
}
export default History;