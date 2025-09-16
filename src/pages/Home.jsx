import React, { useMemo, useState } from "react";
import CountryCard from "../components/CountryCard";
import useCountries from "../hooks/useCountries";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function Home() {
  const { countries, loading, error } = useCountries();
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("");

  const filtered = useMemo(() => {
    let out = countries;
    if (q)
      out = out.filter((c) =>
        c.name.common.toLowerCase().includes(q.toLowerCase())
      );
    if (region) out = out.filter((c) => c.region === region);
    return out;
  }, [countries, q, region]);

  return (
    <main className="container">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search for a country..."
          className="search-input p-3 rounded-md w-full md:w-1/2"
        />
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="p-3 rounded-md w-full md:w-1/4"
        >
          <option value="">Filter by Region</option>
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {loading && <p>Loading countries...</p>}
      {error && <p>Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>
    </main>
  );
}
