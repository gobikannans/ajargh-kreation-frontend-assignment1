import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Product from './components/Product';
import Payment from './components/Payment';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/payment" element={<Payment/>} />
    </Routes>

    </>
  );
}

export default App;
