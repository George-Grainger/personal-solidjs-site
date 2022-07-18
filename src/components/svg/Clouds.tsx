import { VoidSVG } from './svg-types';
import styles from './Svg.module.css';
import { splitProps } from 'solid-js';

export const FullPageCloudGroup1: VoidSVG = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <svg
      viewBox="0 0 1355 350"
      fill="var(--cloud-white)"
      class={`${styles.fullPageclouds} ${local.class || ''}`}
      {...others}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class={styles.moveToLeft}>
        <path d="M149.806 114.535C159.877 114.535 169.339 117.227 177.557 121.954C185.381 115.623 195.229 111.85 205.929 111.85C221.788 111.85 235.777 120.139 244.073 132.76C253.948 124.357 266.595 119.312 280.38 119.312C290.451 119.312 299.913 122.004 308.131 126.731C315.955 120.4 325.803 116.627 336.503 116.627C356.28 116.627 373.149 129.518 379.697 147.625C390.232 153.481 398.512 163.117 402.843 174.778C415.67 179.477 425.891 189.886 430.653 203.055C446.409 211.813 457.121 229.025 457.121 248.826C457.121 272.828 441.38 293.026 419.996 298.975C412.376 317.611 394.539 330.688 373.75 330.688C362.746 330.688 352.57 327.025 344.298 320.813C337.55 324.303 329.937 326.267 321.88 326.267C316.987 326.267 312.258 325.543 307.787 324.193C302.08 326.525 295.862 327.806 289.354 327.806C279.182 327.806 269.717 324.676 261.81 319.296C253.217 326.424 242.308 330.688 230.436 330.688C219.433 330.688 209.257 327.025 200.985 320.813C194.237 324.303 186.624 326.267 178.567 326.267C173.674 326.267 168.945 325.543 164.474 324.193C158.767 326.525 152.549 327.806 146.041 327.806C135.038 327.806 124.861 324.143 116.589 317.931C109.842 321.422 102.228 323.386 94.1712 323.386C82.2766 323.386 71.3483 319.105 62.7472 311.952C58.9106 310.716 55.501 308.479 52.8043 305.537C50.7244 305.832 48.6005 305.984 46.4423 305.984C20.793 305.984 0 284.49 0 257.975C0 237.403 12.5168 219.854 30.1071 213.02C30.1047 212.879 30.1035 212.737 30.1035 212.596C30.1035 201.429 37.4796 192.043 47.4699 189.361C51.0916 173.827 62.0202 161.237 76.2857 155.695C76.2833 155.554 76.2822 155.412 76.2822 155.27C76.2822 142.013 86.6786 131.266 99.5032 131.266C102.603 131.266 105.561 131.894 108.265 133.033C118.688 121.642 133.445 114.535 149.806 114.535Z" />
        <path d="M430.186 31.2665C440.682 31.2665 450.545 34.0725 459.111 38.9988C467.266 32.4002 477.531 28.4676 488.683 28.4676C509.297 28.4676 526.88 41.9035 533.705 60.7773C544.757 66.9208 553.428 77.0545 557.918 89.3154C562.883 90.634 567.598 92.5974 571.974 95.1144C580.129 88.5157 590.394 84.5831 601.546 84.5831C622.161 84.5831 639.743 98.019 646.568 116.893C662.991 126.022 674.157 143.963 674.157 164.601C674.157 189.619 657.75 210.672 635.461 216.872C627.519 236.297 608.927 249.927 587.257 249.927C575.788 249.927 565.181 246.109 556.559 239.634C549.526 243.272 541.591 245.32 533.193 245.32C528.093 245.32 523.164 244.565 518.503 243.157C512.555 245.588 506.074 246.924 499.29 246.924C488.688 246.924 478.823 243.661 470.581 238.053C461.624 245.483 450.253 249.927 437.88 249.927C426.411 249.927 415.804 246.109 407.181 239.634C400.149 243.272 392.213 245.32 383.815 245.32C378.715 245.32 373.786 244.565 369.126 243.157C363.178 245.588 356.696 246.924 349.913 246.924C338.444 246.924 327.837 243.105 319.215 236.631C312.182 240.269 304.246 242.316 295.848 242.316C283.45 242.316 272.059 237.854 263.094 230.398C259.095 229.11 255.541 226.779 252.731 223.712C250.563 224.019 248.349 224.178 246.099 224.178C219.365 224.178 197.692 201.774 197.692 174.137C197.692 152.695 210.738 134.403 229.073 127.28C229.07 127.133 229.069 126.985 229.069 126.838C229.069 113.019 239.906 101.817 253.273 101.817C256.504 101.817 259.587 102.472 262.405 103.659C273.27 91.7858 288.651 84.3785 305.705 84.3785C315.166 84.3785 324.113 86.6586 332.059 90.7164C337.53 83.2973 344.962 77.5059 353.554 74.1679C353.552 74.0207 353.551 73.8733 353.551 73.7255C353.551 59.9072 364.387 48.7052 377.754 48.7052C380.985 48.7052 384.068 49.3597 386.886 50.5474C397.751 38.6738 413.132 31.2665 430.186 31.2665Z" />
        <path d="M582.29 2.72659C592.515 2.72659 602.123 5.46015 610.468 10.2592C618.412 3.831 628.412 -1.52588e-05 639.277 -1.52588e-05C655.38 -1.52588e-05 669.584 8.41643 678.009 21.2318C688.036 12.7 700.877 7.57725 714.875 7.57725C725.1 7.57725 734.708 10.3108 743.053 15.1099C750.997 8.68166 760.997 4.85065 771.861 4.85065C791.943 4.85065 809.072 17.9396 815.721 36.3259C826.418 42.2724 834.825 52.0562 839.223 63.8973C852.248 68.6685 862.626 79.238 867.461 92.6091C883.46 101.503 894.337 118.98 894.337 139.085C894.337 163.457 878.354 183.966 856.64 190.006C848.903 208.93 830.791 222.208 809.682 222.208C798.509 222.208 788.176 218.488 779.776 212.181C772.925 215.725 765.194 217.719 757.013 217.719C752.045 217.719 747.243 216.984 742.703 215.612C736.909 217.981 730.595 219.282 723.987 219.282C713.658 219.282 704.048 216.103 696.018 210.64C687.293 217.878 676.216 222.208 664.162 222.208C652.989 222.208 642.656 218.488 634.256 212.181C627.405 215.725 619.674 217.719 611.493 217.719C606.525 217.719 601.723 216.984 597.183 215.612C591.389 217.981 585.075 219.282 578.467 219.282C567.294 219.282 556.961 215.562 548.561 209.255C541.71 212.799 533.979 214.793 525.798 214.793C513.72 214.793 502.624 210.447 493.89 203.183C489.995 201.928 486.533 199.657 483.794 196.67C481.682 196.969 479.526 197.123 477.334 197.123C451.29 197.123 430.177 175.298 430.177 148.375C430.177 127.487 442.886 109.667 460.748 102.728C460.745 102.585 460.744 102.441 460.744 102.297C460.744 90.9583 468.234 81.4279 478.378 78.7041C482.055 62.9309 493.152 50.1472 507.637 44.52C507.635 44.3767 507.634 44.233 507.634 44.0891C507.634 30.6277 518.19 19.715 531.212 19.715C534.36 19.715 537.364 20.3525 540.109 21.5095C550.693 9.94262 565.677 2.72659 582.29 2.72659Z" />
      </g>
      <g class={styles.moveToRight}>
        <path d="M935.795 57.2635C945.877 57.2635 955.35 59.9711 963.578 64.7245C971.41 58.3575 981.27 54.5629 991.982 54.5629C1011.78 54.5629 1028.67 67.5272 1035.23 85.7386C1045.84 91.6665 1054.17 101.445 1058.48 113.275C1063.25 114.547 1067.78 116.442 1071.98 118.871C1079.82 112.503 1089.68 108.709 1100.39 108.709C1120.19 108.709 1137.08 121.673 1143.63 139.885C1159.41 148.694 1170.13 166.004 1170.13 185.918C1170.13 210.058 1154.37 230.372 1132.96 236.355C1125.34 255.098 1107.48 268.25 1086.66 268.25C1075.65 268.25 1065.46 264.566 1057.18 258.318C1050.42 261.829 1042.8 263.804 1034.73 263.804C1029.84 263.804 1025.1 263.076 1020.63 261.717C1014.91 264.063 1008.69 265.352 1002.17 265.352C991.987 265.352 982.511 262.203 974.595 256.792C965.992 263.961 955.07 268.25 943.185 268.25C932.169 268.25 921.98 264.566 913.699 258.318C906.944 261.829 899.321 263.804 891.255 263.804C886.356 263.804 881.622 263.076 877.146 261.717C871.433 264.063 865.207 265.352 858.691 265.352C847.675 265.352 837.487 261.667 829.205 255.42C822.45 258.931 814.828 260.906 806.761 260.906C794.853 260.906 783.912 256.601 775.301 249.406C771.46 248.163 768.046 245.914 765.346 242.955C763.264 243.251 761.138 243.404 758.977 243.404C733.298 243.404 712.481 221.787 712.481 195.12C712.481 174.43 725.012 156.78 742.623 149.907C742.62 149.765 742.619 149.623 742.619 149.48C742.619 136.147 753.028 125.338 765.867 125.338C768.971 125.338 771.932 125.97 774.639 127.116C785.074 115.659 799.848 108.511 816.229 108.511C825.317 108.511 833.91 110.712 841.543 114.627C846.798 107.468 853.936 101.88 862.189 98.6592C862.187 98.5172 862.185 98.375 862.185 98.2324C862.185 84.8991 872.594 74.0902 885.433 74.0902C888.537 74.0902 891.498 74.7217 894.205 75.8677C904.641 64.4109 919.414 57.2635 935.795 57.2635Z" />
        <path d="M994.252 95.671C1006.07 95.671 1017.17 98.8304 1026.82 104.377C1036 96.9474 1047.56 92.5197 1060.12 92.5197C1078.73 92.5197 1095.14 102.247 1104.88 117.059C1116.47 107.198 1131.31 101.277 1147.49 101.277C1159.31 101.277 1170.41 104.437 1180.06 109.983C1189.24 102.554 1200.8 98.1259 1213.35 98.1259C1236.56 98.1259 1256.36 113.254 1264.05 134.504C1276.41 141.377 1286.13 152.685 1291.21 166.371C1306.26 171.885 1318.26 184.101 1323.85 199.555C1342.34 209.834 1354.91 230.033 1354.91 253.271C1354.91 281.439 1336.44 305.143 1311.34 312.124C1302.4 333.995 1281.46 349.342 1257.07 349.342C1244.15 349.342 1232.21 345.043 1222.5 337.753C1214.58 341.849 1205.65 344.154 1196.19 344.154C1190.45 344.154 1184.9 343.304 1179.65 341.719C1172.96 344.456 1165.66 345.96 1158.02 345.96C1146.08 345.96 1134.98 342.286 1125.7 335.972C1115.61 344.338 1102.81 349.342 1088.88 349.342C1075.96 349.342 1064.02 345.043 1054.31 337.753C1046.39 341.849 1037.46 344.154 1028 344.154C1022.26 344.154 1016.71 343.304 1011.47 341.719C1004.77 344.456 997.471 345.96 989.833 345.96C976.92 345.96 964.977 341.661 955.269 334.371C947.351 338.467 938.416 340.772 928.96 340.772C915.001 340.772 902.176 335.749 892.082 327.354C887.579 325.903 883.578 323.278 880.413 319.826C877.972 320.171 875.48 320.35 872.947 320.35C842.845 320.35 818.443 295.125 818.443 264.008C818.443 239.865 833.133 219.27 853.776 211.25C853.773 211.084 853.772 210.918 853.772 210.752C853.772 197.647 862.428 186.632 874.153 183.484C878.403 165.254 891.229 150.479 907.97 143.975C907.967 143.809 907.966 143.643 907.966 143.477C907.966 127.918 920.167 115.306 935.218 115.306C938.855 115.306 942.327 116.043 945.5 117.38C957.732 104.011 975.05 95.671 994.252 95.671Z" />
      </g>
    </svg>
  );
};

