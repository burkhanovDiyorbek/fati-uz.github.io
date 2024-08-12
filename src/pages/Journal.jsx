import { useEffect, useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import { archive } from "../exports/archive";
import { useTranslation } from "react-i18next";
import axios from "axios";
import PropTypes from "prop-types";

export const Journal = ({ setLoading, loading }) => {
  const [archiveYearVal, setArchiveYear] = useState("2000-2005");
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [tahrirchilarData, setTahrirchilarData] = useState([]);
  const [archiveData, setArchiveData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await axios
          .get("/kutobxona/tahrirchilar/")
          .then((req) => setTahrirchilarData(req.data.results));
        await axios
          .get("/kutobxona/arxiv_sonlar/")
          .then((req) => setArchiveData(req.data.results));
        setLoading(false);
      } catch (error) {
        setLoading("show-p");
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(archiveData);
  if (loading === "show-p") {
    return <p className="show-p-error">{t("show-p-error")}</p>;
  }
  if (loading === true) {
    return <div className="loader"></div>;
  }
  return (
    <section>
      <PageTop data={{ h2: "journal" }} />
      <div className="container">
        <h2>{t("journal")}</h2>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1 column">
            <h2>{t("authors")}</h2>
            <img src="./assets/journal.jpg" alt="book jpg" />
          </div>
          <div className="row2">
            <ul>
              {tahrirchilarData?.map((item) => {
                return (
                  <li key={item?.id}>
                    <span>{item?.[`ish_joyi`]}</span>
                    <h4>{item?.[`title_${lang}`]}</h4>
                    <p>{item?.lavozimi}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="aside blue">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/journal.jpg" alt="journal" />
          </div>
          <div className="aside-content">
            <h2>“O‘zbekiston tarixi” jurnali</h2>
            <p style={{ marginBottom: "40px" }}>
              Chop etiladigan ishlarning mazmuni, tili, tuzilishiga oid talablar
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="requirements">
          <p>
            O‘zbek xalqi va davlatchiligi tarixining har qanday masalalasi va
            bosqichiga bag‘ishlangan, ilmiy yangilik bo‘lgan, foydalanilgan
            birlamchi manbalari va ilmiy adabiyotlari aniq ko‘rsatilgan, bosh
            g‘oyasi (mazmuni) ilgari e’lon qilinmagan ishlar (maqolalar,
            axborotlar, kirish so‘zi bilan hujjatlar) qabul qilinadi.
          </p>
          <p>
            Ish Tarix instituti mas’ul xodimi Saodat Nazarova tomonidan hisobga
            olinadi va jurnal bosh muharririga kiritiladi. Bosh muharrir ishni
            taqriz uyushtirish uchun mas’ul kotib Muxtor Shamsiyevga topshiradi.
            Odatda tahrir a’zolari orasidan belgilanadigan taqrizchi besh kun
            ichida o‘zining asoslangan xulosasini taqdim qilishi shart. Xulosaga
            ko‘ra ish chop etishga qabul qilinishi, qayta ishlashga berilishi,
            butunlay qaytarilishi mumkin.
          </p>
          <b>
            <i>Texnik talablar</i>
          </b>
          <p>
            Harflar turi <b>Times New Roman</b>, kattaligi <i>14</i> kegel
            bo‘lishi talab etiladi. Qatorlar o‘rtasidagi oraliq oldin - <i>0</i>{" "}
            va keyin - <i>0</i>
            intervalni tashkil etadi. Satrlar boshi chapdan - <i>0</i> va
            o‘ngdan <i>0</i> sm bo&rsquo;lishi belgilangan. Hoshiyalar chapdan -{" "}
            <i>3</i> sm, o‘ngdan - <i>1.5</i>
            sm, tepadan - <i>2</i> sm, pastdan - <i>2</i> sm tarzida yozilishi
            shart. Xat boshi - chapdan <i>1</i> sm oraliq tashlab yoziladi.
          </p>
        </div>
      </div>
      <div className="container">
        <h2 style={{ marginBottom: "20px" }}>
          <q>{t("journal")}</q> {t("archives")}
        </h2>
      </div>
      <div className="container" style={{ flexDirection: "column" }}>
        <div className="archive">
          <div className="left">
            <h2>{t("archive")}</h2>
            <ul>
              {archive.map((item) => {
                const { id, value } = item;
                return (
                  <li
                    key={id}
                    onClick={() => setArchiveYear(value)}
                    className={value == archiveYearVal ? "active" : ""}
                  >
                    <b>{value}</b> yil nashrlari
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right">
            <ul>
              {Array(30)
                .fill(0)
                .map((item, index) => {
                  return <li key={index}>2000-yil 1-son</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Journal.propTypes = {
  setLoading: PropTypes.func,
  loading: PropTypes.bool,
};
