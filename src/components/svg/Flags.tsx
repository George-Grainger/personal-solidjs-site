import { VoidSVG } from './svg-types';

export const FranceFlag: VoidSVG = (props) => {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>French Flag</title>
      <path d="M80 40a40 40 0 1 1-80 0 40 40 0 0 1 80 0Z" fill="var(--white)" />
      <path d="M26 3a40 40 0 0 0 0 74V3Z" fill="var(--blue)" />
      <path d="M54 77a40 40 0 0 0 0-74v74Z" fill="var(--red)" />
    </svg>
  );
};

export const UKFlag: VoidSVG = (props) => {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Uk Flag</title>
      <path d="M48 24a24 24 0 1 1-48 0 24 24 0 0 1 48 0Z" fill="var(--blue)" />
      <path
        d="M18 13.2V.8a23.9 23.9 0 0 1 12 0v15.7L40.2 6.3c1.1 1 2.7 3 3.6 4.2L36 18h11.2a23.9 23.9 0 0 1 0 12h-13l9 8.4a24.1 24.1 0 0 1-4.5 4.6L30 34.2v13a23.9 23.9 0 0 1-12 0V31.8L8.1 42a24.1 24.1 0 0 1-3.6-4l8.7-8H.8a23.9 23.9 0 0 1 0-12h12.7L4.8 9.6a21 21 0 0 1 4.7-4.7l8.5 8.3Z"
        fill="var(--white)"
      />
      <g fill="var(--red)">
        <path d="M18 18 7 7 5.4 8.8 15 18h3Zm12 0L41 7l1.6 1.8L33 18h-3Zm0 12.2 11 11 1.6-1.8-9.6-9.2h-3Zm-12 0-11 11-1.6-1.8 9.6-9.2h3Z" />
        <path d="M.2 21a24.2 24.2 0 0 0 0 6H21v20.8a24.2 24.2 0 0 0 6 0V27h20.8a24.2 24.2 0 0 0 0-6H27V.2C25.8 0 25.2 0 24 0c-1 0-2 0-3 .2V21H.2Z" />
      </g>
    </svg>
  );
};
