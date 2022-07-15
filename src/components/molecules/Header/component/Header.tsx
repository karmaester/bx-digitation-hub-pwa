import React from 'react';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import avatar from '@images/avatar-senora-patricia.png';
import { BlueLogo, BellIcon, SquaresIcon } from '@components/atoms/icons';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <BlueLogo />
      </div>
      <div className={styles.headerIcons}>
        <BellIcon />
        <SquaresIcon />
        <Image src={avatar} alt='Avatar señora Patricia' />
      </div>
    </div>
  );
};

export default Header;
