import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from './components/Footer'
import { NotFound } from './components/NotFound'
import { Cart } from './components/Cart'
import { CartProvider } from './contexts/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/category/:id" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
