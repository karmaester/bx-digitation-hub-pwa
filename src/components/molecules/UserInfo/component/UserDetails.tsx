import styles from '../styles/UserInfo.module.scss';

type UserDetailsPropsT = {
  base: string;
  office: string;
  warehouse: string;
  profile: string;
};

const UserDetails = ({ base, office, warehouse, profile }: UserDetailsPropsT) => {
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userInfo}>
        <span>Base:</span>
        <span>{base}</span>
      </div>
      <div className={styles.userInfo}>
        <span>Oficina:</span>
        <span>{office}</span>
      </div>
      <div className={styles.userInfo}>
        <span>Bodega:</span>
        <span>{warehouse}</span>
      </div>
      <div className={styles.userInfo}>
        <span>Perfil:</span>
        <span>{profile}</span>
      </div>
    </div>
  );
};

export default UserDetails;
