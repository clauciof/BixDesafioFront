import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home  extends Component{

    render(){
        return (
            <div>
              <h1>Home</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Login</Link>
                  </li>
                  <li>
                    <Link to="/subscribe">Subscribe</Link>
                  </li>
                </ul>
              </nav>
        
              <div className='App-body-table'>
                <table class="table">
                    <thead class="thead-dark">
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
}

export default Home;