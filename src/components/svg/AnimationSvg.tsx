import { VoidSVG } from './svg-types';

export const AnimationsSVG: VoidSVG = (props) => {
  return (
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        stroke="none"
        d="M8 4a4 4 0 0 0-4 4v20h4V8h20V4H8Zm8 8a4 4 0 0 0-4 4v20h4V16h20v-4H16Zm24 12v16H24V24h16Zm0-4H24a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V24a4 4 0 0 0-4-4Zm-12 6v12l8-6-8-6ZM2 2l46 45"
      />
      <path stroke-width="4" d="M2 1.5L47.5 47" />
    </svg>
  );
};
