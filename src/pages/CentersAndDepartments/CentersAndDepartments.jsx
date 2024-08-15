import styles from "./centers-and-departments.module.css";
import PageTop from "../../components/PageTop/PageTop";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const CentersAndDepartments = ({ setLoading, loading }) => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/markazlar-va-bolimlar/markazlar_bolimlar/" + id)
          .then((req) => setData(req.data));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
      }
    };
    fetchData();
  }, []);
  console.log(data);
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section className={styles.section}>
      <PageTop data={{ h2: data?.[`title_${lang}`] }} />
      <Slider slideData={data?.slider} />
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>{t("history")}</h2>
          </div>
          <div className="row2">
            <p dangerouslySetInnerHTML={{ __html: data?.[`tarix_${lang}`] }} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="community">
          <h2 className="title">{t("staff")}</h2>
          <div className="cards">
            {data?.xodimlar?.map((item, index) => {
              return (
                <div className="card" key={item?.id * Math.random() || index}>
                  <div className="content">
                    <p>{item?.[`lavozim_${lang}`]}</p>
                    <h2>{item?.[`name_${lang}`]}</h2>
                    <span>{item?.[`ilmiy_daraja_${lang}`]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img-cards" style={{ marginTop: "70px" }}>
          <h2>{t("gallery")}</h2>
          <div className="cards">
            {data?.fotogalereya?.map((item, index) => {
              return (
                <div className="card" key={item?.id + Math.random() || index}>
                  <img src={item?.img_url} alt="not found" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

CentersAndDepartments.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
