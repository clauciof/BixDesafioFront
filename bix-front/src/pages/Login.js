import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const baseURL = "http://localhost:8000/api/login/"

const Login = () => {
    const navigate = useNavigate()

    const [state, setState]  = useState({login : null, password: null, validated: false, staff: false})

    function handleLoginChange(event){
        setState({login : event.target.value, password: state.password, validated: state.validated, staff: state.staff})
    }

    function handlePasswordChange(event){
        setState({login : state.login, password: event.target.value, validated: state.validated, staff: state.staff})
    }

    async function handleSubmit(event){
        event.preventDefault()
        if(state.login !==null && state.login.length !==0 && state.password !==null ){ 
            const authResponse = await axios.post(baseURL, {
                name: state.login,
                password: state.password
              })
            if (authResponse.data.authenticated ) {
                navigate('/home', {state: authResponse.data})
            }
        }
        
    }

  
        return (
            <div >
                
               
                <div className="App-body-login">
                    <h1>Login</h1>
                    {  state.validated && (
                        <Navigate to="/home" replace={true} state={ {user: state.login, userStaff: state.staff } }/>
                    )}
                    <form className="novalidate" data-toggle="validator" role="form">
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.com" onChange={(e)=>handleLoginChange(e)} required></input>
                            
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****" onChange={(e)=>handlePasswordChange(e)} required></input>
                        </div>
                        
                        <button type="submit" className="btn btn-primary text-light" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
                
            </div>
          );
  
}

export default Login;