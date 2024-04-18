import HeaderProps from './headerComponent.types';
import styles from './headerComponent.module.css';
import { FcShop } from 'react-icons/fc';
import { HEADER_MENU } from '../../constants';
import Button from '../Button/buttonComponent';
import IconButton from '../IconButton/iconButtonComponent';
import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

export default function Header({ className, ...rest }: HeaderProps) {
  return (
    <div
      className={`${styles.header} ${className ? className : ''}`.trim()}
      {...rest}
    >
      <div className={styles.headerContainer}>
        <div className={`${styles.logo} lato-black`}>
          <FcShop size={22} />
          <span>
            <span data-value='e'>e</span>
            <span data-value=':'>:</span>
            <span data-value='Commerce'>Commerce</span>
            <span data-value='()'>()</span>
          </span>
        </div>
        <div>
          <ul className={`lato-regular ${styles.menu}`}>
            {HEADER_MENU.map((item) => (
              <li key={item?.url}>
                {item?.title === 'Account' ? (
                  <IconButton link href={item?.url} variant='secondary'>
                    <FaUser />
                  </IconButton>
                ) : item?.title === 'Cart' ? (
                  <IconButton
                    className='cart-button'
                    link
                    href={item?.url}
                    variant='text'
                  >
                    <FaCartShopping />
                  </IconButton>
                ) : (
                  <Button variant='text' link href={item?.url}>
                    {item?.title}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
