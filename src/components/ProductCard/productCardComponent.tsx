import {
  ProductCardProps,
  ProductCardRatingProps,
} from './productCardComponent.types';
import styles from './productCardComponent.module.css';
import { calculateDiscount, formatPrice } from '../../helper';
import Button from '../Button/buttonComponent';
import {
  MdLink,
  MdOutlineAddShoppingCart,
  MdOutlineInfo,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductRating = ({ count, rate = 0 }: ProductCardRatingProps) => {
  const starVars = {
    '--star-percent': `${((rate / 5) * 100).toPrecision(2)}%`,
    '--empty-percent': `${(100 - (rate / 5) * 100).toPrecision(2)}%`,
  } as React.CSSProperties;
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewStars} style={starVars}>
        <div className='lato-regular'>{count}</div>
      </div>
    </div>
  );
};

export default function ProductCard({
  id,
  onSale,
  discount = 0,
  title,
  image,
  price = 0,
  category,
  description,
  className,
  onAddToCart,
  rating,
  isAddedToCart = false,
  ...rest
}: ProductCardProps) {
  const productClass = `${styles.product} ${className ? className : ''}`;
  const mainPrice = onSale ? calculateDiscount(price, discount) : price;
  const [addedToCart, setAddedToCart] = useState<boolean>(isAddedToCart);

  return (
    <div className={productClass.trim()} {...rest}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.body}>
        <h4 title={title} className='lato-black'>
          {title}
        </h4>
        <div className={styles.metaContianer}>
          <Link
            to={`/shop/?category=${encodeURIComponent(category as string)}`}
            className={`${styles.category} lato-bold`}
          >
            <span>
              <MdLink size={12} /> {category}
            </span>
          </Link>
          <div className={styles.reviews}>
            {rating && (
              <ProductRating count={rating?.count} rate={rating?.rate} />
            )}
          </div>
        </div>
        <p className='lato-regular'>{description}</p>
      </div>
      <div className={`${styles.footer} lato-regular`}>
        <div className={styles.priceContainer}>
          {mainPrice !== price ? (
            <>
              <del>{formatPrice(price)}</del>
              <span className='lato-bold'>{formatPrice(mainPrice)}</span>
              <span className={`lato-regular ${styles.discont}`}>
                {discount}% Off
              </span>
            </>
          ) : (
            <span className='lato-bold'>{formatPrice(mainPrice)}</span>
          )}
        </div>
        <div className={`${styles.action} action-adjust`}>
          {addedToCart ? (
            <Button link href='/cart'>
              <MdOutlineShoppingCart /> View Cart
            </Button>
          ) : (
            <Button
              onClick={(e) => {
                setAddedToCart((x) => !x);
                return onAddToCart?.(id, e);
              }}
            >
              <MdOutlineAddShoppingCart /> Add To Cart
            </Button>
          )}
          <Button variant='secondary' link href={`/product/${id}`}>
            <MdOutlineInfo /> View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
