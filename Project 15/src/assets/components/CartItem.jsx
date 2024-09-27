import React from "react";

function CartItem({remove, cart}) {
  return (
    <div class="flex justify-between items-center">
      <div>
        <h3 class="text-lg font-semibold">{cart.name}</h3>
        <p class="text-gray-600">Quantity: {cart.quantity}</p>
        <p class="text-gray-600">{cart.price * cart.quantity}</p>
      </div>
      <button class="text-red-500" onClick={()=> remove(cart.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
