export interface ConversionResponseType {
  data?: { [key: string]: number };
}

export interface ProductResponseRatingType {
  rate?: number;
  count?: number;
}

export interface ProductResponseType {
  id?: number;
  title?: string;
  price?: number;
  category?: string;
  description?: string;
  image?: string;
  rating?: ProductResponseRatingType;
}
