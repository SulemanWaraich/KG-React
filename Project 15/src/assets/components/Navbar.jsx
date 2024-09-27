import React from "react";

function Navbar({cartItemCount}) {
  return (
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <a href="#" class="text-xl font-bold">
            Cart Manager
          </a>
          <div>
            <a href="#" class="text-gray-700">
              Cart {cartItemCount}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
