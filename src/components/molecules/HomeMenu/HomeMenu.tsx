import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './HomeMenu.module.scss';

type MenuItemT = {
  id: number;
  image: ReactNode;
  label: ReactNode;
  href: string;
};

type HomeMenuPropsT = {
  items: MenuItemT[];
};

const HomeMenu = ({ items }: HomeMenuPropsT) => {
  return (
    <ul className={styles.menu}>
      {items.map(({ id, image, label, href }) => (
        <Link key={id} href={href}>
          <li className={styles.menuItem}>
            <div className={styles.menuItemImage}>{image}</div>
            <div className={styles.menuItemLabel}>{label}</div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default HomeMenu;
