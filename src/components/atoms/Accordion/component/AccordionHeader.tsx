import { ReactNode, useContext } from 'react';
import styles from '../styles/AccordionHeader.module.scss';
import { AccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

type AccordionHeaderPropsT = {
  children: ReactNode;
  onToggle?: () => void;
};

export const AccordionHeader = ({ onToggle, children }: AccordionHeaderPropsT) => {

  const accordionContext = useContext(AccordionContext);
  const { itemId, isOpen, setIsOpen } = useAccordionItemContext();

  const handleClick = () => {
    if (accordionContext) {
      const {setSelectedItem} = accordionContext;
      setSelectedItem((prev: number) => prev === itemId ? -1 : itemId);
    } else {
      setIsOpen((prev: boolean) => !prev);
    }
    if (onToggle) onToggle();
  };

  return (
    <button
      className={styles.accordionHeader}
      onClick={handleClick}
    >
      {children}
    </button>
  );

};
