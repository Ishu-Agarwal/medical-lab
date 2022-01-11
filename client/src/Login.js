import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import "./Login.css"
const Login = () => {
    const history=useHistory();
    const [user,setUser] = useState({
        uname:"",password:""
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
        const {uname,password} =user;
        const res = await fetch("/login",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    uname,password
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
            history.push(
                {
                    pathname: '/Home',
                    state:{uname}
                }
            );
        }
   }

    return (
        <div>
            <form method="POST"className='box'>
                 <h1 className='login'>Login</h1>
                <input type="text" placeholder="User Name" name="uname"  value={user.name} onChange={handleInputs}/>
                <input type="password" name="password" placeholder="PASSWORD" value={user.password} onChange={handleInputs}/>
                <input type="submit" value="Login"  onClick={PostData}/>
            </form>
        </div>
    )
}
export default Login;
