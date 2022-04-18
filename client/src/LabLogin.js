import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import "./Login.css"
const LabLogin = () => {
    const history=useHistory();
    const [user,setUser] = useState({
        uname:"",city:"",password:""
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
        const {uname,city,password} =user;
        const res = await fetch("/lablogin",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    uname,city,password
                }
            )
        });
        const data = await res.json();
        if(data.status=== 400|| !data)
        {
            window.alert("invalid");
            console.log("invalid");
        }
        else{
            window.alert(data.message);
            console.log(data);
            if(data.message==="successful login")
            {
               history.push(
                {
                    pathname: '/LabHome',
                     state:{city}
                });
            }
            
            
            
        }
   }

    return (
        <div>
            <form method="POST"className='box'>
                 <h1 className='login'>Lab Login</h1>
                <input type="text" placeholder="LabName" name="uname"  value={user.uname} onChange={handleInputs}/>
                <select id="" name="city"  value={user.city} onChange={handleInputs}>
                <option value="" disabled selected>Choose City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Banglore">Banglore</option>
                    <option value="Kota">Kota</option>
                </select>
                <input type="password" name="password" placeholder="*******" value={user.password} onChange={handleInputs}/>
                <input type="submit" value="Login"  onClick={PostData}/>
            </form>
        </div>
    )
}
export default LabLogin;
