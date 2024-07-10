import { useTranslation } from "react-i18next";
import styles from "./internationals.module.css";
import { useState } from "react";

export const Internationals = () => {
  const { t } = useTranslation();
  const [year, setYear] = useState(2016);
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="container">
          <h2>{t("internationals")}</h2>
        </div>
      </div>
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2>Hamkor tashkilotlar</h2>
            <img src="./assets/header.jpg" alt="header" />
          </div>
          <div className="row2 inter-row">
            <p>Xalqaro hamkorlik</p>
            <p>
              {"  "}
              Tarix institutining xalqaro munosabatlardagi faol bosqichi
              2000-yildan boshlandi. Institutning bu sohadagi muhim yo‘nalishdan
              biri xalqaro aloqalarni kengaytirish va istiqbolli
              shartnomalarning imzolanishidir. Institut o‘zaro hamkorlik qilish
              uchun Jorjiya universiteti, Vashington univerisiteti (AQSh),
              Kashmir universiteti qoshidagi Markaziy-Osiyo tadqiqotlari markazi
              (Hindiston), Bonn universiteti, Ekkert nomidagi Xalqaro institut
              (Germaniya), Rossiya FA Etnologiya va arxeologiya instituti, Kuban
              slavyan davlat pedagogika instituti, Oltoy davlat pedagogika
              akademiyasi (Rossiya), Stokgolm universiteti (Shvetsiya), TOO
              “Arxeologiya ekspertizasi” va “Turon” universiteti
              (Qozog&#39;iston), Moldova FA Tarix, davlat va huquq instituti,
              Koryo universiteti, Dongguk universiteti, Myondjil universiteti,
              Xanyang universiteti, Chosun universiteti, Xorij tadqiqotlari
              Pusan universiteti, Koreya xalqaro aloqalar universiteti, Osiyo
              madaniyatlarni rivojlantirish instituti (Koreya), Konrad Adenauer
              fondi bilan shartnomalar imzolangan.
            </p>
            <p>
              Xalqaro hamkorlikning boshqa muhim yo‘nalishlaridan yana biri
              xalqaro anjumanlarning Institut bazasida o‘tkazilayotganligi yoki
              ularni sifatli tashkillashtirishda Institutning faol ishtirok
              etayotganligidir.
            </p>
            <p>
              Tarix instituti 2002–2004-yillarda IACD (Korea respublikasi) bilan
              birgalikda uchta xalqaro anjuman tashkillashtirgan.
            </p>
            <p>
              2006-yil Tarix instituti Jorjiya universiteti (AQSh) bilan
              hamkorlikda Markaziy Osiyoda xalqaro va mintaqaviy xavfsizlik
              masalalariga doir xalqaro anjumanni o‘tkazdi.
            </p>
            <p>
              2007-yil Tarix instituti Toshkent Islom universiteti bilan
              hamkorlikda “Markaziy Osiyoda islom qadriyatlari: tolerantlik va
              ijtimoiylik” mavzusida YuNESKOning O‘zbekistondagi bo‘limi, IFEAC
              (Fransiya) va MOXTI (IICAS-UNESCO) ning moliyaviy ko‘magida
              xalqaro anjuman o‘tkazildi.
            </p>
            <p>
              2008-yil Institut IFEAC (Fransiya), MOXTI (IICAS-UNESCO), IACD
              (Korea respublikasi) moliyaviy hamkorligida “XX asrning birinchi
              choragida Markaziy Osiyo xalqlarining ijtimoiy hayoti” mavzusida
              xalqaro anjuman o‘tkazildi.
            </p>
          </div>
        </div>
      </div>
      <div className="aside green">
        <div className="aside-container">
          <div className="aside-img">
            <img src="./assets/header.jpg" alt="header" />
          </div>
          <div className="aside-content">
            <h2>Xorijiy tadqiqotchilar</h2>
            <p style={{ marginBottom: "30px" }}>
              O&rsquo;zR FA Tarix institutiga kelgan chet ellik mutaxassislar
              (2016-2020)
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="global-researchers">
          <div className="top">
            <ul>
              {Array(6)
                .fill(2016)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => setYear(2016 + index)}
                      className={2016 + index == year ? "active" : ""}
                    >
                      {2016 + index}
                    </li>
                  );
                })}
            </ul>
          </div>
          <ul>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
            <li>
              <h2>KWANG TAE LEE</h2>
              <p>Central Eurasian Studies Department, Indiana University</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
