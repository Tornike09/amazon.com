/* eslint-disable react/jsx-key */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Todo.module.css";

export const Todo = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(20);
  const [sort, setSort] = useState("asc");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/${category}?sort=${sort}&limit=${limit}`
      )
      .then((result) => {
        setProducts(result.data);
      });
  }, [sort, limit, category]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((result2) => {
        setCategories(result2.data);
      });
  }, []);

  const getLimit = (e) => {
    setLimit(e.target.value);
  };
  const getSort = (e) => {
    setSort(e.target.value);
  };
  const getCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.cont}>
        <div className={styles.filterCont}>
          <div>
            <p>limit</p>
            <input type="number" value={limit} onChange={getLimit} />
          </div>
          <div>
            <p>sort</p>
            <select onChange={getSort} value={sort}>
              <option>asc</option>
              <option>desc</option>
            </select>
          </div>
          <div>
            <p>category</p>
            <select onChange={getCategory}>
              <option value={"/"}>all categories</option>
              {categories.map((category) => (
                <option value={`category/${category}`}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        <ul className={styles.productsUl}>
          {products.map((product) => (
            <li>
              <img src={product.image} />
              <div>
                <p>{product.title}</p>
                <h3>{product.price} $</h3>
                <p>{product.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
