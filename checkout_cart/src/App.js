import React from 'react';
import Cart from './Cart';
import logo from './logo.svg';
import './App.css';
import "./styles.css";


const items = [
  { id:1, name: 'Chicken Chilli Salami Pouch(200g)', price: 165,qty:2},
  {id:2 , name: 'Fresh Chicken Drumstick(500g)', price:265, qty:3},
  {id:3, name: 'Fresh Farm Brown Eggs(6 unit)', price:67, qty:1},
];

function App() {
  return (
   <div>
     <Cart initialItems={items}/>
   </div>
  );
}

export default App;
