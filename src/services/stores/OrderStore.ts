import { Cart } from "../../domain/cart";
import { Order } from "../../domain/order";
import { Product } from "../../domain/product";
import { cookies } from "../fakeData";
import { state } from "../store";

type StateType = {
  cart: Cart;
  cookies: Product[];
  orders: Order[];
};

const OrderState: StateType = {
  cart: { products: [] },
  cookies,
  orders: [],
};

export const updateCart = (cart: Cart) => {
  state.cart = cart;
};

export const updateOrders = (orders: Order[]) => {
  state.orders = orders;
};

export const emptyCart = () => {
  state.cart = { products: [] };
};

export default OrderState;
