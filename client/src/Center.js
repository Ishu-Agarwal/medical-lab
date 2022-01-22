import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import "./Login.css"
const Center = () => {

    const history=useHistory();
    const [user,setUser] = useState({
        city:""
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
        const {city} =user;
        const res = await fetch("/CenterLab",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    city
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
            history.push(
                {
                    pathname: '/List',
                    state:{data}
                }
            );
        }
   }

    return (
        <div>
            
            <form method="POST" className='box' >
                 <h1>Lab Details:</h1>
                <input type="text" placeholder="City"          name="city"  value={user.city} onChange={handleInputs}/>
                <input type="submit" placeholder="Submit" onClick={PostData}/>
            </form>
        </div>
    )
}

export default Center
