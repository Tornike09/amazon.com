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
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (result.data as IProduct) {
          setProduct(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return <div>{product && <ProductDetails product={product} />}</div>;
};
export default Post;