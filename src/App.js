import Footer from './component/footer/footer.js';
import Head from './component/header/header.js';
import Main from './component/main/main.js';
import Product from './component/product-card/product.js';
import { useState } from 'react';

const LISTS = [
  {
    id: 1,
    name: "Apple I Phone 15",
    price: "Rs.79,900",
    quantity: '90',
    imgUrl:'https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7369101810984_4194248540.jpg',
  },
  {
    id: 2,
    name: "Apple I Phone 15 Plus",
    price: "Rs.89,900",
    quantity: '30',
    imgUrl: 'https://th.bing.com/th/id/OIP.A13HLDcakruNjhm36TarMAHaJr?w=133&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
  },
  {
    id: 3,
    name: "Apple I Phone 15 Pro",
    price: "Rs.1,44,990",
    quantity: '80',
    imgUrl: 'https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7369101810984_4194248540.jpg',
  },
  {
    id: 4,
    name: "Apple I Phone 15 Pro Max",
    price: "Rs.1,59,990",
    quantity: '70',
    imgUrl: 'https://phonebox.com.mt/wp-content/uploads/2022/10/0021392_iphone-14.jpeg',
  },
  {
    id: 5,
    name: "Apple I Phone 14",
    price: "Rs.69,900",
    quantity: '30',
    imgUrl: 'https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7369101810984_4194248540.jpg',
  },
  {
    id: 6,
    name: "Apple I Phone 14 Plus",
    price: "Rs.79,900",
    quantity: '30',
    imgUrl: 'https://th.bing.com/th/id/OIP.A13HLDcakruNjhm36TarMAHaJr?w=133&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7',
  },
  {
    id: 7,
    name: "Apple I Phone 14 Pro",
    price: "Rs.1,29,900",
    quantity: '30',
    imgUrl: 'https://www.yourmacstore.nl/media/catalog/product/cache/19a47ab23187a681c0d6786a313b33f5/7/3/7369101810984_4194248540.jpg',
  },
  {
    id: 8,
    name: "Apple I Phone 14 Pro Max",
    price: "Rs.1,69,900",
    quantity: '60',
    imgUrl: 'https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*',
  },
];
function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (newItem) => {
    if(cartItems.some(item => item.id === newItem.id)){
    setCartItems(cart => cart.map(item => item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item));
  }else{
    setCartItems((cart) => [...cart, newItem])
  }
};
  return (
    <div className="App">
    <Head cartCount={cartItems.length}  />
    <Main />
    <Product lists={LISTS} cartItems={cartItems} addToCart={addToCart} />
    <Footer />
    </div>
  );
};

export default App;
