import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import { IProduct } from "@/app/types/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "../Product/Product";
import { Brands } from "../Brands/Brands";

export const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const category = useSelector((state: RootState) => state.filter);
  useEffect(() => {
    const response = axios
      .get(`https://fakestoreapi.com/products/${category}`)
      .then((result) => {
        setProducts(result.data);
      });
  }, [category]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.navBar}>
        <Brands />
      </div>
      <div className={styles.productsCont}>
        <ul>
          {products.map((product: IProduct) => (
            <Product key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};
