import React from 'react';
import './Contact1.css'
export const Contact = () => {
    return (
        <div>
             <h2 style={{'color':'black'}}>Our Team</h2>
<div className="row">
<div className="column">
    <div className="card">
     
      <div className="container">
        <h2>Ishu Agarwal</h2>
        <p className="title">CEO  Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>ishu@example.com</p>
      
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
     
      <div className="container">
        <h2>Mahesh</h2>
        <p className="title">Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mahesh@example.com</p>
      
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
     
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">Manager</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
      
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default Contact