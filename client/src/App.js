import {BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import Contact from "./Contact";
import Book from "./Book";
import History from "./History";
import Home from "./Home"
import Main from "./Main"
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
import LabSection from "./LabSection";
import UserSection from "./UserSection";
import Todo from "./Todo";
import Center from "./Center";
import List from "./List";
import { createContext, useState } from "react";

//const LoginContext = createContext();

function App() {
  //const [isLogin, setIsLogin] = useState(false);
  return (
  <Router>
   {/* <LoginContext.Provider value={[isLogin, setIsLogin]}> */}
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >MagicPathlab</a>
    </div>
    <ul class="nav navbar-nav">
      <li><Link to='/Main'>Home</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      {/* <li><Link to="/Corona">Corona-Tracker</Link></li> */}
     
    </ul>
    <ul class="nav navbar-nav navbar-right">
     <li><Link to="/LabSection"><span class="glyphicon glyphicon-log-in"></span> Lab Section</Link></li>
       <li ><Link to="/UserSection"><span class="glyphicon glyphicon-user"></span> User Section</Link></li>
      {/* {isLogin ? <li><Link to="/LabSection"><span class="glyphicon glyphicon-log-in"></span> Lab Section</Link></li>: <></>}
      {isLogin ? <li onClick={() => setIsLogin(false)}><Link to="/UserSection"><span class="glyphicon glyphicon-user"></span> Logout</Link></li>: <></>} */}
    </ul>
  </div>
</nav>

    <Switch>
    <Route exact path ="/">
        <Main/>
      </Route>
      <Route exact path ="/index">
        <index/>
      </Route>
      <Route exact path ="/Main">
        <Main/>
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
      <Route exact path ="/LabSection">
        <LabSection/>
      </Route>
      <Route exact path ="/UserSection">
        <UserSection/>
      </Route>
      <Route exact path ="/Center">
        <Center/>
      </Route>
      <Route exact path ="/List">
        <List/>
      </Route>
      {/* <Route exact path ="/Corona">
        <Corona/>
      </Route> */}
      </Switch>
      {/* </LoginContext.Provider> */}
  </Router>
  
  );
}
export default App;
{/* export {LoginContext}; */}
