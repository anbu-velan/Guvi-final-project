import react from 'react'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from "react-router-dom";

import  '../../assets/styles.css';


class Welcome extends react.Component{
  constructor(props){
    super(props);
    this.state = {
        username:'',
        userpwd:'' ,
        token:''
    }
    this.submitlogin=this.submitlogout.bind(this);
    
}


submitlogout(){
  window.localStorage.clear();
  window.location = '/'
}
  
  render(){
   
    return(
               <div class="container-fluid">
                    <h1 class="mt-4">Welcome GUVI</h1>
                </div>
    )

  }
}

export default Welcome;