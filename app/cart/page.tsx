"use client";
import { useSelector } from "react-redux";
import { CartItems } from "../components/CartItems/CartItems";
import { Header } from "../components/Header/Header";
import styles from "./page.module.css";
import { RootState } from "@/redux/store";
import { EmptyCart } from "../components/EmptyCart/EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  return (
    <div>
      <Header />
      <div
        className={styles.cartWrapper}
        style={{ height: `${cartItems.length >= 3 ? "auto" : "84vh"}` }}
      >
        {cartItems.length > 0 ? <CartItems /> : <EmptyCart />}
      </div>
    </div>
  );
};
export default Cart;