export const FullPageCloudGroup2: VoidSVG = (props) => {
  const [local, others] = splitProps(props, ['class']);

  return (
    <svg
      viewBox="0 0 1378 507"
      fill="var(--cloud-white)"
      class={`${styles.aboutClouds} ${styles.fullPageclouds} ${local.class || ''}`}
      {...others}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class={styles.moveToLeft}>
        <path d="M373.444 46.3958C386.179 46.3958 398.145 49.8002 408.538 55.7771C418.431 47.7712 430.886 43 444.416 43C464.472 43 482.162 53.482 492.654 69.4425C505.142 58.8169 521.135 52.4369 538.568 52.4369C551.303 52.4369 563.269 55.8413 573.661 61.8182C583.555 53.8123 596.009 49.0411 609.54 49.0411C634.55 49.0411 655.882 65.3423 664.163 88.241C677.486 95.6468 687.957 107.832 693.433 122.579C709.655 128.521 722.58 141.684 728.602 158.337C748.527 169.413 762.074 191.18 762.074 216.219C762.074 246.572 742.168 272.115 715.125 279.637C705.49 303.205 682.932 319.741 656.642 319.741C642.727 319.741 629.858 315.109 619.397 307.254C610.865 311.668 601.237 314.151 591.048 314.151C584.86 314.151 578.88 313.236 573.226 311.528C566.01 314.477 558.146 316.097 549.916 316.097C537.053 316.097 525.083 312.139 515.084 305.335C504.217 314.349 490.422 319.741 475.409 319.741C461.494 319.741 448.625 315.109 438.164 307.254C429.632 311.668 420.004 314.151 409.815 314.151C403.627 314.151 397.647 313.236 391.993 311.528C384.777 314.477 376.913 316.097 368.683 316.097C354.768 316.097 341.899 311.465 331.438 303.61C322.906 308.024 313.277 310.507 303.089 310.507C288.047 310.507 274.227 305.094 263.35 296.048C258.498 294.485 254.186 291.657 250.776 287.936C248.146 288.309 245.46 288.501 242.731 288.501C210.295 288.501 184 261.319 184 227.789C184 201.774 199.829 179.581 222.073 170.939C222.07 170.761 222.069 170.582 222.069 170.403C222.069 156.281 231.397 144.412 244.03 141.02C248.61 121.375 262.431 105.454 280.471 98.446C280.468 98.2675 280.466 98.0886 280.466 97.9094C280.466 81.1443 293.613 67.5534 309.831 67.5534C313.751 67.5534 317.492 68.3474 320.911 69.7884C334.092 55.3827 352.754 46.3958 373.444 46.3958Z" />
        <path d="M675.424 3.27958C687.723 3.27958 699.28 6.56753 709.317 12.3399C718.872 4.60798 730.9 0 743.968 0C768.122 0 788.725 15.7435 796.722 37.8587C809.672 45.0574 819.832 56.9315 825.093 71.2981C830.911 72.8431 836.435 75.1438 841.564 78.093C851.119 70.3611 863.147 65.7531 876.215 65.7531C900.369 65.7531 920.972 81.4965 928.969 103.612C948.212 114.309 961.296 135.331 961.296 159.514C961.296 188.828 942.071 213.497 915.954 220.762C906.648 243.523 884.862 259.494 859.471 259.494C846.033 259.494 833.604 255.02 823.501 247.433C815.26 251.697 805.962 254.095 796.121 254.095C790.146 254.095 784.37 253.211 778.909 251.561C771.94 254.41 764.345 255.975 756.397 255.975C743.974 255.975 732.414 252.151 722.756 245.58C712.261 254.286 698.938 259.494 684.439 259.494C671 259.494 658.571 255.02 648.468 247.433C640.228 251.697 630.929 254.095 621.089 254.095C615.113 254.095 609.337 253.211 603.877 251.561C596.907 254.41 589.312 255.975 581.364 255.975C567.925 255.975 555.497 251.501 545.394 243.914C537.153 248.177 527.854 250.576 518.014 250.576C503.487 250.576 490.14 245.348 479.635 236.611C474.949 235.102 470.785 232.37 467.492 228.777C464.951 229.137 462.357 229.322 459.721 229.322C428.395 229.322 403 203.071 403 170.688C403 145.563 418.287 124.129 439.771 115.783C439.768 115.61 439.766 115.438 439.766 115.264C439.766 99.0729 452.464 85.947 468.127 85.947C471.913 85.947 475.526 86.7139 478.827 88.1056C491.558 74.1928 509.581 65.5133 529.564 65.5133C540.65 65.5133 551.134 68.185 560.445 72.9398C566.855 64.2464 575.563 57.4604 585.631 53.549C585.628 53.3766 585.627 53.2039 585.627 53.0308C585.627 36.8392 598.324 23.7133 613.987 23.7133C617.773 23.7133 621.386 24.4802 624.688 25.8719C637.418 11.9591 655.441 3.27958 675.424 3.27958Z" />
        <path d="M196.513 219.38C209.723 219.38 222.136 222.911 232.916 229.111C243.179 220.806 256.098 215.857 270.133 215.857C290.937 215.857 309.288 226.73 320.171 243.286C333.125 232.264 349.714 225.646 367.798 225.646C381.008 225.646 393.42 229.178 404.201 235.378C414.464 227.073 427.383 222.124 441.418 222.124C467.362 222.124 489.49 239.033 498.08 262.786C511.899 270.468 522.761 283.108 528.442 298.405C545.269 304.569 558.676 318.224 564.922 335.498C585.591 346.987 599.644 369.566 599.644 395.54C599.644 427.025 578.995 453.521 550.943 461.324C540.948 485.771 517.549 502.925 490.278 502.925C475.844 502.925 462.495 498.12 451.644 489.971C442.793 494.55 432.805 497.126 422.236 497.126C415.818 497.126 409.614 496.176 403.749 494.405C396.264 497.464 388.106 499.145 379.569 499.145C366.226 499.145 353.81 495.038 343.438 487.981C332.165 497.331 317.855 502.925 302.282 502.925C287.848 502.925 274.499 498.12 263.648 489.971C254.797 494.55 244.81 497.126 234.241 497.126C227.822 497.126 221.619 496.176 215.754 494.405C208.268 497.464 200.111 499.145 191.574 499.145C177.14 499.145 163.791 494.34 152.94 486.191C144.089 490.77 134.101 493.346 123.532 493.346C107.929 493.346 93.5934 487.731 82.3107 478.347C77.2778 476.726 72.8052 473.792 69.2678 469.933C66.5393 470.319 63.7533 470.519 60.9222 470.519C27.2759 470.519 0 442.323 0 407.541C0 380.556 16.4193 357.534 39.4939 348.57C39.4908 348.385 39.4893 348.199 39.4893 348.014C39.4893 333.365 49.165 321.053 62.2702 317.534C67.0211 297.157 81.357 280.642 100.07 273.372C100.067 273.187 100.066 273.001 100.066 272.815C100.066 255.425 113.703 241.327 130.527 241.327C134.593 241.327 138.473 242.15 142.02 243.645C155.693 228.702 175.05 219.38 196.513 219.38Z" />
      </g>
      <g class={styles.moveToRight}>
        <path d="M956.471 90.4859C969.544 90.4859 981.827 93.9806 992.495 100.116C1002.65 91.8978 1015.44 87 1029.33 87C1049.91 87 1068.07 97.7601 1078.84 114.144C1091.66 103.237 1108.08 96.6872 1125.98 96.6872C1139.05 96.6872 1151.33 100.182 1162 106.317C1172.16 98.0992 1184.94 93.2014 1198.83 93.2014C1224.5 93.2014 1246.4 109.935 1254.9 133.441C1268.58 141.044 1279.33 153.552 1284.95 168.69C1301.6 174.79 1314.87 188.303 1321.05 205.397C1341.5 216.767 1355.41 239.111 1355.41 264.815C1355.41 295.973 1334.98 322.194 1307.22 329.916C1297.33 354.109 1274.17 371.084 1247.18 371.084C1232.9 371.084 1219.69 366.329 1208.95 358.265C1200.19 362.796 1190.31 365.346 1179.85 365.346C1173.5 365.346 1167.36 364.406 1161.55 362.652C1154.15 365.68 1146.07 367.343 1137.62 367.343C1124.42 367.343 1112.13 363.28 1101.87 356.295C1090.71 365.549 1076.55 371.084 1061.14 371.084C1046.86 371.084 1033.65 366.329 1022.91 358.265C1014.15 362.796 1004.27 365.346 993.806 365.346C987.455 365.346 981.315 364.406 975.511 362.652C968.104 365.68 960.031 367.343 951.583 367.343C937.299 367.343 924.088 362.588 913.35 354.524C904.591 359.055 894.707 361.605 884.248 361.605C868.807 361.605 854.621 356.048 843.455 346.762C838.475 345.158 834.048 342.254 830.548 338.435C827.848 338.817 825.091 339.015 822.289 339.015C788.992 339.015 762 311.112 762 276.692C762 249.987 778.249 227.205 801.083 218.334C801.08 218.15 801.079 217.967 801.079 217.783C801.079 203.287 810.654 191.103 823.623 187.62C828.325 167.455 842.511 151.111 861.03 143.917C861.027 143.734 861.026 143.55 861.026 143.366C861.026 126.156 874.522 112.205 891.17 112.205C895.194 112.205 899.034 113.02 902.544 114.499C916.075 99.7113 935.231 90.4859 956.471 90.4859Z" />
        <path d="M639.727 215.616C653.288 215.616 666.029 219.241 677.096 225.605C687.631 217.081 700.893 212 715.301 212C736.656 212 755.494 223.162 766.666 240.157C779.964 228.842 796.993 222.049 815.557 222.049C829.117 222.049 841.859 225.674 852.925 232.038C863.46 223.513 876.722 218.433 891.13 218.433C917.762 218.433 940.477 235.791 949.295 260.174C963.481 268.06 974.631 281.035 980.463 296.738C997.736 303.066 1011.5 317.083 1017.91 334.815C1039.13 346.609 1053.55 369.787 1053.55 396.45C1053.55 428.771 1032.36 455.969 1003.56 463.98C993.301 489.075 969.281 506.684 941.286 506.684C926.469 506.684 912.766 501.751 901.627 493.387C892.541 498.087 882.288 500.732 871.439 500.732C864.851 500.732 858.482 499.756 852.462 497.938C844.778 501.078 836.404 502.804 827.64 502.804C813.943 502.804 801.198 498.589 790.55 491.344C778.978 500.942 764.289 506.684 748.303 506.684C733.486 506.684 719.782 501.751 708.643 493.387C699.557 498.087 689.305 500.732 678.455 500.732C671.867 500.732 665.499 499.756 659.478 497.938C651.794 501.078 643.42 502.804 634.657 502.804C619.84 502.804 606.137 497.871 594.997 489.506C585.912 494.207 575.659 496.851 564.81 496.851C548.793 496.851 534.077 491.087 522.495 481.454C517.328 479.79 512.737 476.779 509.106 472.817C506.305 473.213 503.445 473.418 500.539 473.418C466 473.418 438 444.474 438 408.77C438 381.068 454.855 357.436 478.542 348.234C478.539 348.044 478.537 347.854 478.537 347.663C478.537 332.626 488.47 319.987 501.922 316.375C506.799 295.457 521.516 278.504 540.725 271.041C540.722 270.851 540.721 270.66 540.721 270.469C540.721 252.617 554.72 238.145 571.99 238.145C576.164 238.145 580.147 238.991 583.788 240.525C597.824 225.186 617.695 215.616 639.727 215.616Z" />
        <path d="M1080.59 237.402C1093.35 237.402 1105.33 240.813 1115.75 246.8C1125.66 238.78 1138.14 234 1151.69 234C1176.75 234 1198.12 250.331 1206.41 273.271C1219.85 280.739 1230.39 293.056 1235.84 307.959C1241.88 309.561 1247.61 311.948 1252.93 315.007C1262.84 306.986 1275.32 302.207 1288.87 302.207C1313.93 302.207 1335.3 318.537 1343.59 341.478C1363.56 352.574 1377.13 374.38 1377.13 399.466C1377.13 429.874 1357.19 455.463 1330.09 462.999C1320.44 486.61 1297.84 503.177 1271.5 503.177C1257.56 503.177 1244.67 498.536 1234.19 490.666C1225.64 495.088 1216 497.576 1205.79 497.576C1199.59 497.576 1193.6 496.659 1187.94 494.948C1180.71 497.903 1172.83 499.526 1164.58 499.526C1151.7 499.526 1139.71 495.56 1129.69 488.744C1118.8 497.775 1104.98 503.177 1089.94 503.177C1076 503.177 1063.11 498.536 1052.63 490.666C1044.08 495.088 1034.43 497.576 1024.23 497.576C1018.03 497.576 1012.04 496.659 1006.37 494.948C999.143 497.903 991.264 499.526 983.02 499.526C969.079 499.526 956.187 494.885 945.707 487.015C937.159 491.437 927.513 493.926 917.306 493.926C902.236 493.926 888.391 488.503 877.495 479.44C872.634 477.874 868.314 475.041 864.898 471.313C862.263 471.686 859.572 471.879 856.838 471.879C824.343 471.879 798 444.648 798 411.057C798 384.994 813.858 362.76 836.143 354.103C836.14 353.924 836.138 353.745 836.138 353.565C836.138 336.77 849.309 323.154 865.557 323.154C869.484 323.154 873.232 323.949 876.657 325.393C889.862 310.961 908.558 301.958 929.286 301.958C940.786 301.958 951.661 304.729 961.319 309.661C967.969 300.644 977.002 293.604 987.446 289.547C987.443 289.368 987.441 289.189 987.441 289.01C987.441 272.214 1000.61 258.598 1016.86 258.598C1020.79 258.598 1024.53 259.394 1027.96 260.837C1041.17 246.405 1059.86 237.402 1080.59 237.402Z" />
      </g>
    </svg>
  );
};
