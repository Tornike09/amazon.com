import styles from "./EmptyCart.module.css";
import image from "../../images/kettle-desaturated._CB445243794_.svg";
import Image from "next/image";
import Link from "next/link";
export const EmptyCart = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Image src={image} alt="" />
      </div>
      <div className={styles.textCont}>
        <h2>Your Amazon Cart is empty</h2>
        <Link href={"/"}>{"shop today's deals"}</Link>
        <div>
          <button className={styles.signInBtn}>Sign in to your account</button>
          <button className={styles.signUpBtn}>Sign up now</button>
        </div>
      </div>
    </div>
  );
};
