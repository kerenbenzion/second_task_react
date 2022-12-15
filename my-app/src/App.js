

import './App.css'
import ExpenseItem from "./components/ExpenseItem";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
// const expense = [
//   { title: 'Iphone', amount: 3000, url: 'https://img.ksp.co.il/item/226976/b_1.jpg?v=5' },
//   { title: 'Galaxy', amount: 1000, url: 'https://ksp.co.il/shop/items/512/185108.jpg?v=666666' },
//   { title: 'Pixel', amount: 2000, url: 'https://superpharmstorage.blob.core.windows.net/hybris/products/desktop/medium/193575022666.jpg' },
//   { title: 'Huawei', amount: 1400, url: 'https://shop-cdn.huawei.com/my/pms/product/6901443378746/428_428_CBDBF02AEEA96C7CC22788965BD60E200D86A508892D3339mp.png' },

// ];
function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Router>
        <ul id="Nav_menu">
          <li className='navlink'>
            <NavLink className="Nav_link" to="/">Home</NavLink>
          </li>
          <li className='navlink'>
            <NavLink className="Nav_link" to="/cart">Cart</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={
            <ExpenseList addToCart={addToCart} />
          } />
          <Route path="/Cart" element=
            {<Cart items={cart} saveOrder={saveOrder} removeFromCart={removeFromCart} total={total}>
            </Cart>} />
        </Routes>
      </Router>
    </div>
  );

  function addToCart(item) {
    setTotal(total + item.amount);
    setCart([...cart, item]);
  }
  function saveOrder(total, itemlist) {
    let databody = {
      total: total,
      products: itemlist
    }
    console.log('*************')
    console.log(databody)
    console.log('*************')
    fetch('http://localhost:3001/order/create_order', {
      method: 'POST',
      body: JSON.stringify(databody),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(alert('Saved order!'))

  }
  function removeFromCart(item) {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.title !== item.title);
    setTotal(total - item.amount);
    setCart(hardCopy);
  }

}


export default App;


function ExpenseList(props) {
  const [expense, setExpense] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/products/get_products`);
      const newData = await response.json();
      setExpense(newData)
    };

    fetchData();

  });
  console.log(expense)
  const { addToCart, removeFromCart } = { ...props }

  let itemList = expense.map((item, index) => {
    return <li className="listitem" key={index}><ExpenseItem
      title={expense[index].name}
      amount={expense[index].price}
      url={expense[index].img}
      addToCart={addToCart}
      description={expense[index].description}
      removeFromCart={removeFromCart}
    ></ExpenseItem></li>
  })

  return (
    <div className="main">
      <div className="header_shop">
        <div id='header'>My shop</div>
      </div>
      <ul className="list_items">
        {itemList}
      </ul>
    </div >
  );
}


