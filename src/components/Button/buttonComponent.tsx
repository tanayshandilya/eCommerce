import { Link } from 'react-router-dom';
import styles from './buttonComponent.module.css';
import { ButtonProps, ButtonLinkProps } from './buttonComponent.types';

const ButtonLink = ({
  children,
  className,
  href = '',
  ...rest
}: ButtonLinkProps) => {
  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default function Button({
  variant = 'primary',
  disabled,
  loading,
  children,
  className,
  size,
  link,
  href = '',
  ...rest
}: ButtonProps) {
  const buttonClass = `lato-regular ${styles.button} ${styles[variant]} ${
    disabled ? 'disabled' : ''
  } ${loading ? styles.loading : ''} ${size ? styles[size] : ''} ${
    className ? className : ''
  }`;

  if (link) {
    return (
      <ButtonLink href={href} className={buttonClass.trim()} id={rest?.id}>
        {children}
      </ButtonLink>
    );
  } else {
    return (
      <button
        className={buttonClass.trim()}
        disabled={disabled || loading}
        {...rest}
      >
        {children}
      </button>
    );
  }
}
