import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

const INITIAL_DATA = [
    {
        text: 'Entrada',
        date: 'March 03 2017',
        
        
    },
    {
        text: 'Saida',
        date: 'March 03 2017',
        
        
    },
    {
        text: 'Ferias',
        date: 'March 03 2017',
       
       
    },
];

const USER_URL = "http://localhost:8000/api/usuario/"

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <time>{data.date}</time>
            <p>{data.title}</p>
        
            <span className="circle" />
        </div>
    </div>
);
  
const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const user = location.state?.user || 'null'
    const staff = location.state?.staff || false
    const authenticated = location.state?.authenticated || false
    const email = location.state?.email || false
    console.log(location.state.email)

    const [state, setState] = useState({user: user, staff: staff, authenticated, data: INITIAL_DATA})

    useEffect(() => {
        axios.get(`${USER_URL}?login=${email}`).then(response => {
        console.log("Response", response)
        setState({data: [{date: response.data.user_entry, title: "entrada"}, {date: response.data.user_out, title: "saida"}, {date: response.data.user_holidays, title: "ferias"}], authenticated})
        });
      }, []);

    if(!state.authenticated){
        navigate('/')
    }


    
    return (
        <div>

        {  state.authenticated ? (
            
             state.data.length > 0 && (
                <div className="timeline-container">
                    {state.data.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
                </div>
            )):(
                <></>
            )}
        </div>
        );
}

export default Home;