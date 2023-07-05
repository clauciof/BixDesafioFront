import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{

    render(){
        return (
            <div >
                <h1>Login</h1>
                <nav>
                    <ul>
                        <li>
                        <Link to="/home">Home</Link>
                        </li>
                        <li>
                        <Link to="/subscribe">Subscribe</Link>
                        </li>
                    </ul>
                </nav>
        
                <div class="App-body-login">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary text-light">Submit</button>
                    </form>
                </div>
                
            </div>
          );
    }
  
}

export default Login;