import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'

import "./SignUp.css";
const SignUp = () => {
const navigate = useNavigate();

const [input , setInput] = useState({
    name: "",
    email : "",
    password : "",
})


const handleSubmit =(e)=>{
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate('/register');
}

  return (
    <div className="Container">
    <div className="main_box" >
        <form action="" onSubmit = {handleSubmit}>
<h1>Register</h1>
<div className="input-box">
    <input type = "text" 
     name = "name" value = {input.name} onChange = {(e) => setInput({...input , [e.target.name]: e.target.value,})}
      placeholder = "Name" required/>
    
</div>
<div className="input-box">
    <input type = "email" 
      name = "email" value = {input.email} onChange = {(e) => setInput({...input , [e.target.name]: e.target.value,})}
    placeholder = "Email" required/>
    
</div>
<div className="input-box">
    <input type = "password"
      name = "password" value = {input.password} onChange = {(e) => setInput({...input , [e.target.name]: e.target.value,})}
    placeholder = "Password" required/>
    
</div>

    <button type="submit">Register</button>
    <div className="register-link">
        <p>Already have an account? <Link to="/Login">Log in Here</Link></p>
    </div>
        </form>
    </div>
    </div>
    
  )
}

export default SignUp





