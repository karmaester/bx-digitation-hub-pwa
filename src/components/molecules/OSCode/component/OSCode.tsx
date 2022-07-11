import React from 'react';
import styles from '../styles/OSCode.module.scss';
import { Label } from '@components/atoms/Label';
import { Select } from '@components/atoms/Select';
import { Input } from '@components/atoms/Input';

const OSCode = ({ onSubmit, registerInput, options, submitText }: any) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inlineForm}>
        <Label>
          <span>Evento</span>
          <Select {...registerInput.event()} options={options} />
        </Label>
        <Label>
          <span>Observación</span>
          <Input {...registerInput.observation()} />
        </Label>
      </div>
      <div className={styles.osForm}>
        <Label>
          <span>OS</span>
          <Input {...registerInput.oscode()} />
        </Label>
      </div>
      <Input type='submit' value={submitText} />
    </form>
  );
};

export default OSCode;
