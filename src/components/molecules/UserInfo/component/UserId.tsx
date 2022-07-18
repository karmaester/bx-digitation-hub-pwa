import styles from '../styles/UserInfo.module.scss';

type UserInfoHeaderPropsT = {
  id: string;
};

const UserId = ({ id }: UserInfoHeaderPropsT) => {
  return (
    <div className={styles.userInfo}>
      <span>Usuario:</span>
      <span>{id}</span>
    </div>
  );
};

export default UserId;
