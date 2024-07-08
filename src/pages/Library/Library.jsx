import { useTranslation } from "react-i18next";
import styles from "./library.module.css";
import { FaSearch } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import { archiveYear } from "../../exports/archive-year";

export const Library = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [archiveYearVal, setArchiveYear] = useState("2000-2005");
  console.log(search);
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="container">
          <h2>{t("library")}</h2>
        </div>
      </div>
      <div className="container">
        <h2>O&rsquo;ZBEKISTON TARIXI JURNALI</h2>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>Tahririyat</h2>
            <img src="../src/assets/journal.jpg" alt="book jpg" />
          </div>
          <div className="row2">
            <ul>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
              <li>
                <span>Tarix instituti</span>
                <h4>Azamat Ziyo (Bosh muharrir) </h4>
                <p>Tarix fanlari doktori, professor</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="aside blue">
        <div className="aside-container">
          <div className="aside-img">
            <img src="../src/assets/journal.jpg" alt="journal" />
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
      <div className="container" style={{ flexDirection: "column" }}>
        <div className="archive">
          <div className="left">
            <h2>Arxiv</h2>
            <ul>
              {archiveYear.map((item) => {
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
      <div className="books">
        <div className="container">
          <div className="top">
            <ul>
              <li>Filter by:</li>
              <li
                className={filter == "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                Barchasi
              </li>
              <li
                className={filter == "e-books" ? "active" : ""}
                onClick={() => setFilter("e-books")}
              >
                Elektron Kitoblar
              </li>
              <li
                className={filter == "referat" ? "active" : ""}
                onClick={() => setFilter("referat")}
              >
                Autoreferat
              </li>
              <li
                className={filter == "manba" ? "active" : ""}
                onClick={() => setFilter("manba")}
              >
                Manba
              </li>
            </ul>
            <label>
              <input
                type="text"
                placeholder="search anything"
                onInput={(e) => setSearch(e.target.value)}
              />
              <FaSearch />
            </label>
          </div>
        </div>
        <div className="container">
          <div className="img-cards">
            <div className="cards">
              <div className="card">
                <img src="../src/assets/book-img.jpg" alt="book img" />
                <h3>Investing in a 21st Century Educational Research System</h3>
                <img
                  src="../src/assets/icons/arrow.svg "
                  alt="arrow img"
                  className="arrow"
                />
              </div>
              <div className="card">
                <img src="../src/assets/book-img.jpg" alt="book img" />
                <h3>Investing in a 21st Century Educational Research System</h3>
                <img
                  src="../src/assets/icons/arrow.svg "
                  alt="arrow img"
                  className="arrow"
                />
              </div>
              <div className="card">
                <img src="../src/assets/book-img.jpg" alt="book img" />
                <h3>Investing in a 21st Century Educational Research System</h3>
                <img
                  src="../src/assets/icons/arrow.svg "
                  alt="arrow img"
                  className="arrow"
                />
              </div>
              <div className="card">
                <img src="../src/assets/book-img.jpg" alt="book img" />
                <h3>Investing in a 21st Century Educational Research System</h3>
                <img
                  src="../src/assets/icons/arrow.svg "
                  alt="arrow img"
                  className="arrow"
                />
              </div>
              <div className="card">
                <img src="../src/assets/book-img.jpg" alt="book img" />
                <h3>Investing in a 21st Century Educational Research System</h3>
                <img
                  src="../src/assets/icons/arrow.svg "
                  alt="arrow img"
                  className="arrow"
                />
              </div>
              <div className="card">
                <img src="../src/assets/book-img.jpg" alt="book img" />
                <h3>Investing in a 21st Century Educational Research System</h3>
                <img
                  src="../src/assets/icons/arrow.svg "
                  alt="arrow img"
                  className="arrow"
                />
              </div>
              <div className="load-more">
                <button>
                  Yana <BiDownArrow />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
