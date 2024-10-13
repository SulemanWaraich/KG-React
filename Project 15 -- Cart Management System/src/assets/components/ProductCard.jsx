import React from "react";

function ProductCard({add, product}) {
  return (
    <div class="bg-white p-4 shadow-md rounded-lg">
      <img
        src={product.image}
        alt="Product Image"
        class="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 class="text-lg font-semibold">{product.name}</h3>
      <p class="text-gray-600">{product.price}</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded mt-4 w-full" onClick={()=> add(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
