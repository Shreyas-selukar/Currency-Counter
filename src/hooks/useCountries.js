import { useEffect, useState, useMemo } from "react";
const BASE = "https://restcountries.com/v3.1";
export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(
      `${BASE}/all?fields=name,cca3,capital,region,flags,population,subregion,borders,area,cca2`
    )
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch");
        return r.json();
      })
      .then((data) => {
        if (mounted) setCountries(data);
      })
      .catch((e) => {
        if (mounted) setError(e.message);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => (mounted = false);
  }, []);

  const byCode = useMemo(() => {
    const map = new Map();
    countries.forEach((c) => map.set(c.cca3, c));
    return map;
  }, [countries]);

  return { countries, loading, error, byCode };
}
