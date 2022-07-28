import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import {Route , Routes} from 'react-router-dom'
import Comments from './components/Comments';


function App() {
  return (
    <div>
       <Navbar/>
       <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/comment" element={<Comments />} />
       
        
       </Routes>
      
</div>
  );
}

export default App;
