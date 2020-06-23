import React, { useEffect } from 'react'
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
        if(userInfo) {
            dispatch(listPayments(userInfo._id))
        } else {
            props.history.push('/')
        }
        
    }, [userInfo, dispatch, props.history])


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
                        <th>Status</th>
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
                            <td>Pendente</td>

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