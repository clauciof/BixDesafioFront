import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom"
import { useState } from 'react'

const Login = () => {
   
    
        
    const passwordExpression  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/ 
    // Set initial state
    const [state, setState]  = useState({login : null, password: null, submitted: false, staff: false})
    
    
    

    function handleLoginChange(event){
        setState({login : event.target.value, password: state.password, submitted: state.submitted, staff: state.staff})
        console.log(state.login)
    }

    function handlePasswordChange(event){
        setState({login : state.login, password: event.target.value, submitted: state.submitted, staff: state.staff})
        console.log(state.password)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(state)
        if(state.login !==null && state.login.length !==0 && state.password !==null && passwordExpression.test(state.password)){
            if(state.password === "admin1"){
                console.log("AAA")
                setState({login : state.login, password: state.password, submitted: true, staff: true})
                console.log(state.staff)
            }else{
                setState({login : state.login, password: state.password, submitted: true, staff: false})
            }
        }
        
    }

  
        return (
            <div >
                <div className="Menu">
                    <nav>
                        <ul>
                            <Link to="/home">Home</Link>
                        </ul>
                        <ul>
                            <Link to="/cadastro">Cadastro</Link>
                        </ul>
                    </nav>
                </div>
               
                <div className="App-body-login">
                    <h1>Login</h1>
                    {  state.submitted && (
                        <Navigate to="/home" replace={true} state={ state }/>
                    )}
                    <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.com" onChange={(e)=>handleLoginChange(e)}/>
                            
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****" onChange={(e)=>handlePasswordChange(e)}/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary text-light" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
                
            </div>
          );
  
}

export default Login;