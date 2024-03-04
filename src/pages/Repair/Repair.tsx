import React from "react";
import styles from "./Repair.module.css";
import { Typography } from "../../components/Typography";
import { useDevice } from "../../hooks/useDevice";

const Repair: React.FC = () => {
  const currentDevice = useDevice();
  const isDesktop = currentDevice === "desktop";

  return (
    <div className={styles.body}>
      <Typography variant="h1">
        You can find the closest repair shops here:
      </Typography>
      <iframe
        src="https://maps.google.com/maps?q=berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width={isDesktop ? "600" : "440"}
        height="440"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default Repair;
