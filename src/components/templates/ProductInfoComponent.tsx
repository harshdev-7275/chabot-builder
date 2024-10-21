// components/ProductInfoComponent.tsx
import React from "react";

const ProductInfoComponent: React.FC = () => {
  return (
    <div className="bg-yellow-100 dark:bg-yellow-800 p-4 rounded-md">
      <p className="text-yellow-900 dark:text-yellow-100">Check out our latest products:</p>
      <ul className="list-disc ml-4">
        <li>Product 1 - Amazing features</li>
        <li>Product 2 - Top quality</li>
        <li>Product 3 - Best seller</li>
      </ul>
    </div>
  );
};

export default ProductInfoComponent;
