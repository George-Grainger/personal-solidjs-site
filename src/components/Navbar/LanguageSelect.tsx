import styles from './Navbar.module.css';
import { Select, SelectOption } from '../Select';
import { FranceFlag, UKFlag } from '../svg';
import { useI18n } from '@solid-primitives/i18n';
import { VoidComponent } from 'solid-js';

const LanguageSelect: VoidComponent<{}> = () => {
  const [, { locale }] = useI18n();

  return (
    <Select class={styles.languageSelect} legend="Choose language" onChange={(val) => locale(val)}>
      <SelectOption id="lang-en" name="language-preference" value="en" checked={locale() === 'en'}>
        <UKFlag />
        <span>en</span>
      </SelectOption>
      <SelectOption id="lang-fr" name="language-preference" value="fr" checked={locale() === 'fr'}>
        <FranceFlag />
        <span>fr</span>
      </SelectOption>
    </Select>
  );
};

export default LanguageSelect;
