import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar colorTitle='black'/>
      <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de Productos'/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer productId='4'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
