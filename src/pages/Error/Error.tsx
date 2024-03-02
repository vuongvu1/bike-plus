import React from "react";
import { Flex } from "../../components/Flex";
import styles from "./Error.module.css";

const ErrorPage: React.FC = () => {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      className={styles.error}
    >
      <h1>Error 404</h1>
      <p>Oops! The page you're looking for cannot be found.</p>
    </Flex>
  );
};

export default ErrorPage;
