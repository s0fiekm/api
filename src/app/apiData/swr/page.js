"use client";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Page() {
  const { data, error } = useSWR("https://dummyjson.com/product", fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <ul>
      {data.products.map((product) => {
        return <li key={product.id}>{product.category}</li>;
      })}
    </ul>
  );
}

export default Page;
