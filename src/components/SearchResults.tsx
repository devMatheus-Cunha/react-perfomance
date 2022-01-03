import React from "react";
import ProductItem from "./ProductItem";

// interfce
interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
  }[];
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <div>
      {results.map((product) => {
        return <ProductItem product={product} />;
      })}
    </div>
  );
};

export default SearchResults;
