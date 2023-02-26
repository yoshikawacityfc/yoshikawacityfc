import { ScrollAnimation } from "@/components/Elements";
import { useRef } from "react";

export const YoshikawaCity = (): JSX.Element => {
  const pathRef = useRef<SVGPathElement>(null);

  const startAnimation = () => {
    if (pathRef.current === null) return;

    pathRef.current.classList.add("yoshikawa-city-outline");
  };

  return (
    <div className="w-1/2 min-w-[360px] relative">
      <ScrollAnimation beforeReveal={startAnimation}>
        <svg
          className="absolute top-0 left-0 bottom-1 right-0 m-auto z-10 w-full h-full"
          width="389"
          height="536"
          viewBox="0 0 389 536"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M48.5247 107.149V136.625C48.5247 139.865 51.5588 142.249 54.7068 141.483L69.086 137.984C70.1999 137.713 71.3732 137.833 72.4092 138.324L80.9534 142.373C81.801 142.774 82.5186 143.406 83.0241 144.196L90.9336 156.559C91.5502 157.523 92.4785 158.246 93.5638 158.608L106.536 162.934C108.577 163.614 109.954 165.525 109.954 167.677V174.798C109.954 176.389 109.198 177.884 107.917 178.826L49.3025 221.94C48.7887 222.318 48.2073 222.594 47.5897 222.754L13.5305 231.546C12.0494 231.929 10.8247 232.968 10.2066 234.367L1.42681 254.245C0.451263 256.453 1.19334 259.044 3.1904 260.401L61.391 299.947C62.7608 300.878 63.5808 302.427 63.5808 304.083V318.575C63.5808 319.193 63.4666 319.804 63.2439 320.38L56.9212 336.719C56.5519 337.674 56.4844 338.718 56.7277 339.713L63.4374 367.12C63.5327 367.509 63.5808 367.909 63.5808 368.309V464.472C63.5808 465.024 63.4896 465.572 63.3108 466.093L56.9553 484.637C56.5673 485.769 56.5983 487.003 57.0426 488.114L63.2235 503.572C63.4596 504.162 63.5808 504.792 63.5808 505.428V529.491C63.5808 533.479 68.0203 535.862 71.3438 533.659L114.118 505.298C114.937 504.755 115.898 504.465 116.881 504.465H147.941C148.703 504.465 149.456 504.291 150.141 503.955L208.284 475.455C208.969 475.119 209.721 474.945 210.484 474.945H382.035C385.566 474.945 387.984 471.383 386.682 468.101L359.565 399.742C359.379 399.273 359.265 398.778 359.227 398.275L353.354 320.723C353.294 319.925 353.043 319.154 352.623 318.473L244.255 142.987L193.2 41.4338C192.72 40.4803 191.949 39.7052 190.997 39.2219L117.476 1.8736C116.145 1.19744 114.582 1.15144 113.213 1.74817L93.9981 10.1269C92.6581 10.7112 91.1294 10.6798 89.8145 10.0409L72.2422 1.50277C71.3091 1.04939 70.2581 0.897472 69.2348 1.06808L49.6938 4.32608C46.0731 4.92975 44.3154 9.099 46.4111 12.1126L69.3062 45.0361C70.2462 46.3879 70.4605 48.1158 69.8791 49.6563L48.8467 105.384C48.6338 105.948 48.5247 106.546 48.5247 107.149Z"
            stroke="#2E0075"
            strokeWidth={2}
          />
        </svg>
      </ScrollAnimation>

      <ScrollAnimation delay={1500}>
        <img
          src="../spike-and-ball-yoshikawa.png"
          alt="spike-and-ball"
          className="w-full"
        />
      </ScrollAnimation>
    </div>
  );
};
