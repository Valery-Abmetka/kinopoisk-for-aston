import { LoaderFunctionArgs } from "react-router-dom";

export async function CardLoader({ params }: LoaderFunctionArgs) {
  const movie = await fetch(
    `${import.meta.env.VITE_API_FILMS_ID}/${params.id}`,
    {
      method: "GET",
      headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json",
      },
    },
  ).then((res) => res.json());

  return movie;
}
