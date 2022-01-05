import React from "react";

// components
import { ProductItem } from "./ProductItem";

// interfce
interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
  }[]
  totalPrice: number
  addToWishlist: (id: number) => void;
}

//--------------------------
// Export
//--------------------------
const SearchResults = ({ results, addToWishlist, totalPrice}: SearchResultsProps) => {
  return (
    <div>
      <h2>Total <strong>R$ {totalPrice}</strong></h2>

      {results?.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            addToWishlist={addToWishlist}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;

//? When to use
//! Avoid complex re-calculations
//! Referential equality (when we pass on that information to a child component)
