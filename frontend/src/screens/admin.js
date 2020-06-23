import React from 'react'
import {Link, Route} from 'react-router-dom'

import AdminProducts from './adminProducts'
import AdminSales from './adminSales'

function Admin(props) {

    return(
        <div className="admin-content">
            <div className="admin-navbar">
                <Link to="/admin/products"><button>Produtos</button></Link>
                <Link to="/admin/sales"><button>Sales</button></Link>
                
            </div>

            <div className="admin-main">

                <Route path="/admin/sales" render={ (props) => <AdminSales {...props} />}></Route>

                <Route path="/admin/products" exact={true} render={ (props) => <AdminProducts {...props} />}></Route>

                
            </div>


        </div>
    )
}

export default Admin