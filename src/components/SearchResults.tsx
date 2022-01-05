import React from "react";
import { List, ListRowRenderer } from "react-virtualized";

// components
import { ProductItem } from "./ProductItem";

// interfce
interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
  totalPrice: number;
  addToWishlist: (id: number) => void;
}

//--------------------------
// Export
//--------------------------
const SearchResults = ({
  results,
  addToWishlist,
  totalPrice,
}: SearchResultsProps) => {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} addToWishlist={addToWishlist} />
      </div>
    );
  };

  return (
    <div>
      <h2>
        Total <strong>R$ {totalPrice}</strong>
      </h2>

      <List
        height={300}
        rowHeight={30}
        width={800}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

export default SearchResults;

//? When to use
//! Avoid complex re-calculations
//! Referential equality (when we pass on that information to a child component)
