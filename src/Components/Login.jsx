import React,{useState} from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./Login.css";
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'

const Login = () => {


    const navigate = useNavigate();

    const [input , setInput] = useState({
        name: "",
        email : "",
        password : "",
    })
    
    
    const handleLogin =(e)=>{
        e.preventDefault();
       const loggedUser = JSON.parse(localStorage.getItem("user"));
        
        if(input.email === loggedUser.email && input.password === loggedUser.password){
            navigate('/Login');
            localStorage.setItem("loggedin",true);
            
        }
        else{
            alert("Entered wrong email or password")
        }
    }
    

  return (
    <div className="mainContainer">
    <div className="Container">
    <div className="main_box" >
        <form action="" onSubmit = {handleLogin}>
<h1>Login</h1>
<div className="input-box">
    <input type = "email"
     name = "email" value = {input.email} onChange = {(e) => setInput({...input , [e.target.name]: e.target.value,})}
    placeholder = "Email" required/>
    <FaUserAlt className="icon"/>
</div>
<div className="input-box">
    <input type = "password"
     name = "password" value = {input.password} onChange = {(e) => setInput({...input , [e.target.name]: e.target.value,})}
    placeholder = "Password" required/>
    <FaLock className="icon" />
</div>
{/* abhi remember upar aa rha heh , isilioye nhi lga rhi */}
{/* <div className="remember-forgot">
    <label>
        <input type="checkbox"/> Remember me
        </label>
        <a href="#password">Forgot Password?</a>
</div> */}
    <button type="submit">Login</button>
    <div className="register-link">
        <p>Don't have an account? <a href="#Register"><Link to = "/Register">Register</Link></a></p>
    
</div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Login