import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
const Login = (props) => {
    let history = useNavigate()
    const[cred,setCred] =useState({email:"",password:""})
   
    const handleSubmit =async(e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email:cred.email, password:cred.password }),
          });
          const json = await response.json();
          console.log(json) 
          if(json.success){
            localStorage.setItem('token',json.authtoken);
            history('/');
            props.showAlert("Logged In Successfully","success");
          }
          else{
            props.showAlert("Invalid Credentials","danger");
          }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
      };
 
  return (
    <>
    <div className='container' style={{marginTop:10}}>
      <h2 className='my-2'>Login in to use INotebook</h2>
     <form onSubmit={handleSubmit}>
  <div className="mb-3" >
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={cred.email} onChange={onChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="passsword" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={cred.password} onChange={onChange} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}

export default Login
