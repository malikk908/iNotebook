import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [creds, setCreds] = useState({name:"", email: "", password:"", cpassword:""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = creds;

        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
               
            },

            body: JSON.stringify({name, email, password})


        });
        const json = await response.json()
        console.log(json)
        if(json.success){
            // save the authtoken & redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/")
        }
        else{
            alert("some error occurred");
        }
    }

    const onChange = (e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
    }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={creds.name} onChange={onChange} required />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={creds.email} onChange={onChange} required aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={creds.password} onChange={onChange} required minLength={5}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={creds.cpassword} onChange={onChange} required minLength={5}/>
                </div>

                <button disabled={creds.password !== creds.cpassword} type="submit" className="btn btn-primary">Submit</button>
            </form>
    </div>
  )
}

export default Signup
