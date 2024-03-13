import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Banner gretings={"¡Bienvenidos a Tech Shop!"} />
      <ItemListContainer />
      <Footer />
    </>
  )
}

export default App
