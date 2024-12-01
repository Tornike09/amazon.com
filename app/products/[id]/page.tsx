"use client";
import { ProductDetails } from "@/app/components/ProductDetails/ProductDetails";
import { IProduct } from "@/app/types/types";
import axios from "axios";
import { useEffect, useState } from "react";
interface IProductDetailsProps {
  params: {
    id: number;
  };
}
const Post: React.FC<IProductDetailsProps> = ({ params }) => {
  const [product, setProduct] = useState<IProduct>();
  const { id } = params;
  useEffect(() => {
    const res = axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [id]);
  return <div>{product && <ProductDetails product={product} />}</div>;
};
export default Post;