import React from "react";
import CartItem from "./CartItem";

function Cart({ remove, cart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div class="bg-white p-4 shadow-md rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>your cart is empty.</p>
      ) : (
        <div class="space-y-4">
          {cart.map((item) => (
            <CartItem cart={item} remove={remove} key={item.id}></CartItem>
          ))}
        </div>
      )}

      <div class="mt-6 border-t pt-4">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-semibold">Total</h3>
          <p class="text-lg">{totalPrice}</p>
        </div>
        <button class="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mt-4 w-full">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
