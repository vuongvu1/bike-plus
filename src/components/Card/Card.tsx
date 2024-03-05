import React from "react";
import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <article className={`${styles.card} ${className}`}>{children}</article>
  );
};

type CardContentProps = {
  children: React.ReactNode;
};

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

type CardMediaProps = {
  src: string;
  alt: string;
};

export const CardMedia: React.FC<CardMediaProps> = ({ src, alt }) => {
  return <img className={styles.media} src={src} alt={alt} />;
};

export const CardDivider: React.FC = () => {
  return <hr className={styles.divider} />;
};
