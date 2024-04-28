import { createContext, useState } from "react"
import { toast } from 'react-toastify';
import Notification from "../components/Notification";

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
                        quantity: i.quantity + quantity,
                    };
                } else {
                    return i;
                }
            });
            setProducts(updateProducts);
            toast.success('Producto agregado al carro.');
        } else {
            setProducts((prev) => {
                toast.success('Producto agregado al carro.');
                return [...prev, { ...product, quantity }];
            });
        }
    }

    const removeProduct = (id) => {
        const filterProducts = products.filter((product) => product.id !== id);
        setProducts(filterProducts);
        toast.error('Producto eliminado del carro.');
    }

    return (
        <>
            <div className="absolute"><Notification /></div>
            <CartContext.Provider value={{ addProduct, clear, products, removeProduct }}>
                {children}
            </CartContext.Provider>
        </>

    )
}

