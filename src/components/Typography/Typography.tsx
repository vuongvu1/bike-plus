import React, { CSSProperties } from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  color?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  color,
}) => {
  const Component = variant;

  const customStyle = {
    "--typography-color": color,
  } as CSSProperties;

  return (
    <Component style={customStyle} className={styles[variant]}>
      {children}
    </Component>
  );
};
