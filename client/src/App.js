import {BrowserRouter as Router,Switch ,Route,Link} from "react-router-dom";
import { createContext, useState, useHistory } from "react";
import './App.css';
import Contact from "./Contact";
import Book from "./Book";
import History from "./History";
import Home from "./Home";
import Main from "./Main";
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
import LabHistory from "./LabHistory";
import Navbar from "./Navbar";

export const LoginContext=createContext(null);
export const LabLoginContext=createContext(null);

function App() {  
  const [isLogin, setIsLogin] = useState(false);
  const [isLabLogin, setIsLabLogin] = useState(false);
  return (
  <Router>
    <LoginContext.Provider value={[isLogin, setIsLogin]}>
      <LabLoginContext.Provider value={[isLabLogin, setIsLabLogin]}>

        <Navbar/>

        <Switch>
          <Route exact path ="/"><Main/></Route>
          <Route exact path ="/index"><index/></Route>
          <Route exact path ="/Main"><Main/></Route>
          <Route exact path ="/Home"><Home/></Route>
          <Route exact path ="/LabHome"><LabHome/></Route>
          <Route exact path ="/Contact"><Contact/></Route>
          <Route exact path ="/Login"><Login/></Route>
          <Route exact path ="/SignUp"><SignUp/></Route>
          <Route exact path ="/LabLogin"><LabLogin/></Route>
          <Route exact path ="/LabSignUp"><LabSignUp/></Route>
          <Route exact path ="/Book"><Book/></Route>
          <Route exact path ="/History"><History/></Route>
          <Route exact path ="/TodoItem"><TodoItem/></Route>
          <Route exact path ="/Collector"><Collector/></Route>
          <Route exact path ="/Employee"><Employee/></Route>
          <Route exact path ="/AddEmployee"><AddEmployee/></Route>
          <Route exact path ="/EmployeeDetails"><EmployeeDetails/></Route>
          <Route exact path ="/Todo"><Todo/></Route>
          <Route exact path ="/LabSection"><LabSection/></Route>
          <Route exact path ="/LabHistory"><LabHistory/></Route>
          <Route exact path ="/UserSection"><UserSection/></Route>
          <Route exact path ="/Center"><Center/></Route>
          <Route exact path ="/List"><List/></Route>
          <Route exact path ="/Navbar"><Navbar/></Route> 
        </Switch>

      </LabLoginContext.Provider>
    </LoginContext.Provider>

  </Router>
  
  );
}
export default App;
