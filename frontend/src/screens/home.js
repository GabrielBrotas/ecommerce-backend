import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
// useSelector se comunica com a store/reducer, useDispatch dispara uma função para as actions
import {useSelector, useDispatch} from 'react-redux'

import '../styles/index.css'
import { listProducts } from '../actions/productActions'


function HomePage() {

    
    const productList = useSelector(state => state.productList)
    const {products, loading, error} = productList

    const dispatch = useDispatch();

    useEffect( () => {

        dispatch(listProducts(null))

    }, [dispatch])


    // carousel functions 

    let counter = 0
    const qtyImages = 3
    
    let windowSize = window.innerWidth
    const imagesSize = 1500
    
    const nextCarouselPhoto = () => {

        const carouselSlide = document.querySelector('.carousel-slide')
        
        windowSize = window.innerWidth

        // caso a tela for maior que o tamanho da imagem(1500px) travar nesse valor
        if(windowSize >= imagesSize) { 
            windowSize = imagesSize
        }

        console.log(counter)
        if(counter < qtyImages - 1 ) {

            carouselSlide.style.transition = 'transform 0.5s ease-in-out'
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-windowSize * counter) +'px)'
        } else {
            counter = 0
            carouselSlide.style.transform = 'translateX(' + (-windowSize * counter) +'px)'
        }
            
        
    }

    const prevCarouselPhoto = () => {
        
        const carouselSlide = document.querySelector('.carousel-slide')

        windowSize = window.innerWidth

        // caso a tela for maior que o tamanho da imagem(1500px) travar nesse valor
        if(windowSize >= imagesSize) { 
            windowSize = imagesSize
        }

        if(counter > 0) {
            
            carouselSlide.style.transition = 'transform 0.5s ease-in-out'
            counter--;
            carouselSlide.style.transform = 'translateX(' + (-windowSize * counter) +'px)'

        } else {
            carouselSlide.style.transition = 'transform 0.5s ease-in-out'
            counter = 2
            carouselSlide.style.transform = 'translateX(' + (-windowSize * counter) +'px)'
        }
        
    }

    return( 
        loading ? <div>Loading...</div>
        :
        error ? <div>{error}</div>
        :
        <main className="main">

            <div className="carousel-container">
                <div className="carousel-slide">

                    {products.map(product => (

                        product.carousel && <img key={product._id} src={product.image} alt='Carousel Foto'></img>
                        
                    ))}
    
                    
                </div>
                
                <div className="arrows-div">
                    <div className="box-arrow">
                        <img  onClick={prevCarouselPhoto} className="seta-left" src="/images/de-volta.png" alt="Arrow next"></img>
                    </div>
                    
                    <div className="box-arrow" >
                        <img onClick={nextCarouselPhoto} className="seta-right" src="/images/proximo.png" alt="Arrow prev "></img>
                    </div>
                </div>

                <div className="box-buy">
                    <p>Compre já!</p>
                </div>
                
            </div>

            <div className="products-content">

                <div className="product-one">

                    <div className="products-highligth">
                        <h2>Controles Personalizados</h2>
                        <p>Escolha entre dezenas de controles personalizados com a temática do seu game favorito, além de controles com temas de filmes, animes e muito mais. Tudo de Gamers para Gamers</p>
                    </div>
    
                    <div className="product-one-background">
                        <img src="/images/controller.png" alt="controller"></img>
                    </div>

                </div>
                
                <div className="product-two">

                    <div className="products-highligth">
                        <h2>Jogos Diversos</h2>
                        <p>A Maior loja de games do Brasil, comprar jogos para PS4, PS3, XBOX One, XBOX 360, Wii, DS, 3DS e muito mais.</p>
                    </div>

                    <div className="product-two-background">
                        <img src="/images/soldier.png" alt="soldier"></img>
                    </div>

                </div>
                
            </div>

            <div className="bests-sellers-content">
                
                <h2>Mais Vendidos</h2>

                <div className="box-best-products">
                    
                    {products.map(product => (
                        product.bestseller &&
                        <div key={product._id} className="product-bestseller-content">
                            
                            <div className="product-bestseller-img">
                                <img src={product.image} alt="Product"></img>
                            </div>

                        </div>
                    ))
                    }                
 
                </div>

                <div>
                    <Link to="/products"><button className="button">See More</button></Link>
                </div>
            </div>
            

            
        </main>
    )
}

export default HomePage