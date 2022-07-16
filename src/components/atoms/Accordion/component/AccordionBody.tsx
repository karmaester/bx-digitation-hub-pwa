import { ReactNode } from 'react';
import styles from '../styles/AccordionBody.module.scss';
import { useAccordionItemContext } from './AccordionItem';

type AccordionBodyPropsT = {
  children: ReactNode;
};

export const AccordionBody = ({ children }: AccordionBodyPropsT) => {
  const { isOpen } = useAccordionItemContext();
  const classes = [
    styles.accordionBody,
    isOpen ? styles.opened : styles.closed
  ].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
};
