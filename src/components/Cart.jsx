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
    const { clear, products, removeProduct } = useContext(CartContext);

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setBuyer((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const total = products.reduce((acu, act) => acu + act.price * act.quantity, 0);

    const handleOrder = (event) => {
        event.preventDefault();
        if (products.length === 0) {
            alert('El carrito está vacío. Por favor añade productos antes de comprar.');
            return;
        }

        const order = {
            buyer,
            products,
            total,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden: " + id + " ha sido completada!\n Total a pagar: $" + total);
                clear(); // Limpia el carrito después de enviar la orden
            }
        });
    };

    return (
        <>
            <div className="flex justify-between flex-wrap">
                <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto grow">
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <tr>
                                <th className="py-3 px-6 text-left">Producto</th>
                                <th className="py-3 px-6 text-center">Cantidad</th>
                                <th className="py-3 px-6 text-right">Precio</th>
                                <th className="py-3 px-6 text-center">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{product.title}</td>
                                    <td className="py-3 px-6 text-center">{product.quantity}</td>
                                    <td className="py-3 px-6 text-right">{product.price}</td>
                                    <td className="py-3 px-6 text-center"><button className="text-white bg-[#1a1a1a] hover:bg-[#4b4b4b] rounded h-10 w-full" onClick={() => removeProduct(product.id)}>Quitar</button></td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className="text-gray-600 text-sm font-light">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <th className="py-3 px-6 text-left whitespace-nowrap" scope="row" colSpan="2">Total</th>
                                <td className="py-3 px-6 text-right">{total}</td>
                            </tr>
                        </tfoot>
                    </table>
                    <button type="button" onClick={clear} className="px-6 py-2 mt-3 bg-red-500 text-white font-bold uppercase rounded shadow hover:bg-red-600 focus:outline-none">Vaciar carro</button>
                </div>
                <div className="max-w-4xl mx-auto px-4 py-5 bg-white shadow-md rounded-lg grow">
                    <h2 className='text-lg font-semibold text-gray-900'>Datos</h2>
                    <form onSubmit={handleOrder} autoComplete="off" >
                        <div className="mb-4">
                            <label className='block text-gray-700 text-sm font-bold mb-2'>Nombre</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100' type="text" value={buyer.name} name="name" onChange={handleChange} required />
                        </div>
                        <div className="mb-4">
                            <label className='block text-gray-700 text-sm font-bold mb-2'>Celular</label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100'
                                type="tel"
                                value={buyer.phone}
                                name="phone"
                                onChange={handleChange}
                                required
                                title="Ingrese un número de teléfono válido (exactamente 8 dígitos)."
                                pattern="\d{8}"
                                maxLength="8"
                                minLength="8"
                            />
                        </div>
                        <div className="mb-4">
                            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100' type="email" value={buyer.email} name="email" onChange={handleChange} required />
                        </div>
                        <button type="submit" className="py-2 bg-green-500 text-white font-bold uppercase rounded shadow hover:bg-green-600 focus:outline-none w-full">
                            Comprar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
