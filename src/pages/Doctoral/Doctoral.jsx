import { useTranslation } from "react-i18next";
import styles from "./doctoral.module.css";

export const Doctoral = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="contanier">
          <h2>{t("doctorals")}</h2>
        </div>
      </div>
    
     
    </section>
  );
};
