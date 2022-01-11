import React from 'react';
import {BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import Contact from "./Contact";
import Book from "./Book";
import History from "./History";
import Home from "./Home"
import Login from "./Login";
import SignUp from "./SignUp";
import LabHome from "./LabHome"
import LabLogin from "./LabLogin";
import LabSignUp from "./LabSignUp";
import Collector from "./Collector";
import Employee from "./Employee";
import TodoItem from "./TodoItem";
import AddEmployee from "./AddEmployee";
import EmployeeDetails from "./EmployeeDetails";
import Todo from "./Todo";
function App() {
  return (
  <Router>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    {/* <div class="navbar-header">
      <a class="navbar-brand" >MagicPathlab</a>
    </div> */}
    <ul class="nav navbar-nav">
      <li class="active"><Link to='/Home'>Home</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      {/* <li><Link to="/Corona">Corona-Tracker</Link></li> */}
     
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><Link to="/LabSignUp"><span class="glyphicon glyphicon-user"></span> Lab Sign Up</Link></li>
      <li><Link to="/LabLogin"><span class="glyphicon glyphicon-log-in"></span> Lab Login</Link></li>
      <li><Link to="/SignUp"><span class="glyphicon glyphicon-user"></span> User Sign Up</Link></li>
      <li><Link to="/Login"><span class="glyphicon glyphicon-log-in"></span> User Login</Link></li>
    </ul>
  </div>
</nav>

    <Switch>
      <Route exact path ="/index">
        <index/>
      </Route>
      <Route exact path ="/Home">
        <Home/>
      </Route>
       <Route exact path ="/LabHome">
        <LabHome/>
      </Route>
      <Route exact path ="/Contact">
        <Contact/>
      </Route>
      <Route exact path ="/Login">
        <Login/>
      </Route>
      <Route exact path ="/SignUp">
        <SignUp/>
      </Route>
      <Route exact path ="/LabLogin">
        <LabLogin/>
      </Route>
      <Route exact path ="/LabSignUp">
        <LabSignUp/>
      </Route>
      <Route exact path ="/Book">
        <Book/>
      </Route>
      <Route exact path ="/History">
        <History/>
       </Route>
      <Route exact path ="/TodoItem">
        <TodoItem/>
      </Route>
      <Route exact path ="/Collector">
        <Collector/>
      </Route>
      <Route exact path ="/Employee">
        <Employee/>
      </Route>
      <Route exact path ="/AddEmployee">
        <AddEmployee/>
      </Route>
      <Route exact path ="/EmployeeDetails">
        <EmployeeDetails/>
      </Route>
      <Route exact path ="/Todo">
        <Todo/>
      </Route>
      {/* <Route exact path ="/Corona">
        <Corona/>
      </Route> */}
      </Switch>
  </Router>
  );
}
export default App;
