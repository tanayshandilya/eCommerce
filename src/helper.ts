import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import { CURRENCY_LIST, CURRENCY_LIST_TYPES } from './constants';

export const calculateDiscount = (price: number, discount: number): number => {
  const discountAmount = (discount / 100) * price;
  const discountedPrice = price - discountAmount;
  return discountedPrice;
};

export const formatPrice = (price: number, country: keyof CURRENCY_LIST_TYPES = 'IN'): string => {
  return `${CURRENCY_LIST?.[country]?.symbol} ${price?.toFixed(2)}`;
};

export const getConversionRate = async (currency: string = 'INR') => {
  const currencyapi = new Freecurrencyapi(import.meta.env.VITE_RATE_API_KEY);
  const data = await currencyapi.latest({
    base_currency: 'USD',
    currencies: currency,
  });
  return data;
};

export const covertPrice = (price: number, rate: number): number => {
  return price * rate;
};

interface ApiCallParams {
  url: string;
  data?: object;
  headers?: { [key: string]: string };
  query?: Record<string, string>;
}

export const apiCall = ({ url, data, headers, query }: ApiCallParams) => {
  const fetchData = async (config: RequestInit) => {
    try {
      const req = await fetch(
        `${url}${query ? '?' + new URLSearchParams(query).toString() : ''}`,
        config,
      );
      const res = await req.json();
      return res;
    } catch (error) {
      return error;
    }
  };

  return {
    get: async () => {
      return await fetchData({
        method: 'GET',
        headers: headers,
      });
    },
    post: async () => {
      return await fetchData({
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      });
    },
    put: async () => {
      return await fetchData({
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data),
      });
    },
    patch: async () => {
      return await fetchData({
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(data),
      });
    },
    delete: async () => {
      return await fetchData({
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data),
      });
    },
  };
};
