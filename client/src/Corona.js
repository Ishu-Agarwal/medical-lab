import React,{useState} from 'react'
import {Cards , Chart,CountryPicker} from './components';
import { fetchData } from './api';
class Corona extends React.Component {
     state={
         data: {},
     }
    async componentDidMount(){
        const fetchdata = await fetchData();
        console.log(fetchdata);
        this.setState({data:fetchdata});
    }
      
      render(){
          const {data}=this.state;
    return (
        <div>
            <div>
                {/* <Cards data={data}/>
                <CountryPicker/>
                <Chart/> */}
                <h1>uihbhjzbjsd</h1>
            </div>
        </div>
    )
}
}

export default Corona;
