import { useQuery } from "react-query";
import { FetchDataService } from "../application/ports";
import { Product } from "../domain/product";
import { fakeApi } from "./api";
import { cookies } from "./fakeData";

export function useProducts(): FetchDataService {
  return {
    FetchProducts: () => {
      return useQuery<Product[], Error>(["fetchProducts"], () =>
        fakeApi(cookies)
      );
    },
  };
}
