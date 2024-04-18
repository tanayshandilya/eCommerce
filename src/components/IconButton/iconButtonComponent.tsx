import { Link } from 'react-router-dom';
import styles from './iconButtonComponent.module.css';
import {
  IconButtonProps,
  IconButtonLinkProps,
} from './iconButtonComponent.types';

const IconButtonLink = ({
  children,
  className,
  href = '',
  ...rest
}: IconButtonLinkProps) => {
  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default function IconButton({
  variant = 'primary',
  disabled,
  loading,
  danger,
  children,
  className,
  size,
  link,
  href = '',
  ...rest
}: IconButtonProps) {
  const buttonClass = `${styles.iButton} ${styles[variant]} ${
    loading ? styles.loading : ''
  } ${size ? styles[size] : ''} ${danger ? styles.danger : ''} ${
    className ? className : ''
  }`;

  if (link) {
    return (
      <IconButtonLink href={href} className={buttonClass.trim()} id={rest?.id}>
        {!loading && children}
      </IconButtonLink>
    );
  } else {
    return (
      <button
        className={buttonClass.trim()}
        disabled={disabled || loading}
        {...rest}
      >
        {!loading && children}
      </button>
    );
  }
}
