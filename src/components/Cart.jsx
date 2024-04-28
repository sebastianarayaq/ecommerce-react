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
            <div className="flex flex-col flex-wrap justify-center items-center gap-4 my-4">
                <h1 className="text-xl font-bold tracking-tight text-gray-900 text-center mb-3 h1">Mi pedido</h1>
                <table>
                    <tbody className='text-black font-semibold'>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button type="button" onClick={clear} className='text-black font-semibold'>Vaciar carro</button>
            </div>
            <h2 className='text-black font-semibold'>Datos</h2>
            <form>
                <div>
                    <label className='text-black font-semibold'>Nombre</label>
                    <input className='text-black font-semibold' type="text" value={buyer.name} name="name" onChange={handleChange} required></input>
                </div>
                <div>
                    <label className='text-black font-semibold'>Celular</label>
                    <input className='text-black font-semibold' type="number" value={buyer.phone} name="phone" onChange={handleChange} required></input>
                </div>
                <div>
                    <label className='text-black font-semibold'>Email</label>
                    <input className='text-black font-semibold' type="email" value={buyer.email} name="email" onChange={handleChange} required></input>
                </div>
            </form>
            <button type="button" onClick={handleOrder}>Comprar</button>
        </>
    )
}
