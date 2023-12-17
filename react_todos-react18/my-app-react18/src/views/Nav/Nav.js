import React from "react";
import './Nav.scss'
import {  Routes, NavLink} from 'react-router-dom';
class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/about">About</NavLink>
  {/* <a className="active" href="/">Home</a>
  <a href="/todo">Todo</a>
  <a href="/about">About</a> */}
</div>
        )

    }
}

export default Nav;