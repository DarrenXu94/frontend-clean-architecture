import { useProducts } from "../services/productAdapter";
import { FetchDataService } from "./ports";

export function useFetchProducts() {
  const data: FetchDataService = useProducts();

  async function fetchProducts() {
    return data.fetchProducts();
  }

  return { fetchProducts };
}
