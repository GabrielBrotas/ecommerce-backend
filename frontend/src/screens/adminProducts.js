import React, { useEffect, useState } from 'react'

import '../styles/admin.css'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts, saveProduct, deleteProduct} from '../actions/productActions'

function Admin(props) {

    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin

    const [showForm, setshowForm] = useState(false)

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState('Game')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [bestseller, setBestseller] = useState(false)
    const [carousel, setCarousel] = useState(false)

    const productList = useSelector(state=> state.productList)
    const {loading, products, error, next, previous} = productList

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
    const limit = 8

    useEffect(() => {

        dispatch(listProducts(null, page, limit))

    }, [dispatch, page, limit])

    const openForm = (product) => {
        setshowForm(!showForm)

        if(product._id) {
            setId(product._id)
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
            setCategory(product.category)
            setCountInStock(product.countInStock)
            setDescription(product.description)
            setBestseller(product.bestseller)
            setCarousel(product.carousel)
        }
        
    }

    const submitHandler = (e) => {
        // e.preventDefault();
        
        dispatch(saveProduct({
            _id: id,
            name, price, image, category, countInStock, description, bestseller, carousel
        }))

        setshowForm(!showForm)
        window.location.reload()
    }

    const deleteHandler = (id) => {
 
        dispatch(deleteProduct(id))

        window.location.reload()
    }

    return(
        loading ? <div>Loading...</div>
        :
        error ? <div>Erro: {error} </div> 
        :

        userInfo && userInfo.isAdmin ? 
        
        <main className="main-content">

            
            {showForm && 
            <div className="itemConfig-content">
                <h3 className="itemConfig-title">
                    {id ? 'Editar item' 
                    :
                    'Adicionar novo item'}
                </h3>
                

                <form onSubmit={submitHandler}>
                    <ul className="itemConfig-form">

                        <li>
                            <label htmlFor="name">Nome</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="Nome do item..." required></input>
                        </li>

                        <li>
                            <label htmlFor="category">Categoria</label>
                            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option>Game</option>
                                <option>Console</option>
                                <option>Controle</option>
                                <option>Outros</option>
                            </select>
                        </li>
                        
                        <li>
                            <label htmlFor="price">Preço</label>
                            <input name="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} step="any" min="0" required></input>
                        </li>

                        <li>
                            <label htmlFor="countInStock">Quantidade em Estoque</label>
                            <input name="countInStock" value={countInStock} onChange={ (e) => setCountInStock(e.target.value)} type="number" min="0" required></input>
                        </li>

                        <li>
                            <label htmlFor="description">Descrição</label>
                            <textarea name="description" value={description} onChange={ (e) => setDescription(e.target.value)} placeholder="Descrição"></textarea>
                        </li>

                        <li>
                            <label htmlFor="bestseller">Mais Vendidos?</label>
                            <select name="bestseller" value={bestseller} onChange={(e) => setBestseller(e.target.value)}>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </li>

                        <li>
                            <label  htmlFor="carousel">Carousel?</label>
                            <select name="carousel" value={carousel} onChange={(e) => setCarousel(e.target.value)}>
                                <option>false</option>
                                <option>true</option>
                            </select>
                        </li>

                        <li>
                            <label htmlFor="image">Imagem path</label>
                            <input name="image" type="text" placeholder="imagem path..." value={image} onChange={(e) => setImage(e.target.value)} required></input>
                        </li>

                        <li>
                            <button className="admin-button">{id ? 'Editar' : 'Adicionar'}</button>
                        </li>
                        <li>
                            <button className="admin-button-cancel" onClick={() => openForm({})}>Cancelar</button>
                        </li>

                    </ul>

                </form>

            </div>
            }

            <div className="newItemDiv">
                <button className="newItem" onClick={() => openForm({})}> Adicionar novo Item</button>
            </div>

            <table className="admin-table">

                <thead>
                    <tr>
                        <th>_Id</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Qtd em Estoque</th>
                        <th>Mais Vendidos?</th>
                        <th>Carousel?</th>
                        <th>Descrição</th>
                        <th>Imagem</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.countInStock}</td>
                            <td>{product.bestseller ? <div>Sim</div> : <div>Nao</div>}</td>
                            <td>{product.carousel ? <div>Sim</div> : <div>Nao</div>}</td>
                            <td className="tr-description">{product.description}</td>
                            <td>{product.image}</td>
                            <td>
                                <button className="edit-button" onClick={() => openForm(product)}>Editar</button>
                                <button className="delete-button" onClick={ () => deleteHandler(product._id)}>Deletar</button>
                            </td>
                        </tr>
                    ))} 
                </tbody>

            </table>

            <div className="triangle-buttons">
                {previous && <div onClick={() => setPage(page-1)} className="triangle-prev"></div>}
                {next && <div className="triangle-next" onClick={ () => setPage(page+1)}></div>}
            </div>
            

        </main>
        :
        <div>
            {props.history.push('/')}
        </div>
        
    )
}

export default Admin