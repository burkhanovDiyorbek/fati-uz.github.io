import { useTranslation } from "react-i18next";
import PageTop from "../../components/PageTop/PageTop";
import styles from "./contact.module.css";

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <PageTop data={{ h2: "contact" }} />
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("contact")}</h2>
          </div>
          <div className="row2">
            <ol>
              <li>
                <b>{t("address")}</b>
                <p>
                  100060, Toshkent shahri, Mirobod tumani, Shahrisabz tor ko
                  {"'"}chasi, 5-uy
                </p>
              </li>
              <li>
                <b>{t("phone")}</b>
                <p>+99871 233-54-70, +99871 233-62-01</p>
              </li>
              <li>
                <b>{t("fax")}</b>
                <p>+99871 233-39-91</p>
              </li>
              <li>
                <b>{t("email")}</b>
                <p>info@fati.uz</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
