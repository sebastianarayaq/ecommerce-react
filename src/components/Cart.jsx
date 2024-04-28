import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
    name: "",
    phone: "",
    email: "",
};

export const Cart = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { clear, products } = useContext(CartContext);

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        setBuyer((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const total = products.reduce((acu, act) => acu + act.price * act.quantity, 0);

    const handleOrder = () => {
        const order = {
            buyer,
            products,
            total,
        };


        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su order: " + id + " ha sido completada!");
            }
        });
    };

    return (
        <>
            <div className="flex flex-col items-center gap-4 my-4 max-w-4xl mx-auto">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 text-center">Mi pedido</h1>
                <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <tr>
                            <th className="py-3 px-6 text-left">Producto</th>
                            <th className="py-3 px-6 text-center">Cantidad</th>
                            <th className="py-3 px-6 text-right">Precio</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {products.map((product) => (
                            <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">{product.title}</td>
                                <td className="py-3 px-6 text-center">{product.quantity}</td>
                                <td className="py-3 px-6 text-right">{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" onClick={clear} className="px-6 py-2 mt-3 bg-red-500 text-white font-bold uppercase rounded shadow hover:bg-red-600 focus:outline-none">Vaciar carro</button>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-5 bg-white shadow-md rounded-lg">
                <h2 className='text-lg font-semibold text-gray-900'>Datos</h2>
                <form>
                    <div className="mb-4">
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Nombre</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" value={buyer.name} name="name" onChange={handleChange} required></input>
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Celular</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="number" value={buyer.phone} name="phone" onChange={handleChange} required></input>
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" value={buyer.email} name="email" onChange={handleChange} required></input>
                    </div>
                </form>
                <button type="button" onClick={handleOrder} className="px-6 py-2 bg-blue-500 text-white font-bold uppercase rounded shadow hover:bg-blue-600 focus:outline-none">Comprar</button>
            </div>
        </>
    );
}
