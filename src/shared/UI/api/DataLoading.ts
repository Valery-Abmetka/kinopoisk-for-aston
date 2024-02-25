export async function DataLoading() {
  const data = await fetch(import.meta.env.VITE_API_URL_TOP_POPULAR, {
    method: "GET",
    headers: {
      "X-API-KEY": import.meta.env.VITE_API_KEY,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return data;
}
