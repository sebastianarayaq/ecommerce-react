import { ItemList } from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import data from '../data/products.json'
import Banner from './Banner'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const get = new Promise((resolve) => {
            setTimeout(() => resolve(data), 2000);
        });

        get.then((data) => {
            if (id) {
                const filteredData = data.filter(d => d.category == id);
                setProducts(filteredData)
                setLoading(false)
            } else {
                setProducts(data)
                setLoading(false)
            }
        });
    }, [id])

    if (loading) {
        return (
            <>
                <p className=' text-black font-semibold text-center'>Cargando productos</p>
            </>
        )
    }

    return (
        <div className='min-h-max'>
            <Banner gretings={"¡Bienvenidos a Tech Shop!"} />
            <div className="flex flex-wrap justify-center items-center gap-4 my-4">
                <ItemList products={products} />
            </div>
        </div>

    );
};

export default ItemListContainer;