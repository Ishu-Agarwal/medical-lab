import React,{useState,useEffect } from 'react';
import { Link,useLocation ,useHistory } from "react-router-dom";
import {useContext} from 'react';
import { LabLoginContext , LoginContext} from './App';
import'./book.css';
const Book = (props) => {
    const location = useLocation();
    const [isLogin, setIsLogin] =  useContext(LoginContext);
    useEffect(() => {
      if(!isLogin) history.push({pathname: "/Main"});
    }, []);

    useEffect(() => {
       console.log(location.pathname);
       
       console.log(location.state.uname);
    }, [location]);
    const history=useHistory();
    const [user,setUser] = useState(
        {
            uname:location.state.uname,
            fname:"",
            lname:"",
            doa:"",
            number:"",
            test:"",
            home:"",
            address:"",
            city:"",
            labname:""
        }
    );
    let name,value;
    const handleInputs=(event)=>{
        console.log(event);
        name=event.target.name;
        value=event.target.value;
        setUser({...user,[name]:value});
    }
    const PostData=async (event)=>{
        event.preventDefault();

        const {uname, fname,lname,doa,number,test,home,address,city,labname} =user;
        const res = await fetch("/Book",{
            method : "POST",
            headers :{"content-Type": "application/json"},
            body : JSON.stringify({uname,fname,lname,doa,number,test,home,address,city,labname})
        });
        const data = await res.json();
            window.alert(data.message);
            console.log(data);
            if(data.message=== "Booking Done") {
                history.push(
                    {
                        pathname: '/Home',
                        state:{uname}
                    }
                    );

            }
        
   }
    return (
        <div class="Card">
               <div className='container1'>
            <form method="POST" className='caaard'>
                <h2>Fill the form:</h2>
                <label for="uname">Account User:</label>
                <input type="text"  name="uname"  value={user.uname} disabled="true"/>
            <label for="fname">First Name:</label>
                <input type="text" placeholder="first name"     name="fname"  value={user.fname} onChange={handleInputs}/>
                <label for="lname">last Name:</label>
                <input type="text" placeholder="last name"      name="lname"  value={user.lname} onChange={handleInputs}/>
                <label for="doa">Booking Date:</label>
                <input type="date" placeholder="Appoinment date"name="doa"  value={user.doa} onChange={handleInputs}/>
                <label for="phone">Phone Number:</label><br></br>
                <input type="number" placeholder="XXXXXXXXXX" name="number"  value={user.phone} onChange={handleInputs}/>
            
                <label for="test">Test</label>
                <select type="text" name="test"  value={user.test} onChange={handleInputs}>
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
                < label for="sample">Want home sample collection: </label>
                <select id="" name="home"  value={user.home} onChange={handleInputs}>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br></br>
                < label for="addres">Address: </label>
                <textarea id="address"  autoSize={true} row={3} placeholder="Address"name="address"  value={user.address} onChange={handleInputs} />  
                {/* <input id="address"  type="textarea" row={3} placeholder="Address"name="address"  value={user.address} onChange={handleInputs}/> */}
                < label for="labname">Lab Name: </label>
                <input id="labname"  type="text" placeholder="Labname"name="labname"  value={user.labname} onChange={handleInputs}/>
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
                <input type="submit" placeholder="Submit"  onClick={PostData}/>
            </form>
        </div>
        </div>
           
    )
}
export default Book;
