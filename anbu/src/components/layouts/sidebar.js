import react from 'react'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from "react-router-dom";

class Sidebar extends react.Component{
  constructor(props){
    super(props);
    this.state = {
        username:'',
        userpwd:'' ,
        token:''
    }
}


  render() {
    return(
        <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">Start Bootstrap</div>
        <div className="list-group list-group-flush">
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/">Dashboard</Link>
            <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/users">Users</Link>
        </div>
    </div>
    )
  }
}

export default Sidebar;