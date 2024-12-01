import { IProduct } from "@/app/types/types";
import { Header } from "../Header/Header";
import styles from "./ProductDetails.module.css";
import { Rating } from "../Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQty,
  incrementQty,
} from "@/redux/slices/cartSlice/cartSlice";
import Link from "next/link";

interface IProductProps {
  product: IProduct;
}
export const ProductDetails: React.FC<IProductProps> = ({ product }) => {
  const country = useSelector((state: RootState) => state.country);
  const dispatch = useDispatch();
  const handleCartItem = (product: IProduct) => {
    dispatch(addToCart(product));
    alert("product added to cart successfully");
  };
  return (
    <div>
      <Header />
      <Link className={styles.backToResults} href={"/"}>
        Back to results
      </Link>
      <div className={styles.detailsMainCont}>
        <div
          style={{ backgroundImage: `url(${product.image})` }}
          className={styles.imageCont}
        ></div>
        <div className={styles.detailsCont}>
          <h3>{product.title}</h3>
          <div className={styles.ratingCont}>
            <Rating rating={product.rating} />
            <h6>Sold {product.rating.count} in past month</h6>
          </div>
          <h2>{product.price}$</h2>
          <h5>About This Product</h5>
          <p>{product.description}</p>
        </div>
        <div className={styles.checkOutCont}>
          <div>
            <h2>{product.price}$</h2>
            <p>
              No Import Charges & $16.34 Shipping to {country} Details $16.34
              delivery
            </p>
            <h5>
              <FontAwesomeIcon icon={faLocationDot} />
              Deliver To {country}
            </h5>
            <button onClick={() => handleCartItem(product)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
