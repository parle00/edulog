import React from "react";
import styles from "@/styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>Yükleniyor...</p>
    </div>
  );
};

export default Loading;
