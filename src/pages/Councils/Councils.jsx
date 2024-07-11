import { useTranslation } from "react-i18next";
import styles from "./councils.module.css";

export const Councils = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="container">
          <h2>{t("councils")}</h2>
        </div>
      </div>
      
    </section>
  );
};
