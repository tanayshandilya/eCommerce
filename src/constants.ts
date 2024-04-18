export interface CURRENCY_LIST_ITEM_TYPES {
  symbol: string;
  code: string;
}

export interface CURRENCY_LIST_TYPES {
  IN: CURRENCY_LIST_ITEM_TYPES;
  US: CURRENCY_LIST_ITEM_TYPES;
  ES: CURRENCY_LIST_ITEM_TYPES;
}

export const CURRENCY_LIST = {
  IN: {
    symbol: '₹',
    code: 'INR',
  },
  US: {
    symbol: '$',
    code: 'USD',
  },
  ES: {
    symbol: '€',
    code: 'EUR',
  },
} as CURRENCY_LIST_TYPES;

export const API_BASE = 'https://fakestoreapi.com';

export const HEADER_MENU = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Shop',
    url: '/shop',
  },
  {
    title: 'Cart',
    url: '/cart',
  },
  {
    title: 'Account',
    url: '/account',
  },
];
