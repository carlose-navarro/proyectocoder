import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de Productos'/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
