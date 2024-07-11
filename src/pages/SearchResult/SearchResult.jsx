// import { useTranslation } from "react-i18next";
import PageTop from "../../components/PageTop/PageTop";
import styles from "./search-result.module.css";

export const SearchResult = () => {
  // const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <PageTop data={{ h2: "search-results" }} />
    </section>
  );
};
