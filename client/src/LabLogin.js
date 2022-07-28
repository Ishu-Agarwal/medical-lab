import React,{useState,useContext, useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import "./Login.css"
import { LabLoginContext } from './App';

const LabLogin = () => {
    const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
    const history=useHistory();
    useEffect(()=>{
        setIsLabLogin(false);
    },[])
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
                setIsLabLogin(true);
                //window.localStorage.setItem('login',JSON.stringify({user:isLogin,lab:isLabLogin}));
               history.push(
                {
                    pathname: '/LabHome',
                     state:{uname,city}
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
                <Link to ="/LabSignUp"><button>Lab SignUp</button></Link>
            </form>
            
        </div>
    )
}
export default LabLogin;
