import { createContext, ReactNode, useContext, useState } from 'react';
import styles from '../styles/Accordion.module.scss';

type AccordionContextT = {
  selectedItem: number;
  setSelectedItem: (item: number) => void;
} | null;

export const AccordionContext = createContext<any>(null);

type AccordionPropsT = {
  children: ReactNode;
};

export const Accordion = ({ children }: AccordionPropsT) => {

  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <AccordionContext.Provider value={{selectedItem, setSelectedItem}}>
      <div className={styles.accordion}>
        {children}
      </div>
    </AccordionContext.Provider>
  );

};
