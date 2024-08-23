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
  discount: string; // Adjusted from boolean to string to represent discount value
  additionalImages: string[];
  colorOptions: string[]; // Array of color options
  warranty: string; // Warranty information
  deliveryTime: string; // Delivery time estimate
  stock: string; // Stock status
  recentlyAdded: boolean; // Indicates if the product was recently added
}

export interface BrandsType {
  name: string;
  image: string;
  url: string;
}
