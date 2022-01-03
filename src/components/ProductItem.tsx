import React from "react";

// interface
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div style={{ color: "white" }}>
      {product.title} - <strong>R$ {product.price}</strong>
    </div>
  );
};

export default ProductItem;
