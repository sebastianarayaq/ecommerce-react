import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

const Footer = () => {
    return (
        <footer className="bg-white border-t-2">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" className="hover:underline">Tech Shop</a> por Sebastián Araya.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <Nav.Link to="/" className="hover:underline me-4 md:me-6" as={NavLink}>Inicio</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link to="/category/apple" className="hover:underline me-4 md:me-6" as={NavLink}>Apple</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link to="/category/samsung" className="hover:underline me-4 md:me-6" as={NavLink}>Samsung</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link to="/category/xiaomi" className="hover:underline me-4 md:me-6" as={NavLink}>Xiaomi</Nav.Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer