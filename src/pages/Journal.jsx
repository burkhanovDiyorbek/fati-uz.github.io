import { useState } from "react";
import PageTop from "../components/PageTop/PageTop";
import { archive } from "../exports/archive";

export const Journal = () => {
  const [archiveYearVal, setArchiveYear] = useState("2000-2005");
  return (
    <section>
      <PageTop data={{ h2: "journal" }} />
      <div className="container">
        <h2>O&rsquo;ZBEKISTON TARIXI JURNALI</h2>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>Tahririyat</h2>
            <img src="./assets/journal.jpg" alt="book jpg" />
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
        <h2 style={{marginBottom:"20px"}}>
          <q>O&apos;zbekiston tarixi jurnali</q> arxiv sonlari
        </h2>
      </div>
      <div className="container" style={{ flexDirection: "column" }}>
        <div className="archive">
          <div className="left">
            <h2>Arxiv</h2>
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
