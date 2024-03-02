import { SVGProps } from "react";

export const CommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="currentColor"
    aria-label="Comment"
    {...props}
  >
    <title>{"Comment"}</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
    />
  </svg>
);
