import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom"

class Login extends Component{
    constructor(props){
    
        super(props)
        this.passwordExpression  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/ 
        // Set initial state
        this.state = {login : null, password: null, submitted: false}
    
        // Binding this keyword
        this.handleLoginChange = this.handleLoginChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleLoginChange(event){
        this.setState({login: event.target.value})
        console.log(this.state.login)
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value})
        console.log(this.state.password)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
        if(this.state.login !==null && this.state.login.length !==0 && this.state.password !==null && this.passwordExpression.test(this.state.password)){
            this.setState({submitted: true})
        }
        
    }

    render(){
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
                    {  this.state.submitted && (
                        <Navigate to="/home" replace={true} state={ this.state }/>
                    )}
                    <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.com" onChange={this.handleLoginChange}/>
                            
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****" onChange={this.handlePasswordChange}/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary text-light" onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                
            </div>
          );
    }
  
}

export default Login;