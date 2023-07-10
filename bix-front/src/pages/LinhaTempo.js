import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import userIcon from '../icons/person.svg'
import adminIcon from '../icons/manage_accounts.svg'
import deletIcon from '../icons/deleteIcon.png'
import viewIcon from '../icons/view.png'
import editIcon from '../icons/editIconGold.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
// import { useLocation } from 'react-router-dom'


const INITIAL_DATA = [
    // { name: 'Accenture', email: 'accenture@accenture.com', type: 'empresa' },
    // { name: 'Claucio', email: 'claucio@gmail.com', type: 'funcionario' },
    // { name: 'Bix', email: 'bix@bix.com', type: 'empresa' },
  ]

const USERS_URL = "http://localhost:8000/api/usuarios/"

const DELETE_URL = "http://localhost:8000/api/delete/"
  
const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const user = location.state?.user || 'null'
    const staff = location.state?.staff || false
    const authenticated = location.state?.authenticated || false
    const icon = staff ? adminIcon : userIcon

    const [state, setState] = useState({user: user, staff: staff, authenticated, data: INITIAL_DATA})

    useEffect(() => {
        axios.get(`${USERS_URL}`).then(response => {
        setState({user: user, staff: staff, authenticated, data: response.data})
        //setState({user: response.data.user, staff: response.data.staff, authenticated: response.data.authenticated})
        });
      }, []);

    if(!state.authenticated){
        navigate('/')
    }


    
    return (
        <div>
            {  state.authenticated ? (
                <>
                              <h1>Home</h1>
                              <img src={icon} alt='icone usuario'width='50' height='50'/>
                              <h5>{state.user}</h5>
                  
                            </>
                    ):(
                        <Navigate to="/" replace={true} />
                    )}
        </div>
        );
}

export default Home;