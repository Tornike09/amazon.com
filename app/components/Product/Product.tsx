import { IProduct } from "@/app/types/types";
import { Rating } from "../Rating/Rating";
import styles from "./Product.module.css";
import Link from "next/link";
interface IProductProps {
  product: IProduct;
}
export const Product: React.FC<IProductProps> = ({ product }) => {
  return (
    <li className={styles.product}>
      <Link href={`products/${product.id}`}>
        <div
          style={{ backgroundImage: `url(${product.image})` }}
          className={styles.imageCont}
        ></div>
        <p>{product.title}</p>
        <Rating rating={product.rating} />
        <div className={styles.priceCont}>
          <h2>{product.price}$</h2>
          {Math.random() * 10 > 5 ? (
            <h4>
              <span className={styles.saving}>Save 20% </span>
              <span>With Coupon</span>
            </h4>
          ) : (
            <h4>More Buying Choices</h4>
          )}
        </div>
      </Link>
    </li>
  );
};
