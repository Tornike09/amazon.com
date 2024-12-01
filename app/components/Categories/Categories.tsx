"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Categories.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { changeCategory } from "@/redux/slices/filterSlice/filterSlice";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const response = axios
      .get("https://fakestoreapi.com/products/categories")
      .then((result) => {
        setCategories(result.data);
      });
  }, []);
  const category = useSelector((state: RootState) => state.filter);
  const handleCategory = (newCategory: string) => {
    dispatch(changeCategory(newCategory));
  };
  console.log(category);

  return (
    <select
      className={styles.select}
      onChange={(e) => handleCategory(e.target.value)}
      value={category}
    >
      <option value={"/"}>all</option>
      {categories &&
        categories.map((categoryItem, index) => (
          <option value={`category/${categoryItem}`} key={index}>
            {categoryItem}
          </option>
        ))}
    </select>
  );
};
