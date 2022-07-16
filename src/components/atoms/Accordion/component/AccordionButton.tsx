import { ReactNode } from 'react';
import styles from '../styles/AccordionButton.module.scss';
import { useAccordionItemContext } from './AccordionItem';

type AccordionButtonPropsT = {
  children: ReactNode;
};

export const AccordionButton = ({ children }: AccordionButtonPropsT) => {
  const { isOpen } = useAccordionItemContext();
  const classes = [
    styles.accordionButton,
    isOpen && styles.opened
  ].filter(Boolean)
   .join(' ');
  return <div className={classes}>{children}</div>;
};
