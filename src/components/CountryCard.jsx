import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/format";
export default function CountryCard({ country }) {
  const name = country.name.common;
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="block bg-[var(--card)] rounded-md overflow-hidden shadow-md hover:scale-[1.01] transition-transform"
    >
      <div className="h-40 w-full overflow-hidden">
        <img
          src={country.flags.svg || country.flags.png}
          alt={`${name} flag`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <p className="text-sm">
          <strong>Population:</strong> {formatNumber(country.population)}
        </p>
        <p className="text-sm">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="text-sm">
          <strong>Capital:</strong>{" "}
          {country.capital ? country.capital.join(", ") : "—"}
        </p>
      </div>
    </Link>
  );
}
