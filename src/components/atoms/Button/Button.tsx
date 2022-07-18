import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonPropsT = {
  variant?: 'primary' | 'secondary';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'style'>;

const Button = ({ variant = 'primary', className='', style={}, children, ...rest }: ButtonPropsT) => {
  const classes = [
    styles.button,
    variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary,
    className
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
