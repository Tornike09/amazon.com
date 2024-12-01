"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";
import styles from "./CartItems.module.css";
import { IProduct } from "@/app/types/types";

export const CartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const totalPrice =
    cartItems?.reduce(
      (acc: number, item: IProduct) => acc + item.price * item.qty,
      0
    ) || 0;
  const totalItems =
    cartItems?.reduce((acc: number, item: IProduct) => acc + item.qty, 0) || 0;
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartCont}>
        <div className={styles.mainCont}>
          <h2>Shopping Cart</h2>
          <p className={styles.priceParag}>Price</p>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </ul>
          ) : null}
          <div className={styles.totalPrice}>
            <h3>
              Subtotal ({totalItems} items):{" "}
              <span>${totalPrice.toFixed(2)}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.totalCont}>
        <h3>
          Subtotal ({totalItems} items): <span>${totalPrice.toFixed(2)}</span>
        </h3>
        <button>Proceed to checkout</button>
      </div>
    </div>
  );
};
