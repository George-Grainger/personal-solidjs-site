import { useI18n } from '@solid-primitives/i18n';
import { VoidComponent } from 'solid-js';
import { useAppContext } from '../../AppContext';
import { Select, SelectOption } from '../Select';
import { AnimationsSVG } from '../svg';
import styles from './Navbar.module.css';

export const AnimationSelect: VoidComponent<{}> = () => {
  const [t] = useI18n();
  const context = useAppContext();
  const NAME = 'animation-preference';

  return (
    <Select passedClasses={styles.animationSelect} legend="Show animations?" onChange={(e) => (context.isReduceMotion = e === 'reduce')}>
      <SelectOption id="animations-on" name={NAME} value="no-preference" checked={!context.isReduceMotion}>
        <span>{t('global.keep_animation', {}, 'Keep animation')}</span>
        <AnimationsSVG />
      </SelectOption>
      <SelectOption id="animations-less" name={NAME} value="reduce" checked={context.isReduceMotion}>
        <span>{t('global.reduce_animation', {}, 'Reduce animation')}</span>
        <AnimationsSVG class={styles.strikethrough} />
      </SelectOption>
    </Select>
  );
};
