export interface ProductCardRatingProps {
  rate?: number;
  count?: number;
}

export interface ProductCardProps {
  id?: number;
  onSale?: boolean;
  discount?: number;
  title?: string;
  image?: string;
  price?: number;
  category?: string | undefined;
  description?: string | undefined;
  className?: string;
  rating?: ProductCardRatingProps;
  isAddedToCart?: boolean;
  onAddToCart?: (id?: number, e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
