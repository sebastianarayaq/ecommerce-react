const Footer = () => {
    return (
        <footer className="bg-white border-t-2">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" className="hover:underline">Tech Shop</a> por Sebastián Araya.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Inicio</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Consolas</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Notebooks</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Smartphones</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Tablets</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer