import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getAddress } from '../actions/cartActions'

function Address(props) {

    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin

    const dispatch = useDispatch()

    useEffect( () => {
        if(!userInfo) {
            props.history.push('/')
        }
        return () => {
            //
        }
    }, [userInfo, props.history])


    const [name, setName] = useState('')
    const [cep, setCep] = useState('')
    const [uf, setUf] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [number, setNumber] = useState(0)
    const [phone, setPhone] = useState('')

    useEffect( () => {
        const address = {cep, uf, localidade, bairro, logradouro, name, number, phone}
        dispatch(getAddress(address))
    }, [dispatch, cep, bairro, uf, localidade, logradouro, name, phone, number])


    return(
        <main className="main">
            
            <div className="user-content">
                <h3 className="user-title">Endereço de entrega</h3>

                <form >
                    <ul className="user-form">
                        
                        <li>
                            <label htmlFor="name">Nome e Sobrenome</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" required></input>
                        </li>

                        <li>
                            <label htmlFor="cep">Cep</label>
                            <input value={cep} onChange={(e) => setCep(e.target.value)} name="cep" type="text" ></input>
                        </li>

                        <li>
                            <label htmlFor="state">Estado</label>
                            <input value={uf} onChange={(e) => setUf(e.target.value)} name="state" type="text" ></input>
                        </li>

                        <li>
                            <label htmlFor="city">Cidade</label>
                            <input value={localidade} onChange={(e) => setLocalidade(e.target.value)} name="city" type="text" ></input>
                        </li>

                        <li>
                            <label htmlFor="bairro">Bairro</label>
                            <input value={bairro} onChange={(e) => setBairro(e.target.value)} name="bairro" type="text" ></input>
                        </li>

                        <li>
                            <label htmlFor="street">Rua/Avenida</label>
                            <input value={logradouro} onChange={(e) => setLogradouro(e.target.value)} name="street" type="text" ></input>
                        </li>

                        <li>
                            <label htmlFor="number">Numero</label>
                            <input value={number} onChange={(e) => setNumber(e.target.value)} name="number" type="number" ></input>
                        </li>

                        <li>
                            <label htmlFor="phone">Telefone de contato</label>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" type="text" ></input>
                        </li>

                        <li>
                            <Link to="/reviewPayment"><button>Confirmar endereço</button></Link>
                        </li>
                    </ul>

                   
                </form>

            </div>

        </main>

    )
}

export default Address