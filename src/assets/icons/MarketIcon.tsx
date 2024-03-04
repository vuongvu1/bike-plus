import { SVGProps } from "react";

export const MarketIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="currentColor" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13.941 13.953-6.36 2.471 2.479-6.368 6.36-2.471-2.479 6.368z"
    />
    <path
      fillRule="evenodd"
      d="m10.06 10.056 3.889 3.889-6.368 2.479 2.479-6.368z"
    />
    <circle
      cx={12.001}
      cy={12.005}
      r={10.5}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
