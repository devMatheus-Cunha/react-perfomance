import React, { memo } from "react";

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

export default memo(ProductItem, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});

//? When to use memo
//! Pure Functions Components
//! Renders too often
//! Re-renders with same props
//! Medium to big sizes
