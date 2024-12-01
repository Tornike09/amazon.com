"use client";
import { useState } from "react";
import styles from "./Country.module.css";
import { countries } from "@/app/countries";
import { useDispatch } from "react-redux";
import { changeCountry } from "@/redux/slices/countrySlice/countrySlice ";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
interface ICountryProps {
  isCountryPageOpen: boolean;
  openCountryModal: () => void;
}
export const Country: React.FC<ICountryProps> = ({
  isCountryPageOpen,
  openCountryModal,
}) => {
  const dispatch = useDispatch();
  const handleCountry = (newCountry: string) => {
    dispatch(changeCountry(newCountry));
  };
  const country = useSelector((state: RootState) => state.country);
  return (
    <div className={styles.wrapper}>
      <div className={styles.blurCont}></div>
      <div className={styles.modalCont}>
        <div>
          <h3>
            <p>Choose Your Location</p>
            <span>
              <FontAwesomeIcon icon={faX} onClick={openCountryModal} />
            </span>
          </h3>
          <div className={styles.selectCont}>
            <div>
              <p>
                Delivery options and delivery speeds may vary for different
                locations
              </p>
              <button>sign in to see your adresses</button>
              <select onChange={(e) => handleCountry(e.target.value)}>
                <option>{country}</option>
                {countries &&
                  countries.map((country) => (
                    <option key={country.id}>{country.name}</option>
                  ))}
              </select>
              <button onClick={openCountryModal}>Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
