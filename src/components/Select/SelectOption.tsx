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
      <label
        tabIndex={0}
        role="button"
        class={styles.label}
        for={id}
        onKeyDown={(e) => e.key === ' ' && (e.target as HTMLLabelElement).click()}
      >
        {children}
      </label>
      <input class="sr-only" type="radio" id={id} name={name} value={value} checked={checked} />
    </>
  );
};
