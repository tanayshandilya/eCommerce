import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/productCardComponent';
import { apiCall, getConversionRate } from '../helper';
import { API_BASE } from '../constants';
import { toast } from 'react-toastify';
import {
  ConversionResponseType,
  ProductResponseType,
} from '../@types/response.types';
import Header from '../components/Header/headerComponent';

export default function HomePage() {
  const [conversion, setConverrsion] = useState<number>(1);
  const [products, setProducts] = useState<ProductResponseType[]>([]);
  useEffect(() => {
    if (!products.length) {
      apiCall({
        url: `${API_BASE}/products`,
        query: { limit: '4' },
      })
        .get()
        .then((data: ProductResponseType[]) => {
          setProducts(data);
        })
        .catch((err: Error) => {
          return toast.error(err.message);
        });
    }
    return;
  }, [products.length]);

  useEffect(() => {
    getConversionRate('INR').then((r: ConversionResponseType) => {
      if (r?.data?.INR) {
        setConverrsion(r?.data?.INR);
      }
    });
  });

  return (
    <main>
      <Header />
      <div className='row container-fluid' style={{ paddingRight: 0 }}>
        {products.length &&
          products.map((product) => (
            <div
              style={{ marginBottom: 15 }}
              className='col-lg-3 col-md-4 col-sm-6 col-xs-12'
              key={product?.title}
            >
              <ProductCard
                id={product?.id}
                onSale={true}
                image={product?.image}
                discount={10}
                price={
                  conversion !== 1 && product?.price
                    ? product?.price * conversion
                    : product?.price
                }
                title={product?.title}
                category={product?.category}
                description={product?.description}
                onAddToCart={(id) => {
                  console.log(id);
                }}
                rating={product?.rating}
              />
            </div>
          ))}
      </div>
    </main>
  );
}
