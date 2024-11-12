import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();

  return (
    <ul>
      {data.products.map((product) => (
        <div key={product.id}>
          <Image
            src={product.thumbnail}
            width={250}
            height={250}
            alt={product.category}
          />
          <Link href={`/detaljer/${product.id}`}>{product.category}</Link>
        </div>
      ))}
    </ul>
  );
}
