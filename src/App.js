import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { About } from './pages/About';
import { Comment } from './pages/Comment';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { Sidebar } from './components/Sidebar';
function App() {
  return (
    <>
    
    <Sidebar>
    <Routes>
      <Route path="/" element={<Dashboard/> }/>
      <Route path="/dashboard" element={<Dashboard/> }/>
      <Route path="/about" element={<About/>} />
      <Route path="/comment" element={<Comment/>} />
      <Route path="/analytics" element={<About/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/productlist" element={<ProductList/>} />
    </Routes>
    </Sidebar>
    </>
  );
}

export default App;
