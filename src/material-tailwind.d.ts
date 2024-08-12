declare module "@material-tailwind/react" {
  export const Carousel: React.FC<{
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
  }>;
}

// productData
export interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: string;
  reviews: number;
  description: string;
  category: string;
  discount: boolean;
  additionalImages: string;
}
