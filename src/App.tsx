import React, { FormEvent, useCallback, useState } from "react";

// components
import SearchResults from "./components/SearchResults";

// types
type ApiData = {
  totalPrice: number;
  data: {
    id: number;
    price: number;
    title: string;
  }[];
};

//--------------------------
// Export
//--------------------------
function App() {
  // hooks
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ApiData>({
    totalPrice: 0,
    data: []
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);

    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    const formatedProducts = data.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: formatter.format(product.price)
      }
    })

    const totalPrice = data?.reduce((total: any, product: any) => {
      return total + product.price;
    }, 0);

    setResults({
      totalPrice,
      data: formatedProducts,
    });
  }

  const addToWishlist = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults
        addToWishlist={addToWishlist}
        results={results.data}
        totalPrice={results.totalPrice}
      />
    </div>
  );
}

export default App;

//? When to use useCallback
//! Solving referential equality problems
