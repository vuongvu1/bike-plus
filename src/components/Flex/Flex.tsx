import React, { CSSProperties } from "react";
import styles from "./style.module.css";

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
  children: React.ReactNode;
}

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  children,
}) => {
  const style = {
    "--flex-direction": direction,
    "--flex-justify": justify,
    "--flex-align": align,
  } as CSSProperties;

  return (
    <div style={style} className={styles.flex}>
      {children}
    </div>
  );
};
