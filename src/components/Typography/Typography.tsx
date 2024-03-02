import React from "react";
import styles from "./Typography.module.css";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
}) => {
  const Component = variant;

  return <Component className={styles[variant]}>{children}</Component>;
};
