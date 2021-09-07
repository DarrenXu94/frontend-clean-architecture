import { useFetchProducts } from "../application/fetchProducts";
import { useEffect } from "react";
import { updateProducts } from "../services/store";

export function useInit() {
  // Call product adapter
  const { fetchProducts } = useFetchProducts();

  const runInit = async () => {
    const products = await fetchProducts();
    updateProducts(products);
  };

  // Update product store

  useEffect(() => {
    runInit();
  }, []);
}
