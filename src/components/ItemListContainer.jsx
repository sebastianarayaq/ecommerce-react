import { ItemList } from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Banner from './Banner'
import { Loading } from './Loading';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        setLoading(true);
        let refCollection;

        if (!id) refCollection = collection(db, "items")
        else {
            refCollection = query(collection(db, "items"), where("categoryId", "==", id))
        }

        getDocs(refCollection).then((snapshot) => {
            setProducts(snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            }));
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return (
            <>
                <Loading loading={"Cargando productos"} />
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