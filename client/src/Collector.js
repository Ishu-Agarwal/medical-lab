import React,{useState,useEffect } from 'react';
import { Link,useLocation ,useHistory } from "react-router-dom";
import {useContext} from 'react';
import { LabLoginContext , LoginContext} from './App';
import "./book.css"
const Collector = () => {
    const location = useLocation();
    const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
    useEffect(() => {
      if(!isLabLogin) history.push({pathname: "/Main"});
    }, []);
    useEffect(() => {
       console.log(location.pathname);
       
       console.log(location.state.uname);
    }, [location]);
    const history=useHistory();

    const [user,setUser] = useState({
       labname:location.state.uname , city:location.state.city,test:"",sdoa:"",ldoa:""
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
        <div class="caard">
             <form method="POST" className='container1'>
            <h3 className='login'>Fill the Detail to Search:</h3>
            <br></br>
            <label for="labname">Lab Name:</label>
                <input type="text" name="labname"  value={user.labname} disabled="true"/>
            <label for="city">City:</label>
                <input type="text" name="city"  value={user.city} disabled="true"/>
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