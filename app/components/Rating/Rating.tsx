import { IProduct, IRatingProps } from "@/app/types/types";
import Image from "next/image";
import fiveStars from "../../images/360_F_514954494_iL8FDExgkI3R7A3QNZaXvNYWYog0b3KK.jpg";
import fourStars from "../../images/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg";
import threeStars from "../../images/three-star-rating-icon-isolated-260nw-1711884229.webp";
import twoStars from "../../images/two-stars-icon-vector-260nw-1316819486.webp";

export const Rating: React.FC<IRatingProps> = ({ rating }) => {
  return (
    <div>
      {rating.rate > 4.5 && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image width={150} src={fiveStars} alt="" />
          <span>{rating.rate}</span>
        </div>
      )}
      {rating.rate > 3.5 && rating.rate <= 4.5 && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image width={150} src={fourStars} alt="" />
          <span>{rating.rate}</span>
        </div>
      )}
      {rating.rate > 2.5 && rating.rate <= 3.5 && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image width={150} src={threeStars} alt="" />
          <span>{rating.rate}</span>
        </div>
      )}
      {rating.rate > 1.5 && rating.rate <= 2.5 && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image width={150} src={twoStars} alt="" />
          <span>{rating.rate}</span>
        </div>
      )}
    </div>
  );
};
