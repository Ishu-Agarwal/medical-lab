import React from 'react'

const form = () => {
    return (
        <div>
            <form method="POST" className='box'>
   <h3>Fill the Detail to Search:</h3><br></br>
   <label for="fname">First Name:</label>
   <input type="text" placeholder="first name"     name="fname"  value={user.fname} onChange={handleInputs}/>
   <label for="lname">Last Name:</label>
   <input type="text" placeholder="last name"      name="lname"  value={user.lname} onChange={handleInputs}/>
   <label for="sdate">Start_date:
       <input type="date" placeholder="Start date"name="sdoa"  value={user.sdoa} onChange={handleInputs}/></label>
   <label for="ldate">Last_date:
       <input type="date" placeholder="Last date"name="ldoa"  value={user.ldoa} onChange={handleInputs}/></label>
   <input type="submit" placeholder="Submit"  onClick={PostData}/>
    </form>
        </div>
    )
}

export default form
