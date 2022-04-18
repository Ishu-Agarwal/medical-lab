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
        if(data.status===400 || !data.length)
        {
            window.alert("No record present");
            console.log("invalid");
        }
        else{
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
                <input type="submit" placeholder="Submit" onClick={PostData}/>
            </form>
        </div>
    )
}

export default Center
