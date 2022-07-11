import styles from '../styles/OSDetails.module.scss';
import { Label } from '@components/atoms/Label';
import { Input } from '@components/atoms/Input';

export const OSDetails = ({ registers, submitText, onSubmit }: any) => {
  console.log({register: registers.pieces()})
  return (
    <form className={styles.detailsForm} onSubmit={onSubmit}>
      <div className={styles.inlineForm}>
        <Label>
          <span>Pieces in OS</span>
          <Input {...registers.pieces()} />
        </Label>
        <Label>
          <span>Client</span>
          <Input {...registers.client()} />
        </Label>
      </div>
      <Input type='submit' value={submitText} />
    </form>
  );
};

export default OSDetails;
