import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'


const SAVE_URL = "http://localhost:8000/api/usuario/"
const UPDATE_URL = "http://localhost:8000/api/update/"

const Cadastro = () => {
    const location = useLocation()
    const email = location.state?.email
    const isEdit = location.state?.email ? true : false
    const staff = location.state?.staff ? true : false
    const user = location.state?.user || null
    const emailPlaceholder = email || 'Email'
    const authenticated = location.state?.authenticated || false
    const [state, setState]  = useState({name : null, login: email, addres: null, uf: 'SP', staff, type: 'Funcionário', user, entry: new Date(), out: new Date(), holidays: new Date()})
    console.log("Cadastro", state)

    function handleNameChange(event){
        setState({name: event.target.value, login: state.login, addres: state.addres, uf: state.uf, staff, type: state.type, user, entry: state.entry, out: state.out, holidays: state.holidays}) 
        console.log(state)
    }

    function handleLoginChange(event){
        setState({name: state.name, login: event.target.value, addres: state.addres, uf: state.uf, staff, type: state.type, user, entry: state.entry, out: state.out, holidays: state.holidays}) 
        console.log(state)
    }

    function handleAddresChange(event){
        setState({name: state.name, login: state.login, addres: event.target.value, uf: state.uf, staff, type: state.type, user, entry: state.entry, out: state.out, holidays: state.holidays}) 
        console.log(state)
    }

    function handleStateChange(event){
        setState({name: state.name, login: state.login, addres: state.addres, uf: event.target.value, staff, type: state.type, user, entry: state.entry, out: state.out, holidays: state.holidays}) 
        console.log(state)
    }

    function handleToggleChange(event){
        if(state.type === "Funcionário"){
            setState({name: state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: 'Empresa', user, entry: state.entry, out: state.out, holidays: state.holidays}) 
        }else{
            setState({name: state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: 'Funcionário', user, entry: state.entry, out: state.out, holidays: state.holidays}) 
        }
        console.log(state)
    }

    function handleDateEntry(event){
        setState({name: state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: state.type, user, entry: event, out: state.out, holidays: state.holidays}) 
        console.log(state)
    }

    function handleDateEnd(event){
        setState({name: state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: state.type, user, entry: state.entry, out: event, holidays: state.holidays}) 
        console.log(state)
    }

    function handleDateHollidays(event){
        setState({name: state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: state.type, user, entry: state.entry, out: state.out, holidays: event}) 
        console.log(state)
    }

    async function handleSubmit(event){
        event.preventDefault()
        console.log("Submit", state)
        //setState({name :state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: state.type, validated: true, staff, user}) 
        if(state.login !==null && state.login.length !==0 && state.name !==null && state.name.length !==0 && state.addres !==null && state.addres.length !==0 && state.uf !==null && state.uf.length !==0  && state.type !==null && state.type.length !==0){
            console.log("Entrou", state)
            setState({name: state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: state.type, validated: true, user, authenticated}) 
            //axios POST save
            if(!isEdit){
                const saveResponse = await axios.post(`${SAVE_URL}`, {
                    name: state.name,
                    login: state.login,
                    addres: state.addres,
                    uf: state.uf,
                    type: state.type,
                    entry: state.entry.toISOString().split('T')[0],
                    out: state.out.toISOString().split('T')[0],
                    holidays: state.holidays.toISOString().split('T')[0]
                  })
                  console.log("Cadastro Response", saveResponse)
            }else{
                const saveResponse = await axios.post(`${UPDATE_URL}`, {
                    name: state.name,
                    login: state.login,
                    addres: state.addres,
                    uf: state.uf,
                    type: state.type,
                    entry: state.entry.toISOString().split('T')[0],
                    out: state.out.toISOString().split('T')[0],
                    holidays: state.holidays.toISOString().split('T')[0]
                  })
                  console.log("Update Response", saveResponse)
            }
            
        }   else {
            console.log("Nao entrou", state)
            setState({name: state.name, login: state.login, addres: state.addres, uf: state.uf, staff, type: state.type, validated: false, user, authenticated}) 
        }     
    }

    console.log(location)
        return (
            <div >
                {authenticated ? (
                    <>
                    <div className='Menu'>
                    
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
                    

                        </div>
                        <div className='form-group'>
                            <label >Endereço</label>
                            <input type='text' className='form-control' id='inputAddress' placeholder='Rua Camuirano 109S' required onChange={(e)=>handleAddresChange(e)}/>
                        </div>
                        
                        <div className='form-group '> 
                            <label className="datepicker">Data entrada:</label>
                            <DatePicker selected={state.entry} onChange={(e) => handleDateEntry(e)} />
                        </div>
                        <div className='form-group'>
                            <label className="datepicker" >Data Saída:</label>
                            <DatePicker selected={state.out} onChange={(e) => handleDateEnd(e)} />
                        </div>
                        <div className='form-group'>
                            <label className="datepicker">Data de Férias:</label><></>
                            <DatePicker selected={state.holidays} onChange={(e) => handleDateHollidays(e)} />
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
                            <input className='form-check-input' type='checkbox' id='gridCheck' onChange={(e)=>handleToggleChange(e)}/>
                            <label className='form-check-label' >
                                Empresa
                            </label>
                            </div>
                        </div>
                        <button type='submit' className=' btn btn-primary text-light' onClick={(e)=>handleSubmit(e)}>Adiconar</button>
                    </form>
                </div>
                    </>
                ):(
                    <Navigate to="/" replace={true} />
                )}
                
            </div>
          );

}

export default Cadastro;