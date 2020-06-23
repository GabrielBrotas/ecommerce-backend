import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress } from '../actions/addressActions'


function Address(props) {

    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin

    const addressInfo = useSelector(state => state.addressInfo)
    const {address, apiRequest} = addressInfo

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
        const addressData = {cep, uf, localidade, bairro, logradouro, name, number, phone}
        dispatch(getAddress(cep, addressData))
        
    }, [dispatch, cep, bairro, uf, localidade, logradouro, name, phone, number])

    useEffect( () => {

        if(apiRequest) {
            setUf(address.uf)
            setLocalidade(address.localidade)
            setBairro(address.bairro)
            setLogradouro(address.logradouro)
            address.name = name
            address.number = number
            address.phone = phone
        }
       
    }, [address, cep, name, phone, number, apiRequest])


    const submitHandler = () => {
        props.history.push('/reviewPayment/')
    }

    return(

        <main className="main">
            
            <div className="user-content">
                <h3 className="user-title">Endereço de entrega</h3>

                <form onSubmit={submitHandler}>
                    <ul className="user-form">
                        
                        <li>
                            <label htmlFor="name">Nome e Sobrenome</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" required></input>
                        </li>

                        <li>
                            <label htmlFor="cep">Cep</label>
                            <input value={cep} onChange={(e) => setCep(e.target.value)} name="cep" type="number" ></input>
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
                            <button>Confirmar endereço</button>
                        </li>
                    </ul>

                   
                </form>

            </div>

        </main>

    )
}

export default Address