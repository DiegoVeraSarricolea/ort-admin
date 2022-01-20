import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Products, NavBar, Cart } from './components'

export const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, quantity);

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    console.log("cart: ", cart);

    return (
        <BrowserRouter>
            <div>
                <NavBar totalItems={cart.total_items} />
                <Routes>
                    <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />}/>
                    <Route exact path="/carro" element={
                        <Cart 
                            cart={cart}
                            handleEmptyCart = {handleEmptyCart}
                            handleRemoveFromCart = {handleRemoveFromCart}
                            handleUpdateCartQty = {handleUpdateCartQty}
                        />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
