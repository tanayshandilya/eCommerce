import { ButtonHTMLAttributes } from 'react';
import { LinkProps } from 'react-router-dom';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  loading?: boolean;
  danger?: boolean;
  size?: 'xs' | 'sm' | 'lg';
  link?: boolean;
  href?: LinkProps['to'];
}

export interface IconButtonLinkProps extends Omit<LinkProps, 'to'> {
  variant?: 'primary' | 'secondary' | 'text';
  disabled?: boolean;
  loading?: boolean;
  size?: 'xs' | 'sm' | 'lg';
  link?: boolean;
  href?: LinkProps['to'];
}
