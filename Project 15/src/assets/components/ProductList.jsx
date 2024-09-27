import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ add, products }) {
  return (
    <div class="lg:col-span-2">
      <h2 class="text-2xl font-bold mb-4">Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard add={add} product={item} key={item.id}></ProductCard>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
