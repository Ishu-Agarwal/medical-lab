import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import "./Login.css"
const LabSignUp = () => {

    const history=useHistory();
    const [user,setUser] = useState({
        uname:"",city:"",address:"",password:"",number:0
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
        const {uname,city,address,password,number} =user;
        const res = await fetch("/LabSignup",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    uname,city,address,password,number
                }
            )
        });
        const data = await res.json();
        if(data.status===400 || !data)
        {
            window.alert("invalid");
            console.log("invalid");
        }
        else{
            window.alert(data.message);
            console.log(data);
            history.push("/LabLogin");
        }
   }

    return (
        <div>
            
            <form method="POST" className='box' >
                 <h1>Sign Up</h1>
                <input type="text" placeholder="Lab_Name"          name="uname"  value={user.uname} onChange={handleInputs}/>
                <label for="city">City</label>
                    <select id="" name="city"  value={user.city} onChange={handleInputs}>
                    <option value="Delhi">Delhi</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Kota">Kota</option>
                </select>
                <input type="text" placeholder="Address"          name="address"  value={user.address} onChange={handleInputs}/>
                <input type="password" placeholder="PASSWORD"       name="password"  value={user.password} onChange={handleInputs}/>
                {/* <input type="password" placeholder="Renter PASSWORD"name="re-enter"  value={user.fname} onChange={handleInputs}/> */}
                <input type="number" placeholder="Contact Number"     name="number"  value={user.number} onChange={handleInputs}/>
        
                <input type="submit" placeholder="Submit" onClick={PostData}/>
            </form>
        </div>
    )
}

export default LabSignUp
