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
                 <h1 className='login'>Login</h1>
                <input type="text" placeholder="LabName" name="uname"  value={user.uname} onChange={handleInputs}/>
                <input type="text" placeholder="City" name="city"  value={user.city} onChange={handleInputs}/>
                <input type="password" name="password" placeholder="PASSWORD" value={user.password} onChange={handleInputs}/>
                <input type="submit" value="Login"  onClick={PostData}/>
            </form>
        </div>
    )
}
export default LabLogin;
