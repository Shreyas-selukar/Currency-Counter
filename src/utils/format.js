export function formatNumber(n) {
  if (n === undefined || n === null) return "—";
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
