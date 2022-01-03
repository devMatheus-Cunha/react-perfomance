import React, { FormEvent, useState } from "react";
import SearchResults from "../components/SearchResults";

type ApiData = {
  id: number;
  price: number;
  title: string;
};

const Fundamentals: React.FC = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ApiData[]>([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);

    const data = await response.json();

    setResults(data);
  }
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

      <SearchResults results={results} />
    </div>
  );
};

export default Fundamentals;
