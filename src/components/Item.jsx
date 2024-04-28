import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';

export const Item = ({ product }) => {
    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }} className='border p-2 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' onClick={() => navigate(`/item/${product.id}`)}>
            <Card.Img variant="top" className='mb-3' src={product.imageURL} />
            <Card.Body>
                <Card.Title className="text-xl font-bold tracking-tight text-gray-900 text-center mb-3">{product.title}</Card.Title>
                <Card.Text className="text-md font-normal text-center text-gray-900 mb-3">
                    {product.description}
                </Card.Text>
                <Link to={`/item/${product.id}`}><Button variant="primary" className="text-white bg-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ver más</Button></Link>
            </Card.Body>
        </Card>
    );
}