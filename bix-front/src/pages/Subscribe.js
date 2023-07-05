import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Subscribe extends Component{

    render(){
        return (
            <div >
              <h1>Subscribe</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Login</Link>
                  </li>
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                </ul>
        
            <div className="App-body-subscribe">
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
                
              </nav>
            </div>
          );
    }

}

export default Subscribe;