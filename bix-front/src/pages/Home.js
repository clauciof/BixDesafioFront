import React, { Component } from 'react'
import { useLocation, Link } from "react-router-dom"
import userIcon from "../icons/person.svg"
// import { useLocation } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    let state = {user: location.state.login};
    console.log(state);
    
    return (
        <div>
            <h1>Home</h1>
            <img src={userIcon} width="50" height="50"/>
            <h5>{state.user}</h5>

            
            <div className="Menu">
            <nav>
                <ul>
                    <Link to="/">Login</Link>
                </ul>
                <ul>
                    <Link to="/cadastro">Cadastro</Link>
                </ul>
            </nav>
            </div>
            
    
            <div className='App-body-table'>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        );
}

export default Home;