export async function getProductList() {
  const token = "Bearer YOUR_ACCESS_TOKEN";
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(
    "https://api.kalpav.com/api/v1/product/category/retail",
    {
      method: "GET",
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product list");
  }

  const data = await response.json();
  return data.products;
}
