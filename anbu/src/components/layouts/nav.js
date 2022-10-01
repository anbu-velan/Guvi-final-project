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
       
           
            <div id="page-content-wrapper">
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" onClick={this.submitlogout}  value="Logout">Logout</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    </div>
                </nav>
            </div>
    )

  }
}

export default Welcome;