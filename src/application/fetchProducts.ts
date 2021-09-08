import { useProducts } from "../services/productAdapter";
import { FetchDataService } from "./ports";

export function useFetchProducts() {
  const products: FetchDataService = useProducts();

  function fetchProducts() {
    return products.fetchProducts();
  }

  return { fetchProducts };
}
