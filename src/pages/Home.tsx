import { Component, onMount } from 'solid-js';

const Home: Component<{}> = () => {
  onMount(() => {
    setTimeout(() => document.documentElement.classList.remove('no-animate'));
  });

  return (
    <>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </>
  );
};

export default Home;
