async function Page({ params }) {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let data = await response.json();
  return <div>{data.title}</div>;
}

export default Page;
