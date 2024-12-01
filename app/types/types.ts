export interface IProduct {
  rating: { 
    count: number; 
    rate: number 
  };
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price: number;
  title?: string;
  qty: number
}
export interface IRatingProps {
  rating: {
    count: number;
    rate: number;
  };
}
