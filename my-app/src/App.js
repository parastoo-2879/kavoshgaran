import { Routes ,Route} from 'react-router';
import './App.css';
import Login from "./components/login/Login"
import Shop from './components/shop/Shop';
function App() {
  return (
  <main>
    <Routes>
    <Route index element={<Login/>}  />
    <Route path="shop" element={<Shop/>} />
    </Routes>
  </main>
  );
}

export default App;
