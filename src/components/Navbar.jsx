import Cartwidget from './Cartwidget'
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavBar>
            <nav className="bg-white border-gray-200">
                <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
                    <Nav.Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" as={NavLink}>
                        <img src={logo} className="h-8" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Tech Shop</span>
                    </Nav.Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Cartwidget />
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Nav.Link to="/category/apple" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4b4b4b]" as={NavLink}>Apple</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link to="/category/samsung" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4b4b4b]" as={NavLink}>Samsung</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link to="/category/xiaomi" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#4b4b4b]" as={NavLink}>Xiaomi</Nav.Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </NavBar>
    )
}

export default Navbar