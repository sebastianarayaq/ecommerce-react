import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {

    const { addProduct } = useContext(CartContext);

    const add = (quantity) => {
        console.log(product, quantity)
        addProduct(product, quantity);
    }
    return (
        <>
            <h1 className='text-xl font-bold tracking-tight text-gray-900 text-center mb-3 h1'>{product?.title}</h1>
            <img src={product?.imageURL} alt={product?.title} />
            <p className='text-black font-semibold'>$ {product?.price}</p>
            <p className='text-black font-semibold'>Stock: {product?.stock}</p>
            <ItemCount onAdd={add} stock={product.stock} />
        </>
    );
};