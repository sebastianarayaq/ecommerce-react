
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import data from '../data/products.json'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const get = new Promise((resolve) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            const filteredData = data.find(d => d.id == Number(id));
            setProduct(filteredData)

        });
    }, [id]);

    if (!product) return null;

    return (
        <div className='min-h-max'>
            <div className="flex flex-col flex-wrap justify-center items-center gap-4 my-4">
                <h1 className='text-xl font-bold tracking-tight text-gray-900 text-center mb-3 h1'>{product.title}</h1>
                <img src={product.pictureUrl} alt={product.title} />
                <p className='text-black font-semibold'>${product.price}</p>
            </div>
        </div>

    );
};

export default ItemDetailContainer;