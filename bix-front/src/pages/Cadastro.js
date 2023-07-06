import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cadastro extends Component{

    render(){
        return (
            <div >
                <div className="Menu">
                    <nav>
                        <ul>
                            <Link to="/">Login</Link>
                        </ul>
                        <ul>
                            <Link to="/home">Home</Link>
                        </ul>
                    </nav>
                </div>
        
        
                <div className="App-body-cadastro">
                    <h1>Cadastro</h1>
                    <form>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.com"/>
                           
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****"/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary text-light">Submit</button>
                    </form>
                </div>
                
            </div>
          );
    }

}

export default Cadastro;