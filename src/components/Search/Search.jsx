import { CiSearch } from "react-icons/ci";
import styles from "./search.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const Search = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const ref = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault()
    ref.current?.value?.trim() && navigate("/search/" + ref.current?.value?.trim());
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("search")}
        spellCheck="false"
        ref={ref}
      />
      <CiSearch />
    </form>
  );
};
