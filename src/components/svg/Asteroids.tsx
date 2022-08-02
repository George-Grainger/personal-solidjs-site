import { splitProps } from 'solid-js';
import { VoidSVG } from './svg-types';
import styles from './Svg.module.css';

export const AsteroidGroup1: VoidSVG<{ moveOnReduceMotion?: boolean }> = (props) => {
  const [local, others] = splitProps(props, ['class', 'moveOnReduceMotion']);

  return (
    <svg
      viewBox="0 0 1412 384"
      fill="var(--white)"
      xmlns="http://www.w3.org/2000/svg"
      class={`${styles.fullPageAsteroids} ${local.class || ''}`}
      classList={{ [styles.moveOnReduceMotion]: local.moveOnReduceMotion }}
      aria-hidden="true"
      {...others}
    >
      <g class={styles.moveToRight}>
        <g filter="url(#filter0_i_291_657)">
          <path
            d="M1376.21 208.98c-13.56-1.5-23.63-27.81-50.48.19-3.85 5.99 2.65 13.37-3.34 27.68-5.99 14.3-15.39 10.08-19.27 20.8-4.22 11.67 10.33 23.11 17.02 36.08 6.8 13.18 5.84 27.8 12.62 30.07 16.06 3.84 47.4-.4 57.53-17.23 17.32-28.8-3.57-16.08 15.49-60.08 19.05-43.99-16.27-31.53-29.57-37.5Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter1_i_291_657)">
          <path d="M1394.5 251.56a18.79 18.79 0 1 0-34.05-15.9 18.79 18.79 0 0 0 34.05 15.9Zm-31.55 58.94a5.39 5.39 0 1 0-9.77-4.55 5.39 5.39 0 0 0 9.77 4.55Zm-23.93-45.85a5.39 5.39 0 1 0-9.77-4.56 5.39 5.39 0 0 0 9.77 4.56Z" />
        </g>
        <g filter="url(#filter2_i_291_657)">
          <path
            d="M1235.46 379.54c24.86-2.88 48.34-30.15 46.37-44.21-3.72-16.08-18.78-30.97-38.35-32.52-33.51-2.66-37.43 6.15-85.31 8.7-47.87 2.57-57.1 4.41-56.52 18.98 4.69 12.8 20.79 19.46 57.82 31.01 10.39 1.14 40.4 22.17 75.99 18.04Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter3_i_291_657)">
          <path d="M1261 335.18a7 7 0 1 0 .35 14 7 7 0 0 0-.35-14Zm-39.55-14.65a20.45 20.45 0 1 0 1.05 40.9 20.45 20.45 0 0 0-1.05-40.9Z" />
        </g>
        <g filter="url(#filter4_i_291_657)">
          <path
            d="M1238.73 123.41c31.16 2.8 61.3 50.9 59.3 68.55-4.14 20.21-22.47 39.3-46.89 41.88-41.8 4.41-46.98 1.65-106.9 0-59.92-1.65-44.54-15.53-44.29-33.76 5.45-16.16-1.62-36.66 44.29-52.29 12.95-1.75 49.88-28.39 94.49-24.38Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter5_i_291_657)">
          <path d="M1150.59 206.77a8.75 8.75 0 1 1-.01-17.5 8.75 8.75 0 0 1 .01 17.5ZM1188 187a20 20 0 1 1 0-40 20 20 0 0 1 0 40Zm41.5-30.17a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Zm23.83 58.82a14.32 14.32 0 1 1-.01-28.65 14.32 14.32 0 0 1 .01 28.65Z" />
        </g>
        <g filter="url(#filter6_i_291_657)">
          <path
            d="M967.57 263.59c11.31-8.46 7.27-24.27 20.18-30.02 15.79-7.03 25.25 10.71 42.43 12.57 14.93 1.61 26.3-10.76 38.41-1.88 9.84 7.22 17.5 17.81 12.17 28.8-4.88 10.04-17.33 4.1-26.78 10.05-10.44 6.56-10.6 18.52-22.33 22.31-8.99 2.9-14.73-.98-24.17-1.05-14.02-.1-23.51 8.32-35.87 1.69-8.07-4.34-10.02-10.26-15.75-17.41-4.55-5.7-11.63-7.86-10.96-15.12.9-9.62 14.92-4.16 22.67-9.94Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter7_i_291_657)">
          <path d="M996.04 289.4a8 8 0 1 1-4.3-15.42 8 8 0 0 1 4.3 15.41Zm47.03-19.34a8.5 8.5 0 1 1-4.56-16.38 8.5 8.5 0 0 1 4.56 16.38Zm-42.72-9.9a7 7 0 1 1-3.76-13.49 7 7 0 0 1 3.76 13.5Z" />
        </g>
        <g filter="url(#filter8_i_291_657)">
          <path
            d="M1011.14 119.85c-9.29-1.47-13.9 5-22 9.75-5.53 3.23-10.05 3.92-13.48 9.32-8.11 12.78 8.03 26.17 22.05 31.87 11.98 4.88 25.72 7.4 32.96-3.32 5.52-8.19 2.44-15.96-.86-25.27-3.8-10.72-7.44-20.57-18.67-22.35Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter9_i_291_657)">
          <path d="M1004.47 163.32a3.17 3.17 0 1 0 5.21-3.6 3.17 3.17 0 0 0-5.21 3.6Zm-6.05-15.12a7.25 7.25 0 1 0 11.93-8.24 7.25 7.25 0 0 0-11.93 8.25Z" />
        </g>
        <g filter="url(#filter10_i_291_657)">
          <path
            d="M792.16 42.1c-30.6-4.7-67.52 20.14-69.78 37.56-.81 20.4 12.27 43.07 35.11 51.33 39.1 14.14 18.44 72.3 76.38 84.9 57.94 12.62 97.76-53.95 101.84-71.51-1.4-16.81-20.23-85.56-60.62-111.45-12.02-4.76-39.14 15.88-82.93 9.16Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter11_i_291_657)">
          <path d="M874.33 129.47a8.66 8.66 0 1 0 4.14-16.82 8.66 8.66 0 0 0-4.14 16.81Zm-78.09-32.01a12.99 12.99 0 1 0 6.22-25.21 12.99 12.99 0 0 0-6.22 25.21Z" />
        </g>
      </g>
      <g class={styles.moveToLeft}>
        <g filter="url(#filter12_i_291_657)">
          <path
            d="M613.13 192.15c16.28-12.4 31.59 8.03 52 6.5 18.5-1.39 27.83-15.84 46-12 10.25 2.17 17.34 3.9 24 12 8.4 10.22 8.5 20.74 5 33.5-4.53 16.52-15.92 24.09-32 30-16.72 6.14-27.75-4.44-45.5-3-11.27.91-18.07 9.34-28.5 5-10.21-4.25-9.03-14.86-16.5-23-6.36-6.93-15.2-7.03-18-16-2.2-7.04 2.12-18.78 2.12-18.78s5.71-9.91 11.38-14.22Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter13_i_291_657)">
          <path d="M644.13 253.15a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm65-14a14 14 0 1 1 0-28 14 14 0 0 1 0 28Zm-64-19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z" />
        </g>
        <g filter="url(#filter14_i_291_657)">
          <path
            d="M492.62 56.18c-14.32 15-8.34 31.5-9.92 52.17-1.07 14.08-5.5 23.15 0 36.15 13 30.76 57.55 18.28 85.5 0 23.89-15.62 45.73-37.39 35.35-63.98-7.93-20.29-25.9-24.47-46.93-30.17-24.22-6.56-46.66-12.32-64 5.83Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter15_i_291_657)">
          <path d="M563.12 122.85a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm-35-8a16 16 0 1 0 0-32 16 16 0 0 0 0 32Z" />
        </g>
        <g filter="url(#filter16_i_291_657)">
          <path
            d="M423.76 256.81c-18.1-8.53-25.63-44.05-20.55-54.2 6.93-11.24 22.14-18.67 37.37-14.85 26.08 6.54 28.59 9.33 64.21 23.5 35.63 14.16 23.34 19.12 19.19 30.01-6.83 8.51-7.09 22.37-38.1 21.67-8.16-1.79-36.2 6.09-62.12-6.13Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter17_i_291_657)">
          <path d="M495.03 226.12a5.6 5.6 0 1 1-3.85 10.52 5.6 5.6 0 0 1 3.85-10.52Zm-40.13-9.01a12.8 12.8 0 1 1-8.8 24.04 12.8 12.8 0 0 1 8.8-24.04Z" />
        </g>
        <g filter="url(#filter18_i_291_657)">
          <path
            d="M355.5 67.05c-3.57 13.67 9.44 23.51 2.94 36.05-7.95 15.34-26.42 7.37-41 16.64-12.69 8.04-13.86 24.8-28.86 25.41-12.2.5-24.79-3-27.47-14.91-2.46-10.9 10.98-14.02 14.66-24.57 4.07-11.63-3.26-21.08 3.55-31.36 5.21-7.88 12.12-8.41 19.55-14.25 11.02-8.67 13.19-21.17 26.98-23.69 9.02-1.65 14.22 1.77 23.17 3.79 7.11 1.6 14-1.12 17.99 4.98 5.3 8.08-9.07 12.56-11.51 21.9Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter19_i_291_657)">
          <path d="M317.15 64.63A8 8 0 1 1 330.12 74a8 8 0 0 1-12.97-9.37Zm-24.71 44.45a8.5 8.5 0 1 1 13.78 9.95 8.5 8.5 0 0 1-13.78-9.95ZM332 90.17a7 7 0 1 1 11.36 8.2 7 7 0 0 1-11.35-8.2Z" />
        </g>
        <g filter="url(#filter20_i_291_657)">
          <path
            d="M279.42 186c-22.2-11.56-63.25 7.83-69.5 20.57-5.95 15.4-1.84 36.17 13.5 48.44 26.24 21 30.92 21.38 71.98 46.13 41.07 24.74 36.7 8.75 44.4-3.63 3.3-13.23 16.9-23.98-7.27-54.32-7.96-6.77-21.34-40.64-53.11-57.2Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter21_i_291_657)">
          <path d="M240.03 244.7a7 7 0 1 0 7.55-11.8 7 7 0 0 0-7.55 11.8Zm29.87-35.5a4 4 0 1 0 4.31-6.73 4 4 0 0 0-4.31 6.73Zm42.99 60.8a12 12 0 1 0 12.94-20.2A12 12 0 0 0 312.9 270Z" />
        </g>
        <g filter="url(#filter22_i_291_657)">
          <path
            d="M46.25 124.32c-24.23 2.24-47.73 28.9-46.18 43 3.22 16.17 17.48 31.44 36.46 33.5 32.5 3.53 36.53-5.18 83.13-6.5 46.6-1.32 55.6-2.92 55.41-17.5-4.23-12.93-19.71-20-55.41-32.5-10.07-1.4-38.72-23.2-73.4-20Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter23_i_291_657)">
          <path d="M125.42 177a6.9 6.9 0 0 0 6.8-7c0-3.87-3.04-7-6.8-7a6.9 6.9 0 0 0-6.8 7c0 3.87 3.04 7 6.8 7Zm-63.68 8.5c1.88 0 3.4-1.57 3.4-3.5s-1.52-3.5-3.4-3.5a3.45 3.45 0 0 0-3.4 3.5c0 1.93 1.52 3.5 3.4 3.5ZM57.85 157c5.64 0 10.2-4.7 10.2-10.5S63.5 136 57.86 136s-10.21 4.7-10.21 10.5S52.2 157 57.84 157Z" />
        </g>
        <g filter="url(#filter24_i_291_657)">
          <path
            d="M145.46 324.74c-4.36-12.92 15.22-33.17-21.5-45.67-7.06-.96-11 8.06-26.5 8.67-15.5.62-15.64-9.69-27-8.67-12.36 1.11-16.58 19.13-25.5 30.67-9.07 11.74-22.73 17.04-21.93 24.15 3.31 16.17 20.4 42.8 39.93 44.85 33.43 3.53 13.07-10.03 61-11.35 47.92-1.32 21.7-28.07 21.5-42.65Z"
            fill="var(--space-rock-grey)"
          />
        </g>
        <g filter="url(#filter25_i_291_657)">
          <path d="M81.46 315.74a12.5 12.5 0 1 0 0-25 12.5 12.5 0 0 0 0 25Zm44.5 2a16 16 0 1 0 0-32 16 16 0 0 0 0 32Z" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_291_657"
          x="1302.37"
          y="196.33"
          width="108.93"
          height="128.78"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter1_i_291_657"
          x="1328.75"
          y="224.82"
          width="67.52"
          height="88.79"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-1.48" dy="1.48" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter2_i_291_657"
          x="1101.62"
          y="302.31"
          width="180.33"
          height="77.76"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter3_i_291_657"
          x="1201.52"
          y="320.52"
          width="66.66"
          height="40.91"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-5.6" dy="5.6" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter4_i_291_657"
          x="1098"
          y="123"
          width="200.13"
          height="113.22"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="25.02" dy="-7.82" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter5_i_291_657"
          x="1141.83"
          y="145.83"
          width="125.82"
          height="69.83"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-4.91" dy="4.91" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter6_i_291_657"
          x="944.86"
          y="231.93"
          width="137.65"
          height="76.68"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="3" dy="-3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter7_i_291_657"
          x="985.89"
          y="246.42"
          width="63.41"
          height="43.27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-2.4" dy="2.4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter8_i_291_657"
          x="973.48"
          y="119.63"
          width="60.22"
          height="55.35"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="7.25" dy="-2.27" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter9_i_291_657"
          x="997.13"
          y="136.83"
          width="14.51"
          height="27.86"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-1.99" dy="1.99" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter10_i_291_657"
          x="722.35"
          y="32.21"
          width="213.36"
          height="185.27"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="19.79" dy="-6.18" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter11_i_291_657"
          x="786.36"
          y="71.87"
          width="98.7"
          height="57.85"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-3.56" dy="3.56" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter12_i_291_657"
          x="599"
          y="186"
          width="143.3"
          height="79.38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="3" dy="-3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter13_i_291_657"
          x="636.13"
          y="206.15"
          width="87"
          height="47"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-2.4" dy="2.4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter14_i_291_657"
          x="480"
          y="44"
          width="126.2"
          height="119.18"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter15_i_291_657"
          x="512.12"
          y="82.85"
          width="58"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-4.38" dy="4.38" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter16_i_291_657"
          x="401.66"
          y="186.75"
          width="127.76"
          height="77.07"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter17_i_291_657"
          x="437.7"
          y="216.33"
          width="61.01"
          height="25.6"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-4.38" dy="4.38" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter18_i_291_657"
          x="260.81"
          y="35.94"
          width="107.36"
          height="109.26"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="3" dy="-3" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter19_i_291_657"
          x="290.83"
          y="61.32"
          width="53.85"
          height="61.24"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-2.4" dy="2.4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter20_i_291_657"
          x="207.31"
          y="182.46"
          width="139.29"
          height="131.67"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter21_i_291_657"
          x="236.8"
          y="201.83"
          width="94.56"
          height="70.07"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-3.29" dy="3.29" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter22_i_291_657"
          x="0"
          y="124"
          width="175.08"
          height="77.66"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter23_i_291_657"
          x="47.64"
          y="136"
          width="84.58"
          height="49.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-2.88" dy="2.88" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter24_i_291_657"
          x="23"
          y="279"
          width="129.8"
          height="100.33"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="-5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
        <filter
          id="filter25_i_291_657"
          x="68.96"
          y="285.74"
          width="73"
          height="32"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-4.38" dy="4.38" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="shape" result="effect1_innerShadow_291_657" />
        </filter>
      </defs>
    </svg>
  );
};
