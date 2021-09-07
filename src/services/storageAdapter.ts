import { useSnapshot } from "valtio";
import {
  CartStorageService,
  OrdersStorageService,
  UserStorageService,
} from "../application/ports";
import {
  emptyCart,
  state,
  updateCart,
  updateOrders,
  updateUser,
} from "./store";
// import { useStore } from "./store";

// It's also possible to split the whole storage into atomic stores.
// Inside corresponding hooks we can apply memoization, optimizations, selectors...
// Well, you get the idea.

export function useUserStorage(): UserStorageService {
  const { user } = useSnapshot(state);

  return {
    user,
    updateUser,
  };
}

export function useCartStorage(): CartStorageService {
  const { cart } = useSnapshot(state);

  return {
    cart,
    updateCart,
    emptyCart,
  };
}

export function useOrdersStorage(): OrdersStorageService {
  const { orders } = useSnapshot(state);

  return {
    orders,
    updateOrders,
  };
}
