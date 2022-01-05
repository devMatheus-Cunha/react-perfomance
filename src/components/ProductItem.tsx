import React, { memo, useState, lazy, Suspense } from "react";

//  components
const AddProductToWishlist = lazy(() => {
  return import("./AddProductToWishlist");
})

// interface
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  addToWishlist: (id: number) => void;
}

//--------------------------
// Export
//--------------------------
const ProductItemComponent = ({ product, addToWishlist }: ProductItemProps) => {
  const [isAddingtoWhishlist, setIsAddingtoWhishlist] = useState(false);

  return (
    <div style={{ color: "white" }}>
      {product.title} - <strong>{product.price}</strong>{" "}
      <button type="button" onClick={() => setIsAddingtoWhishlist(true)}>
        Adicionar aos{" "}
      </button>
      {isAddingtoWhishlist && (
        <Suspense fallback={ <span>Carregando...</span> } >
        <AddProductToWishlist
          onAddToWishlist={() => addToWishlist(product.id)}
          onRequesClose={() => setIsAddingtoWhishlist(false)}
        />
        </Suspense>
      )}
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

//? When to use memo
//! Pure Functions Components
//! Renders too often
//! Re-renders with same props
//! Medium to big sizes
