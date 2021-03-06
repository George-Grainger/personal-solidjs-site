import { ParentComponent } from 'solid-js';
import styles from './Select.module.css';

interface SelectOptionProps {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
}

export const SelectOption: ParentComponent<SelectOptionProps> = ({ id, name, value, checked, children }) => {
  return (
    <>
      <label class={styles.label} tabIndex={0} for={id}>
        {children}
      </label>
      <input class="sr-only" type="radio" role="listitem" id={id} name={name} value={value} checked={checked} />
    </>
  );
};
