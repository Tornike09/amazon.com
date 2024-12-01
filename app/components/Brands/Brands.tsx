"use state";
import { brands } from "@/app/brands";
import styles from "./Brands.module.css";
import { useState } from "react";
export const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState();
  const handleBrand = (id: any) => {
    setSelectedBrand(id);
  };

  return (
    <div className={styles.wrapper}>
      <h5>Brands</h5>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            <input
              type="checkbox"
              onChange={() => handleBrand(brand.id)}
              checked={selectedBrand === brand.id}
            />
            <p>{brand.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
