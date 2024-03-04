import { SVGProps } from "react";

export const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="currentColor" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 21-8-7.56L4 21V3h16v18z"
    />
  </svg>
);
