// app/products/page.jsx
import Products from "@/components/screen/Products";
import axios from "axios";

export default async function Page() {
  let products = [];

  try {
    const res = await axios.get(
      "https://ctrl.apadanacalendar.com/api/products/all",
      { timeout: 5000 }
    );
    products = res.data?.result?.products || [];
  } catch (error) {
    console.error(" Error fetching products:", error.message);
    products = [];
  }

  return <Products products={products} />;
}
