import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
    const { addProduct } = useContext(CartContext);

    const add = (quantity) => {
        addProduct(product, quantity);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2">
                <img src={product?.imageURL} alt={product?.title} className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col mt-4 md:mt-0 md:ml-8 md:w-1/2 gap-2 items-center lg:items-start">
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 grow-0'>{product?.title}</h1>
                <p className='text-2xl text-black font-semibold grow'>${product?.price}</p>
                <p className='text-xl text-black font-semibold grow'>{product?.description}</p>
                <p className='text-sm text-black font-semibold grow-0'>Stock: {product?.stock}</p>
                <ItemCount onAdd={add} stock={product.stock} />
            </div>
        </div>
    );
};
