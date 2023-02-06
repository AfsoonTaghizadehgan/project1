import React from "react"
import logo from "./logo.svg"
import "./App.css"


// Navigation bar including a logo, title, and discription
export default function Nav(){
    return(
<nav className="nav">
    <img src={logo} className="nav-logo" alt="logo"></img>
    <h1 className="nav-h1">ReactFacts</h1>
    <p className="nav-content">React Course-Project1</p>
</nav>
    )
}