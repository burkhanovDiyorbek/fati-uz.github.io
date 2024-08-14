import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import axios from "axios";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const ScCouncil = ({ setLoading, loading }) => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/kengashlar/ilmiy_kengash_majlis/")
          .then((req) => setData(req.data.results));
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
    <section>
      <PageTop data={{ h2: "sc-council" }} />
      {data?.map((item) => {
        return (
          <div className="container" key={item?.id}>
            <div className="section-slice">
              <div className="row1">
                <h2>{item?.[`title_${lang}`]}</h2>
                <img src={item?.file} alt="" />
              </div>
              <div className="row2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: item?.[`subcontent`],
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

ScCouncil.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.any,
};
