import { FetchDataService } from "../application/ports";
import { fakeApi } from "./api";
import { cookies } from "./fakeData";

export function useProducts(): FetchDataService {
  return {
    fetchProducts: () => {
      return fakeApi(cookies);
    },
  };
}
