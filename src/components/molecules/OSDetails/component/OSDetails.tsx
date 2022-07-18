import styles from '../styles/OSDetails.module.scss';
import TextInput from '@components/atoms/TextInput';

export const OSDetails = ({ registers, submitText, onSubmit }: any) => {
  return (
    <form className={styles.detailsForm} onSubmit={onSubmit}>
      <div className={styles.inlineForm}>
        <label>
          <span>Pieces in OS</span>
          <TextInput {...registers.pieces()} />
        </label>
        <label>
          <span>Client</span>
          <TextInput {...registers.client()} />
        </label>
      </div>
      <input type='submit' value={submitText} />
    </form>
  );
};

export default OSDetails;
