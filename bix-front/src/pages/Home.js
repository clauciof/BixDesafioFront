import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import userIcon from '../icons/person.svg'
import adminIcon from '../icons/manage_accounts.svg'
import deletIcon from '../icons/deleteIcon.png'
import editIcon from '../icons/editIconGold.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'


const INITIAL_DATA = [
    { name: 'Accenture', email: 'accenture@accenture.com', perfil: 'empresa' },
    { name: 'Claucio', email: 'claucio@gmail.com', perfil: 'funcionario' },
    { name: 'Bix', email: 'bix@bix.com', perfil: 'empresa' },
  ]
  
const Home = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log('Location', location.state)
    var user = location.state?.user || 'null'
    var staff = location.state?.staff || false

    const [state, setState] = useState({user: user, staff: staff, data: INITIAL_DATA})

    const icon = staff ? adminIcon : userIcon

    console.log('Estado fora', state)

    function handleEditClick(email){
        navigate('/cadastro', {state: {email, staff: state.staff, user: state.user}})

    }

    function handleAddClick(){
        navigate('/cadastro', {state: {email: null, staff: state.staff, user: state.user}})
    }

    function handleDeleteClick(email){
        const newStateData = state.data.filter(data => data.email !== email);
        console.log('Estado', state)
        setState({user: state.user, staff: state.staff, data: newStateData})
        console.log('Estado', state)
    }

    function renderAdminTable(){
        return state.data.map(({ name, email, perfil }) => {
            return <tr key={email} >
            <td >{name}</td>
            <td >{email}</td>
            <td >{perfil}</td>
            <td><i title='Editar'><img src={editIcon} alt='editar'width='24' height='24' onClick={()=>{handleEditClick(email)}}/></i>/<i title='Excluir'><img src={deletIcon} alt='editar'width='24' height='24' onClick={()=>{handleDeleteClick(email)}}/></i></td>
          </tr>
          })
    }

    function renderTable(){
        return state.data.map(({ name, email, perfil }) => {
            return <tr key={email} >
            <td >{name}</td>
            <td >{email}</td>
            <td >{perfil}</td>
          </tr>
          })
    }
    
    return (
        <div>
            <h1>Home</h1>
            <img src={icon} alt='icone usuario'width='50' height='50'/>
            <h5>{state.user}</h5>

            
            <div className='Menu'>
            <nav>
                <ul>
                    <Link to='/'>Logout</Link>
                </ul>
                <ul>
                    <Link to='/cadastro'>Cadastro</Link>
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
                
                        </tr>
                    </thead>
                    <tbody>
                    {renderTable()}
                    </tbody>
                </table>
            )}
                
            </div>
        </div>
        );
}

export default Home;