import { useQuery } from "react-query";
import { FetchDataService } from "../application/ports";
import { Product } from "../domain/product";
import { fakeApi } from "./api";
import { cookies } from "./fakeData";

export const fetchCookies = () => {
  return fakeApi(cookies);
};

export function useProducts(): FetchDataService {
  const { data } = useQuery<Product[], Error>("fetchProducts", fetchCookies);
  return {
    fetchProducts: () => {
      return data || [];
    },
  };
}
