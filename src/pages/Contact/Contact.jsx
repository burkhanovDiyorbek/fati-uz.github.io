import { useTranslation } from "react-i18next";
import PageTop from "../../components/PageTop/PageTop";
import styles from "./contact.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const Contact = ({ setLoading, loading }) => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/qoshimcha-malumotlar/aloqa/")
          .then((req) => setData(req.data.results));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, []);
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
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
                <p>{data?.[0]?.adress}</p>
              </li>
              <li>
                <b>{t("phone")}</b>
                <p>{data?.[0]?.phone}</p>
              </li>
              <li>
                <b>{t("fax")}</b>
                <p>{data?.[0]?.faks}</p>
              </li>
              <li>
                <b>{t("email")}</b>
                <p>{data?.[0]?.email}</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
