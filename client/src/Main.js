import React,{useEffect , useContext} from 'react';
import { Link,useLocation,useHistory } from "react-router-dom";
import './Home.css';
import { LabLoginContext , LoginContext} from './App';

//import { NavigationActions } from 'react-navigation'



 const Main = () => {
  const [isLabLogin, setIsLabLogin] =  useContext(LabLoginContext);
  const [isLogin, setIsLogin] =  useContext(LoginContext);
   const location = useLocation();
   const history = useHistory();
  //  const resetAction = NavigationActions.reset({
  //   index: 0,
  //   actions: [
  //     NavigationActions.navigate({ routeName: 'Main'})
  //   ]
  // })
  
  // useEffect(() => {
  //   navigation.dispatch(resetAction)
  // }, [Location]);
  // const tass=location.state.data;
    return (
      
        <div className='hom'>
                <ul className='hom'>
                  <li><Link to ="/LabSection"><button>Lab Home</button></Link></li>
                  <li><Link to ="/UserSection"><button>User Home</button></Link></li>
                </ul>
            </div>
    )
}
export default Main;