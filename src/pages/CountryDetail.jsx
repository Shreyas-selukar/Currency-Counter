import React from "react";
import { useParams, Link } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import { formatNumber } from "../utils/format";

export default function CountryDetail() {
  const { code } = useParams();
  const { byCode } = useCountries();
  const country = byCode.get(code);
  if (!country)
    return <p className="container">Country not found or still loading...</p>;

  return (
    <main className="container">
      <Link to="/" className="inline-block mb-6">
        &larr; Back
      </Link>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={country.flags.svg || country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-full h-80 object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">{country.name.common}</h2>
          <p>
            <strong>Population:</strong> {formatNumber(country.population)}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Capital:</strong>{" "}
            {country.capital ? country.capital.join(", ") : "—"}
          </p>
          <div className="mt-4">
            <h4 className="mb-2">Border Countries:</h4>
            <div className="flex flex-wrap gap-2">
              {country.borders && country.borders.length ? (
                country.borders.map((b) => (
                  <Link
                    key={b}
                    to={`/country/${b}`}
                    className="px-3 py-1 bg-[var(--card)] rounded-md shadow"
                  >
                    {b}
                  </Link>
                ))
              ) : (
                <span>None</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
