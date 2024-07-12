import { useTranslation } from "react-i18next";
import styles from "./internationals.module.css";
import { useState } from "react";

export const Internationals = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="container">
          <h2>{t("internationals")}</h2>
        </div>
      </div>

    </section>
  );
};
