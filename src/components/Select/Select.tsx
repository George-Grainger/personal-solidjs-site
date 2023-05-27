import styles from './Select.module.scss';
import { createSignal, children, onMount, Switch, Match, batch, ParentComponent, createEffect } from 'solid-js';
import { useI18n } from '@solid-primitives/i18n';

interface SelectProps {
  class?: string;
  legend: string;
  onChange: (a: string) => void;
}

export const Select: ParentComponent<SelectProps> = (props) => {
  let button: HTMLButtonElement | undefined;
  const [t] = useI18n();
  const elements = children(() => props.children)() as HTMLElement[];

  onMount(() => {
    // setCurrentlySelected((elements as HTMLInputElement[]).filter((el) => el.checked)[0]!.value);
  });

  const [optionsVisible, setOptionsVisible] = createSignal(false);
  const [currentlySelected, setCurrentlySelected] = createSignal('');

  const handleChange = (e: Event) => {
    const el = e.target as HTMLInputElement;
    batch(() => {
      setCurrentlySelected(el.value);
      props.onChange(el.value);
    });
    button?.focus();
  };

  const getCheckedMatches = () => {
    console.log(elements);
    const matches = [];
    for (let i = 0; i < elements.length; i += 2) {
      const displayVals = Array.from(elements[i].childNodes);

      const input = elements[i + 1] as HTMLInputElement;
      matches.push(<Match when={currentlySelected() === input.value}>{displayVals}</Match>);
    }
    return matches;
  };

  const c = children(() => props.children);

  createEffect(() =>
    (c() as HTMLElement[])
      .filter((element) => element.tagName === 'LABEL')
      .forEach((element) => (element.tabIndex = optionsVisible() ? 1 : -1)),
  );

  return (
    <div
      class={`${props.class || ''} ${styles.wrapper}`}
      onFocusOut={(e) => !e.currentTarget?.matches(':focus-within') && setOptionsVisible(false)}
    >
      <button
        ref={button}
        role="combobox"
        aria-expanded={optionsVisible()}
        aria-owns="test"
        aria-haspopup="listbox"
        aria-labelledby=""
        class={styles.title}
        onClick={() => setOptionsVisible((v) => !v)}
      >
        <span class="sr-only">{t('global.select.current', {}, 'Currently selected:')}</span>
        {/* <Switch fallback={'Choose an option'}>{getCheckedMatches()}</Switch> */}
        {/* <Switch fallback={'Choose an option'}>Test</Switch> */}
      </button>
      <fieldset class={styles.select} aria-hidden={!optionsVisible()} onClick={() => setOptionsVisible(false)} onChange={handleChange}>
        <legend class="sr-only">{props.legend}</legend>
        {c()}
      </fieldset>
    </div>
  );
};
