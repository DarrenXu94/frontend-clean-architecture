import { proxy } from "valtio";
import OrderState, {
  emptyCart,
  updateCart,
  updateOrders,
  updateProducts,
} from "./stores/OrderStore";
import UserState, { updateUser } from "./stores/UserStore";

export const state = proxy({
  ...OrderState,
  ...UserState,
});

export { emptyCart, updateCart, updateOrders, updateUser, updateProducts };
