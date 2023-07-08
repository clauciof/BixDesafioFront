import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Cadastro = () => {
    const location = useLocation()
    const email = location.state?.email
    const isEdit = location.state?.email ? true : false
    const userStaff = location.state?.userStaff ? true : false
    const user = location.state?.user || null
    console.log("Edit",isEdit)
    const emailPlaceholder = email || 'Email'

    const [state, setState]  = useState({name : null, login: email, addres: null, uf: null, staff: false, password: null, userStaff, user})
    const passwordExpression  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/ 

    function handleNameChange(event){
        setState({name : event.target.value, login: state.login, addres: state.addres, uf: state.uf, staff: state.staff, password: state.password, userStaff, user}) 
        
        console.log(state)
    }

    function handleLoginChange(event){
        setState({name :state.name, login: event.target.value, addres: state.addres, uf: state.uf, staff: state.staff, password: state.password, userStaff, user}) 
        // console.log(state.password)
        
        console.log(state)
    }

    function handleAddresChange(event){
        setState({name :state.name, login: state.login, addres: event.target.value, uf: state.uf, staff: state.staff, password: state.password, userStaff, user}) 
        // console.log(state.password)
        
        console.log(state)
    }

    function handleStateChange(event){
        setState({name :state.name, login: state.login, addres: state.addres, uf: event.target.value, staff: state.staff, password: state.password, userStaff, user}) 
        // console.log(state.password)
        
        console.log(state)
    }

    function handleAdminChange(event){
        setState({name :state.name, login: state.login, addres: state.addres, uf: state.uf, staff: event.target.value, password: state.password, userStaff, user}) 
        // console.log(state.password)
        
        console.log(state)
    }

    function handlePasswordChange(event){
        setState({name :state.name, login: state.login, addres: state.addres, uf: state.uf, staff: state.staff, password: event.target.value, validated: state.validated, userStaff, user}) 
        // console.log(state.password)
        
        console.log(state)
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(state)
        if(passwordExpression.test(state.password)){
            setState({name :state.name, login: state.login, addres: state.addres, uf: state.uf, staff: state.staff, password: state.password, validated: true, userStaff, user}) 
            console.log("A", state)
        }else{
            setState({name :state.name, login: state.login, addres: state.addres, uf: state.uf, staff: state.staff, password: state.password, validated: false, userStaff, user}) 
            console.log("B", state)
        }
        
    }

    console.log(location)
        return (
            <div >
                <div className='Menu'>
                    <nav>
                        <ul>
                            <Link to='/'>Login</Link>
                        </ul>
                        <ul>
                            <Link to='/home'>Home</Link>
                        </ul>
                    </nav>
                </div>
        
        
                <div className='App-body-cadastro'>
                {  isEdit ? (
                       <h1 className='cadastroTitle'>Edição</h1>
                    ):(
                        <h1 className='cadastroTitle'>Cadastro</h1>
                    )}
                    {  state.validated && (
                        <Navigate to="/home" replace={true} state={ state }/>
                    )}
                    <form className='needs-validation novalidate' >
                        <div className='form '>
                        <div className='form-group col-md-6'>
                            <label>Nome</label>
                            <input type='email' className='form-control' id='inputEmail4' placeholder='Nome' onChange={(e)=>handleNameChange(e)} required={true}/>
                            <div className='invalid-feedback'>
                                Please choose a username.
                            </div>
                            </div>

                            {  isEdit ? (
                                <div className='form-group col-md-6 disabled'>
                                <label >Email</label>
                                <input type='email' className='form-control' id='inputEmail4' placeholder={emailPlaceholder} required onChange={(e)=>handleLoginChange(e)} disabled/>
                                <div className='invalid-feedback'>
                                    Please choose a username.
                                </div>
                                </div>
                                ):(
                                    <div className='form-group col-md-6 '>
                                    <label >Email</label>
                                    <input type='email' className='form-control' id='inputEmail4' placeholder={emailPlaceholder} required onChange={(e)=>handleLoginChange(e)}/>
                                    <div className='invalid-feedback'>
                                        Please choose a username.
                                    </div>
                                    </div>
                                )
                            }
                    
                            <div className='form-group col-md-6'>
                            <label >Senha</label>
                            <input type='password' className='form-control' id='inputPassword4' placeholder='Senha' required onChange={(e)=>handlePasswordChange(e)}/>
                            <small id="emailHelp" class="form-text text-muted">Deve conter no mínimo 4 carateres e uma letra.</small>
                            <div className='invalid-feedback'>
                                Please choose a username.
                            </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label >Endereço</label>
                            <input type='text' className='form-control' id='inputAddress' placeholder='Rua Camuirano 109S' required onChange={(e)=>handleAddresChange(e)}/>
                        </div>
                        <div className='form-row'>
                            <div className='form-group col-md-4'>
                            <label >Estado</label>
                            <select id='inputState' className='form-control' onChange={(e)=>handleStateChange(e)} required >
                                <option defaultValue>SP</option>
                                <option value='AC'>Acre</option>
                                <option value='AL'>Alagoas</option>
                                <option value='AP'>Amapá</option>   
                                <option value='AM'>Amazonas</option>
                                <option value='BA'>Bahia</option>
                                <option value='CE'>Ceará</option>
                                <option value='DF'>Distrito Federal</option>
                                <option value='ES'>Espírito Santo</option>
                                <option value='GO'>Goiás</option>
                                <option value='MA'>Maranhão</option>
                                <option value='MT'>Mato Grosso</option>
                                <option value='MS'>Mato Grosso do Sul</option>
                                <option value='MG'>Minas Gerais</option>
                                <option value='PA'>Pará</option>
                                <option value='PB'>Paraíba</option>
                                <option value='PR'>Paraná</option>
                                <option value='PE'>Pernambuco</option>
                                <option value='PI'>Piauí</option>
                                <option value='RJ'>Rio de Janeiro</option>
                                <option value='RN'>Rio Grande do Norte</option>
                                <option value='RS'>Rio Grande do Sul</option>
                                <option value='RO'>Rondônia</option>
                                <option value='RR'>Roraima</option>
                                <option value='SC'>Santa Catarina</option>
                                <option value='SP'>São Paulo</option>
                                <option value='SE'>Sergipe</option>
                                <option value='TO'>Tocantins</option>
                                <option value='EX'>Estrangeiro</option>
                            </select>
                            </div>

                        </div>
                        <div className='form-group'>
                            <div className='form-check'>
                            <input className='form-check-input' type='checkbox' id='gridCheck' onChange={(e)=>handleAdminChange(e)}/>
                            <label className='form-check-label' >
                                Admin
                            </label>
                            </div>
                        </div>
                        <button type='submit' className=' btn btn-primary text-light' onClick={(e)=>handleSubmit(e)}>Adiconar</button>
                    </form>
                </div>
                
            </div>
          );

}

export default Cadastro;