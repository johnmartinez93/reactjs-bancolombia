import { useState } from 'react';
import { createContext } from "react";

export const MinicartContext = createContext();

export function MinicartProvider({children}){
    const [cart, setCart] = useState({
        items: [],
        total: 0
    })

    const addToCart = (product) => {
        setCart((prevCart) => {
            const getProduct = prevCart?.items?.reduce((acum, item) => {
                if(item?.id === product?.id){
                    const cleanProducts = prevCart?.items?.filter((item) => item?.id !== product?.id)
                    return [...cleanProducts, { ...item, quantity: (item?.quantity || 0)  + 1 }]
                }

                const newProduct = { ...product, quantity: product.quantity || 1 }
                return [...acum, newProduct]
            }, [...prevCart.items])
            const updatedItems = prevCart?.items?.length > 0 ? getProduct : [{ ...product, quantity: 1 }];
            const updatedTotal = prevCart.total + product.price;

            return {
                items: updatedItems,
                total: updatedTotal
            };
        })
    };

    console.info("Cart: ", cart)

    return (
        <MinicartContext.Provider value={{cart, addToCart}}>
            {children}
        </MinicartContext.Provider>
    )
}