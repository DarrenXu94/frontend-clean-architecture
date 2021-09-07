import { useEffect } from "react";
import { useFetchProducts } from "../application/fetchProducts";
import { updateProducts } from "../services/store";

export function useInit() {
  // Call product adapter
  const { fetchProducts } = useFetchProducts();

  const { data } = fetchProducts();

  // const runInit = async () => {
  //   const products = await fetchProducts();
  //   updateProducts(products);
  // };

  // Update product store

  useEffect(() => {
    if (data) {
      updateProducts(data);
    }
  }, [data]);
}
