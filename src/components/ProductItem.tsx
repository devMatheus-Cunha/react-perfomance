import React, { memo } from "react";

// interface
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  addToWishlist: (id: number) => void
}

//--------------------------
// Export
//--------------------------
const ProductItemComponent = ({ product, addToWishlist }: ProductItemProps) => {
  return (
    <div style={{ color: "white" }}>
      {product.title} - <strong>{product.price}</strong>
      {" "}
      <button type="button" onClick={() => addToWishlist(product.id)}>Meu id</button>
    </div>
  );
};

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});

//? When to use memo
//! Pure Functions Components
//! Renders too often
//! Re-renders with same props
//! Medium to big sizes
