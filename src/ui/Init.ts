import { useEffect } from "react";
import { useFetchProducts } from "../application/fetchProducts";
import { updateProducts } from "../services/store";

export function useInit() {
  // Call product adapter
  const { fetchProducts } = useFetchProducts();

  // Update product store

  useEffect(() => {
    if (fetchProducts) {
      updateProducts(fetchProducts());
    }
  }, [fetchProducts]);
}
