import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {listPayments} from '../actions/productActions'

function Compras(props){

    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin


    const paymentList = useSelector(state=> state.paymentList)
    const {loading, payments, error} = paymentList

    const dispatch = useDispatch()

    // const [page, setPage] = useState(1)
    // const limit = 8

    useEffect(() => {

        dispatch(listPayments(userInfo._id))
        
    }, [])
    console.log(payments)
    return(
        loading ? <div>Loading...</div>
        :
        error ? <div>Erro: {error} </div> 
        :

        <main className="main-content">

            <table className="admin-table">

                <thead>
                    <tr>
                        <th>PaymentID</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço Total</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {payments.map(payment => (
                        <tr key={payment._id}>
                            <td>{payment.paymentId}</td>
                            <td>{payment.product}</td>
                            <td>{payment.amount}</td>
                            <td>R$ {payment.totalPrice}</td>
                            <td>{payment.date}</td>

                        </tr>
                    ))} 
                </tbody>

            </table>

            <div className="triangle-buttons">
                {/* {previous && <div onClick={() => setPage(page-1)} className="triangle-prev"></div>} */}
                {/* {next && <div className="triangle-next" onClick={ () => setPage(page+1)}></div>} */}
            </div>
            

        </main>
        
    )
}

export default Compras