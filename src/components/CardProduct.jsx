const Cardproduct = () => {
    return (
        <div className="sm:w-1/2 mx-4 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
                <img className="p-8 rounded-t-lg" src="https://home.ripley.cl/store/Attachment/WOP/D172/2000380458321/2000380458321_2.jpg" alt="product image" />
            </a>
            <div className="px-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center mb-3">Sony Playstation 5 Digital</h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">$599</span>
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Agregar al carro</a>
                </div>
            </div>
        </div>

    )
}

export default Cardproduct