

import './App.css'
import ExpenseItem from "./components/ExpenseItem";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import { useState } from 'react';

const expense = [
  { title: 'Iphone', amount: '3000$', url: 'https://img.ksp.co.il/item/226976/b_1.jpg?v=5' },
  { title: 'Galaxy', amount: '1000$', url: 'https://ksp.co.il/shop/items/512/185108.jpg?v=666666' },
  { title: 'Pixel', amount: '2000$', url: 'https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/193575022666.jpg' },
  { title: 'Huawei', amount: '1400$', url: 'https://shop-cdn.huawei.com/my/pms/product/6901443378746/428_428_CBDBF02AEEA96C7CC22788965BD60E200D86A508892D3339mp.png' },

];
function App() {

  const [cart, setCart] = useState([]);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={
          <ExpenseList addToCart={addToCart} />
        } />
        <Route path="/Cart" element=
          {<Cart items={cart}>
          </Cart>} />
      </Routes>
    </Router>

  );

  function addToCart(item) {
    setCart([...cart, item]);
  }

}


export default App;


function ExpenseList(props) {
  const { addToCart } = { ...props }
  let itemList = expense.map((item, index) => {
    return <li className="listitem" key={index}><ExpenseItem
      title={expense[index].title}
      amount={expense[index].amount}
      url={expense[index].url}
      addToCart={addToCart}
    ></ExpenseItem></li>
  })

  return (
    <div className="main">
      <div className="header_shop">
        <h2>My shop</h2>
      </div>
      <ul className="list_items">
        {itemList}
      </ul>
    </div >
  );
}


