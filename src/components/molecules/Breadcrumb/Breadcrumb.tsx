import Link from 'next/link';
import styles from './Breadcrumb.module.scss';
import { ArrowLeftIcon } from '@components/atoms/icons';

export const Breadcrumb = () => {
  return (
    <Link href="/">
      <div className={styles.breadcrumb}>
        <ArrowLeftIcon />
        <span>Volver atrás</span>
      </div>
    </Link>
  );
};
