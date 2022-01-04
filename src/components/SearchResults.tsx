import React, { useMemo } from "react";
import { ProductItem } from "./ProductItem";

// interfce
interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
  addToWishlist: (id: number) => void;
}

const SearchResults = ({ results, addToWishlist }: SearchResultsProps) => {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);
  return (
    <div>
      <h2>Total R$ {totalPrice}</h2>

      {results.map((product) => {
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
