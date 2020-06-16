import React from 'react'

import '../styles/admin.css'

function Admin() {
    return( 
        <main className="main-content">

            <div className="newItemDiv">
                <button className="newItem">Add novo Item</button>
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
                        <th>Descrição</th>
                        <th>Imagem</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1231231</td>
                        <td>PALADINS</td>
                        <td>GAME</td>
                        <td>150</td>
                        <td>5</td>
                        <td>false</td>
                        <td className="tr-description">Lorem asdmaopsdma sdmaspd amsopdmasopdmas odmapso asodpmsodaso dasoapso dopmsaopdmasodpamsdopasmdasdmas pomdasopmas podmasopmasopdm sao damspd</td>
                        <td>/images/products/paladins.jpg</td>
                        <td>
                            <button className="edit-button">Editar</button>
                            <button className="delete-button">Deletar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1231231</td>
                        <td>PALADINS</td>
                        <td>GAME</td>
                        <td>150</td>
                        <td>5</td>
                        <td>false</td>
                        <td>Lorem asdmaopsdma sdmaspd amsopdmasopdmas odmapso asodpmsodaso dasoapso dopmsaopdmasodpamsdopasmdasdmas pomdasopmas podmasopmasopdm sao damspd</td>
                        <td>/images/products/paladins.jpg</td>
                        <td>
                            <button>Editar</button>
                            <button>Deletar</button>
                        </td>
                    </tr>   
                    <tr>
                        <td>1231231</td>
                        <td>PALADINS</td>
                        <td>GAME</td>
                        <td>150</td>
                        <td>5</td>
                        <td>false</td>
                        <td>Lorem asdmaopsdma sdmaspd amsopdmasopdmas odmapso asodpmsodaso dasoapso dopmsaopdmasodpamsdopasmdasdmas pomdasopmas podmasopmasopdm sao damspd</td>
                        <td>/images/products/paladins.jpg</td>
                        <td>
                            <button>Editar</button>
                            <button>Deletar</button>
                        </td>
                    </tr>   
                    <tr>
                        <td>1231231</td>
                        <td>PALADINS</td>
                        <td>GAME</td>
                        <td>150</td>
                        <td>5</td>
                        <td>false</td>
                        <td>Lorem asdmaopsdma sdmaspd amsopdmasopdmas odmapso asodpmsodaso dasoapso dopmsaopdmasodpamsdopasmdasdmas pomdasopmas podmasopmasopdm sao damspd</td>
                        <td>/images/products/paladins.jpg</td>
                        <td>
                            <button>Editar</button>
                            <button>Deletar</button>
                        </td>
                    </tr>   
                </tbody>

            </table>

            <div className="itemConfig-content">
                <h3>Adicionar novo item</h3>
                <div className="itemConfig-form">

                    <div className="itemConfig-option">
                        <label htmlFor="name">Nome</label>
                        <input name="name" type="text" placeholder="Nome do item..." required></input>
                    </div>

                    <div className="itemConfig-option">
                        <label htmlFor="category">Categoria</label>
                        <select required>
                            <option>Game</option>
                            <option>Console</option>
                            <option>Controle</option>
                            <option>Outros</option>
                        </select>
                    </div>

                    <div className="itemConfig-option">
                        <label htmlFor="price">Preço</label>
                        <input name="price" type="number" step="any" min="0" required></input>
                    </div>
                    
                    <div className="itemConfig-option">
                        <label htmlFor="countInStock">Quantidade em Estoque</label>
                        <input name="countInStock" type="number" min="0" required></input>
                    </div>

                    <div className="itemConfig-option">
                        <label htmlFor="description">Descrição</label>
                        <textarea name="description" placeholder="Descrição"></textarea>
                    </div>

                    <div className="itemConfig-option">
                        <label htmlFor="bestSeller">Mais Vendidos?</label>
                        <select>
                            <option>false</option>
                            <option>true</option>
                        </select>
                    </div>

                    <div className="itemConfig-option">
                        <label htmlFor="carousel">Carousel?</label>
                        <select>
                            <option>false</option>
                            <option>true</option>
                        </select>
                    </div>

                    <div className="itemConfig-option">
                        <label htmlFor="image">Imagem path</label>
                        <input name="image" type="text" placeholder="imagem path..." required></input>
                    </div>

                    <div className="itemConfig-option">
                        <button className="admin-button">Adicionar</button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Admin