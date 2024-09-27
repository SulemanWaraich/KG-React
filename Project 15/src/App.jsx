import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import ProductList from "./assets/components/ProductList";
import Cart from "./assets/components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 40, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 60, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 80, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: 120, image: 'https://via.placeholder.com/150' },
  ]);

  const addToCart = (product) => {
      const existingItem = cart.find((item) => item.id === product.id);
      if(existingItem){
        setCart(
          cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1}: item)
        )
      }
      else{
        setCart([...cart, {...product, quantity: 1}]);
      }
  }

  const removeFromCart = (productId) => {
      setCart(cart.filter((item) => item.id !== productId));
  }

  return (
    <>
      <Navbar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)}></Navbar>
      <div class="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProductList add={addToCart} products={products}></ProductList>
        <Cart cart={cart} remove={removeFromCart}></Cart>
      </div>
    </>
  );
}

export default App;
