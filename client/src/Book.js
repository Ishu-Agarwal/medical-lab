import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import'./book.css';
const Book = () => {
     const history=useHistory();
    const [user,setUser] = useState({
        fname:"",lname:"",doa:"",test:"Cardiology",home:"Yes",address:"",city:"Delhi"
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
        const {fname,lname,doa,test,home,address,city} =user;
        const res = await fetch("/Book",{
            method : "POST",
            headers :{
                "content-Type": "application/json"
            },
            body : JSON.stringify(
                {
                    fname,lname,doa,test,home,address,city
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
            history.push("/Home");
        }
   }
    return (
        <div class="Card">
               <div className='container1'>
            <form method="POST" className='caaard'>
                <h2>Fill the form:</h2>
            <label for="fname">First Name:</label>
                <input type="text" placeholder="first name"     name="fname"  value={user.fname} onChange={handleInputs}/>
                <label for="lname">last Name:</label>
                <input type="text" placeholder="last name"      name="lname"  value={user.lname} onChange={handleInputs}/>
                <label for="doa">Booking Date:</label>
                <input type="date" placeholder="Appoinment date"name="doa"  value={user.doa} onChange={handleInputs}/>
                <br></br>
                <label for="country">Test</label>
                <select id="" name="test"  value={user.test} onChange={handleInputs}>
                  <option value="Cadio">Cardiology</option>
                  <option value="neuro">Neurology</option>
                  <option value="Nephro">Nephrology</option>
                  <option value="Uro">Urology</option>
                  <option value="Gastro">Gastroenterology</option>
                  <option value="Dermato">Dermatology</option>
                  <option value="Opthalmo">Opthalmology</option>
                  <option value="Gynaeco">Gynaecology</option>
                  <option value="General Physician">General Physician</option>
                </select>
                < label for="sample">Want home sample collection: </label>
                <select id="" name="home"  value={user.home} onChange={handleInputs}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br></br>
                < label for="addres">Address: </label>
                <input id="address"  type="text" placeholder="Address"name="address"  value={user.address} onChange={handleInputs}/>
                <label for="city">City</label>
                    <select id="" name="city"  value={user.city} onChange={handleInputs}>
                    <option value="Delhi">Delhi</option>
                    <option value="Bombay">Bombay</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Jaipur">Jaipur</option>
                    <option value="Banglore">Banglore</option>
                </select>
                <input type="submit" placeholder="Submit"  onClick={PostData}/>
            </form>
        </div>
        </div>
           
    )
}
export default Book;
