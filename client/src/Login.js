import React,{useState, useContext, useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import "./Login.css"
import { LoginContext } from './App';
const Login = () => {
    const [isLogin, setIsLogin] =  useContext(LoginContext);
    const history=useHistory();
    const [user,setUser] = useState({
        uname:"",password:""
    });
    let name,value;
    useEffect(()=>{
        setIsLogin(false);
    },[])
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
        if(data.status=== 400|| data.message==="invalid credentials" || data.message==="plz fill all details" || data.message==="undefined")
        {
            window.alert(data.message);
            console.log("invalid");
        }
        else{
            window.alert(data.message);
            console.log(data);
            if(data.message==="successful login"){
                setIsLogin(true);
                history.push(
                    {
                        pathname: '/Home',
                        state:{uname}
                    }
                    );
            }

            
        }
   }

    return (
        <div>
            <form method="POST"className='box'>
                 <h1 className='login'>Login</h1>
                <input type="text" placeholder="USER NAME" name="uname"  value={user.name} onChange={handleInputs}/>
                <input type="password" name="password" placeholder="PASSWORD" value={user.password} onChange={handleInputs}/>
                <input type="submit" value="Login"  onClick={PostData}/>
                <Link to ="/SignUp"><button>User SignUp</button></Link>
            </form>
        </div>
    )
}
export default Login;
