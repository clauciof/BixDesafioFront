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

const INITIAL_DATA = [
    
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

    function handleEditClick(email){
        navigate('/cadastro', {state: {email, staff: state.staff, user: state.user, authenticated}})

    }

    function handleAddClick(){
        navigate('/cadastro', {state: {email: null, staff: state.staff, user: state.user, authenticated}})
    }

    function handleViewClick(email){
        navigate('/timeline', {state: {email: email, staff: state.staff, user: state.user, authenticated}})
    }

    async function handleDeleteClick(email){
        const deleteResponse = await axios.post(`${DELETE_URL}`, {
            login: email
        })
        
        const new_data = await axios.get(USERS_URL)
        setState({user: user, staff: staff, authenticated, data: new_data.data})
        console.log(new_data)
          
        console.log("Cadastro Response", deleteResponse)
        console.log('Estado', state)
    }

    function renderAdminTable(){
        return state.data.map(({ name, login, type }) => {
            return <tr key={login} >
            <td >{name}</td>
            <td >{login}</td>
            <td >{type}</td>
            <td><i title='Editar'><img src={editIcon} alt='editar'width='24' height='24' onClick={()=>{handleEditClick(login)}}/></i>/<i title='Excluir'><img src={deletIcon} alt='editar'width='24' height='24' onClick={()=>{handleDeleteClick(login)}}/></i>/<i title='Visualizar'><img src={viewIcon} alt='editar'width='24' height='24' onClick={()=>{handleViewClick(login)}}/></i></td>
          </tr>
          })
    }

    function renderTable(){
        return state.data.map(({ name, login, type }) => {
            return <tr key={login} >
            <td >{name}</td>
            <td >{login}</td>
            <td >{type}</td>
            <td><i title='Visualizar'><img src={viewIcon} alt='editar'width='24' height='24' onClick={()=>{handleViewClick(login)}}/></i></td>
          </tr>
          })
    }
    
    return (
        <div>
            {  state.authenticated ? (
                <>
                              <h1>Home</h1>
                              <img src={icon} alt='icone usuario'width='50' height='50'/>
                              <h5>{state.user}</h5>
                  
                              
                              <div className='Menu'>
                              <nav>
                                  <ul>
                                      <Link to='/'>Logout</Link>
                                  </ul>
                              </nav>
                              </div>
                              
                              <div className='table-title'>
                              <div className='row '>
                                  <div className='col mr-auto'>
                                      <h4>TABELA DE <b>INFORMAÇÕES</b></h4>
                                  </div>
                                  {
                                      staff ? (
                                          <div className='col ml-auto '>
                                              <button type='button' className='btn btn-primary text-light' onClick={()=>{handleAddClick()}}><i className='fa fa-plus'></i> Adicionar</button>
                                          </div>
                                      ) : (
                                          <>
                                          </>
                                      )
                                  }
                              </div>
                              </div>
                              <div className='App-body-table table-responsive card'>
                                  
                              { staff ? (
                                  <table className='table table-bordered '>
                                  <thead className='table-dark'>
                                      <tr>
                                      <th scope='col'>Name</th>
                                      <th scope='col'>Login</th>
                                      <th scope='col'>Perfil</th>
                                      <th scope='col'>Ação</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                  {renderAdminTable()}
                                  </tbody>
                              </table>
                              ) : (
                                  <table className='table table-bordered '>
                                      <thead className='table-dark'>
                                          <tr>
                                          <th scope='col'>Name</th>
                                          <th scope='col'>Login</th>
                                          <th scope='col'>Perfil</th>
                                          <th scope='col'>Ação</th>
                                  
                                          </tr>
                                      </thead>
                                      <tbody>
                                      {renderTable()}
                                      </tbody>
                                  </table>
                              )}
                                  
                              </div>
                              </>
                    ):(
                        <Navigate to="/" replace={true} />
                    )}
        </div>
        );
}

export default Home;