import styles from './Select.module.css';
import { createSignal, children, onMount, Switch, Match, batch, ParentComponent } from 'solid-js';
import { useI18n } from '@solid-primitives/i18n';

interface SelectProps {
  class?: string;
  legend: string;
  onChange: (a: string) => void;
}

export const Select: ParentComponent<SelectProps> = (props) => {
  const [t] = useI18n();
  const elements = children(() => props.children)() as HTMLElement[];

  onMount(() => {
    setCurrentlySelected((elements as HTMLInputElement[]).filter((el) => el.checked)[0]!.value);
  });

  const [optionsVisible, setOptionsVisible] = createSignal(false);
  const [currentlySelected, setCurrentlySelected] = createSignal('');

  const handleChange = (e: Event) => {
    const el = e.target as HTMLInputElement;
    batch(() => {
      setCurrentlySelected(el.value);
      props.onChange(el.value);
    });
  };

  const getCheckedMatches = () => {
    const matches = [];
    for (let i = 0; i < elements.length; i += 2) {
      const displayVals = Array.from(elements[i].childNodes);

      const input = elements[i + 1] as HTMLInputElement;
      matches.push(<Match when={currentlySelected() === input.value}>{displayVals}</Match>);
    }
    return matches;
  };

  return (
    <div class={`${props.class || ''} ${styles.wrapper}`} classList={{ [styles.show]: optionsVisible() }}>
      <button
        aria-label={t('global.select.view_options', {}, 'View options')}
        class={styles.title}
        onClick={() => setOptionsVisible((v) => !v)}
        onBlur={(e) => !e.currentTarget.parentElement?.matches(':focus-within') && setOptionsVisible(false)}
      >
        <span class="sr-only">{t('global.select.current', {}, 'Currently selected:')}</span>
        <Switch fallback={'Choose an option'}>{getCheckedMatches()}</Switch>
      </button>
      <fieldset class={styles.select} onClick={() => setOptionsVisible(false)} onChange={handleChange}>
        <legend class="sr-only">{props.legend}</legend>
        {props.children}
      </fieldset>
    </div>
  );
};
