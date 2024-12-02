"use client";
import { IProduct } from "@/app/types/types";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice/cartSlice";

interface IProductProps {
  cartItem: IProduct;
}

export const CartItem: React.FC<IProductProps> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (cartItemId: any) => {
    dispatch(removeFromCart(cartItemId));
  };

  const handleDecrementQty = (cartItemId: any) => {
    dispatch(decrementQty(cartItemId));
  };

  const handleIncrementQty = (cartItemId: any) => {
    dispatch(incrementQty(cartItemId));
  };
  
  return (
    <li className={styles.cartItemCont}>
      <div className={styles.cartItem}>
        <div
          className={styles.imageCont}
          style={{ backgroundImage: `url(${cartItem.image})` }}
        ></div>
        <div className={styles.descriptionCont}>
          <div>
            <h3>{cartItem.title}</h3>
            <h4>{cartItem.description}</h4>
            <span className={styles.seller}>#1 Best Seller</span>
            <h5>In Stock</h5>
          </div>
          <div className={styles.operationsCont}>
            <p>QTY:</p>
            <div className={styles.qtyCont}>
              <FontAwesomeIcon
                onClick={() => handleDecrementQty(cartItem.id)}
                icon={faMinus}
              />
              <span>{cartItem.qty}</span>
              <FontAwesomeIcon
                onClick={() => handleIncrementQty(cartItem.id)}
                icon={faPlus}
              />
            </div>
            <p
              className={styles.deleteProd}
              onClick={() => handleDeleteItem(cartItem.id)}
            >
              Delete Product
            </p>
          </div>
        </div>
        <div className={styles.priceCont}>
          <p className={styles.blackFriday}>
            <span className={styles.off}>28% off</span>
            <span className={styles.friday}>Black Friday Deal</span>
          </p>
          <h4>${cartItem.price}</h4>
          <p className={styles.lastPrice}>
            Last Price: <span>${(cartItem.price * 1.28).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </li>
  );
};
