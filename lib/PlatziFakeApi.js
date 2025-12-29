export async function getLatestProduct() {
  const LatestProducts =
    "https://api.escuelajs.co/api/v1/products";

  const rawData = await fetch(LatestProducts);
  const items = await rawData.json();


  return items.map((item) => {
    const { description, slug, images, title, id, price} =
      item;
    const imageUrl = images[0];

    return {
      description,
      slug,
      title,
      imageUrl,
      id,
      price,
    };
  });
}
