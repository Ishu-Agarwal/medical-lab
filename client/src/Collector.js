import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css"
const Collector = () => {
     const history=useHistory();
    const [user,setUser] = useState({
       labname:"", city:"",test:"",sdoa:"",ldoa:""
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
        const {labname,city,test,sdoa,ldoa} =user;
        const res = await fetch("/labhome",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    labname,city,test,sdoa,ldoa
                }
            )
        });
         const data = await res.json();
         if(data.status===400 || !data.length)
        {
            window.alert("No record present");
            console.log(data);
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
        <div>
             <form method="POST" className='box'>
            <h3 className='login'>Fill the Detail to Search:</h3>
            <br></br>
            <label for="labname">Lab Name:</label>
                <input type="text" placeholder="Lab name"name="labname"  value={user.labname} onChange={handleInputs}/>
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
            <label for="test">Test</label>
                <select id="" name="test"  value={user.test} onChange={handleInputs}>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="ACTH">ACTH (Adreno Corticotropic Hormone) Test</option>
                    <option value="ADT">Adenosine Deaminase Test</option>
                    <option value="Albumin Test">Albumin Test</option>
                    <option value="Ammonia Test">Ammonia Test</option>
                    <option value="Thyroid Test">Thyroid Test</option>
                    <option value="Urea Test">Urea Test</option>
                    <option value="Lactic Acid">Plasma Lactate (Lactic Acid) Test</option>
                    <option value="X-Ray">X-Ray</option>
                    <option value="Protein Test">Protein Test</option>
                </select>
             <label for="sdate">Start_date:</label>
                <input type="date" placeholder="Start date"name="sdoa"  value={user.sdoa} onChange={handleInputs}/>
            
            <label for="ldate">Last_date:</label>
                <input type="date" placeholder="Last date"name="ldoa"  value={user.ldoa} onChange={handleInputs}/>
            <input type="submit" placeholder="Submit"  onClick={PostData}/>
             </form>
        </div>
    );
}
export default Collector;