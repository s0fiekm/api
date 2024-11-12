import Card from "./Card";

export default async function Page() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <ul>
      {data.products.map((product) => (
        <Card title={product.title} price={product.price}  />
      ))}
    </ul>
  );
}
