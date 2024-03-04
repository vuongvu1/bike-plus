import { SVGProps } from "react";

export const SendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="currentColor" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 3 9.218 10.083M11.698 20.334 22 3.001H2l7.218 7.083 2.48 10.25z"
    />
  </svg>
);
