"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import amazonIcon from "../../images/Amazon_logo.svg.webp";
import {
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Categories } from "../Categories/Categories";
import { menuArray } from "@/app";
import Link from "next/link";
import { useState } from "react";
import { Country } from "../Country/Country";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IProduct } from "@/app/types/types";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const country = useSelector((state: RootState) => state.country);
  const cartLength = useSelector((state: RootState) => state.cart);
  const openCountryModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const totalItems = cartLength?.reduce(
    (acc: number, item: IProduct) => acc + item.qty,
    0 || 0
  );
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerCont}>
        <div>
          <Link href={"/"}>
            <Image src={amazonIcon} alt="" className={styles.amazonIcon} />
          </Link>
        </div>
        <div className={styles.locationCont} onClick={openCountryModal}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.pin} />
          <h4>
            <span>Deliver to</span>
            <p className={styles.country}>{country}</p>
          </h4>
        </div>
        <div className={styles.queryCont}>
          <Categories />
          <input type="text" placeholder="Search Amazon" />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={styles.cartCont}>
          <Link href={"/cart"}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>{totalItems}</span>
          </Link>
        </div>
      </div>
      <div className={styles.headerMenu}>
        <ul>
          {menuArray.map((menuItem, index) => (
            <li key={index}>{menuItem.title}</li>
          ))}
        </ul>
      </div>
      {isModalOpen ? (
        <Country
          isCountryPageOpen={isModalOpen}
          openCountryModal={openCountryModal}
        />
      ) : null}
    </div>
  );
};
