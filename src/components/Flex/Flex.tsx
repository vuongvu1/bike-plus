import React, { CSSProperties } from "react";
import styles from "./Flex.module.css";

interface FlexProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  className,
  style,
  children,
}) => {
  const customStyle = {
    "--flex-direction": direction,
    "--flex-justify": justify,
    "--flex-align": align,
    ...style,
  } as CSSProperties;

  return (
    <div style={customStyle} className={`${styles.flex} ${className}`}>
      {children}
    </div>
  );
};
