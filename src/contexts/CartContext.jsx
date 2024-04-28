import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const clear = () => setProducts([]);

    const addProduct = (product, quantity) => {
        const exists = products.some((i) => i.id === product.id);

        if (exists) {
            const updateProducts = products.map((i) => {
                if (i.id === product.id) {
                    return {
                        ...i,
                        quantity: quantity.id + quantity,
                    };
                } else {
                    return i;
                }
            });
            setProducts(updateProducts);
        } else {
            setProducts((prev) => {
                return [...prev, { ...products, quantity }];
            });
        }
    }

    return (
        <CartContext.Provider value={{ addProduct, clear, products }}>
            {children}
        </CartContext.Provider>
    )
}

