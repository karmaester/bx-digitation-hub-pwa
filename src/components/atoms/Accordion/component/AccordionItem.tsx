import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import styles from '../styles/AccordionItem.module.scss';
import { AccordionContext } from './Accordion';

type AccordionItemContextT = {
  itemId: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
} | null;

const AccordionItemContext = createContext<any>(null);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) throw new Error('Accordion Item Context has not been provided.');
  return context;
};

type AccordionPropsT = {
  itemId?: number;
  children: ReactNode;
};

export const AccordionItem = ({ itemId, children }: AccordionPropsT) => {
  const accordionContext = useContext(AccordionContext);
  const [isOpen, setIsOpen ] = useState(false);
  useEffect(() => {
    if (accordionContext) {
      const { selectedItem } = accordionContext;
      setIsOpen(selectedItem === itemId);
    }
  }, [accordionContext, itemId]);
  return (
    <AccordionItemContext.Provider value={{isOpen, setIsOpen, itemId}}>
      <div className={styles.accordionItem}>{children}</div>
    </AccordionItemContext.Provider>
  );
};
