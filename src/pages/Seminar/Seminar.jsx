import { useTranslation } from "react-i18next";
import styles from "./seminar.module.css";

export const Seminar = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <div className="container">
          <h2>{t("gatherings")}</h2>
        </div>
      </div>
      <div className="container">
        <div className="seminar">
          <h2>Yosh olimlar seminari</h2>
          <ul>
            <li>
              O‘zbekiston Fanlar akademiyasi Tarix institutining Yosh olimlar
              kengashi institut qoshidagi doimiy faoliyat yurituvchi jamoat
              tuzilmasidir. Yosh olimlar kengashining asosiy maqsadi Tarix
              instituti yoshlarini ilmiy-tadqiqot faoliyatiga tizimli asosda
              yo‘naltirish, mavjud ilmiy maktablar an&rsquo;analarini davom
              ettirish, yangi ilmiy maktablarni shakllantirishga zamin yaratish,
              yosh olimlar ilmiy-ijodiy faoliyatini qo‘llab-quvvatlash, fan,
              ta&rsquo;lim va ishlab chiqarish integratsiyasini izchil
              rivojlantirish, ularning mutaxassisliklari hamda tadqiqot
              mavzulariga oid qiziqishlarini qo‘llab-quvvatlashdan iborat.
            </li>
            <li>
              Kengashning tarkibiy tuzilmasi kengash raisi, uning o‘rinbosari va
              a‘zolardan iborat. Kengash 40 yoshgacha bo‘lgan doktorantlar,
              tayanch doktarantlar, stajyorlar, mustaqil izlanuvchilar, yosh
              olim va mutaxassislardan shakllantiriladi.
            </li>
            <li>
              Kengash tomonidan an`anaviy tarzda ilmiy seminarlar yo‘lga
              qo‘yilgan bo‘lib, unda tarix fanining turli tarmoqlari va
              yo‘nalishlari doirasidagi tadqiqotlar ko‘lami qamrab olingan.
              Ilmiy seminarlar uch yo‘nalishda tashkil qilinmoqda:
            </li>
            <li>
              <ol>
                <li>
                  institutning tayanch doktorantlari, doktorantlari va yosh
                  olimlar tomonidan tadqiq etilayotgan mavzusi doirasidagi
                  chiqishlar;
                </li>
                <li>
                  institut professor olimlarining tarix fani dolzarb
                  masalalariga doir ma&rsquo;ruzalari;
                </li>
                <li>
                  Respublikada va xorijiy davlatlarda faoliyat yuritayotgan
                  yetakchi tarixchi olimlarning tadqiqot metodologiyasi, tarix
                  fanida qo‘lga kiritilgan so‘ngi tadqiqot natijalari hamda
                  uning mohiyatiga oid ma&rsquo;ruzalar.
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="seminar">
          <h2>Tarixshunoslik o‘qishlari</h2>
          <ul>
            <li>
              Tarixshunoslikni O‘zbekistonda ilmiy yo‘nalish sifatida
              rivojlantirish XX asrning 60-yillari oxiriga to‘g‘ri keldi. Bunda
              O‘zbekiston FA Tarix institutida ‘‘Tarixshunoslik, manbashunoslik
              va arxeologiya‘‘ bo‘limi tashkil etilishi katta ahamiyat kasb
              etdi. Uning birinchi rahbari taniqli olim B. V. Lunin edi.
            </li>
            <li>
              1989-yilda O‘zR FA Tarix institutida bo‘lim tashkil etilganining
              20 yilligi munosabati bilan O‘rta Osiyo va Qozog‘iston
              tarixshunoslari ishtirokida dastlabki mintaqalararo
              <b>‘‘Tarixshunoslik o‘qishlari‘‘</b> tashkil etildi va o‘tkazildi.
            </li>
            <li>
              1993-yil 27-28-oktyabr kunlari O‘zbekiston Respublikasi Fanlar
              Akademiyasining 50 yilligi munosabati bilan{" "}
              <b>‘‘Tarixshunoslik va manbashunoslik‘‘ </b> bo‘limi tomonidan
              ‘‘Mustaqillik davri O‘zbekiston tarixshunosligi‘‘ mavzusida
              ikkinchi mintaqalararo ‘‘Tarixshunoslik o‘qishlari‘‘ tashkil
              etildi va o‘tkazildi.
            </li>
            <li>
              2003-yil 3-4-dekabr kunlari bo‘lim tomonidan ‘‘O‘zbekistonda tarix
              fani: taraqqiyot yutuqlari va muammolari‘‘ mavzusida uchinchi
              ‘‘Tarixshunoslik o‘qishlari‘‘ o‘tkazildi.
            </li>
            <li>
              {" "}
              An‘anaviy bo‘lib ulgurgan, to‘rtinchi ‘Tarixshunoslik o‘qishlari‘
              2006-yil 4-5-dekabr kunlari bo‘lib o‘tdi va B. V. Luninning 100
              yilligiga bag‘ishlandi. Beshinchi ‘Tarixshunoslik o‘qishlari‘
              2010-yil dekabr oyida bo‘lib o‘tdi va O‘zbekiston Respublikasi
              Mustaqilligining 20 yilligiga bag‘ishlandi. O‘qish materiallari
              2011 -yilda chop etildi.
            </li>
            <li>
              2013-yil 20-dekabr kuni ‘Markaziy Osiyo intellektual taraqqiyoti
              kontekstida tarix fani‘ mavzusida oltinchi ‘Tarixshunoslik
              o‘qishlari‘bo‘lib o‘tdi. O‘qishlar O‘zR FA tarix institutining 70
              yilligiga bag‘ishlandi.
            </li>
            <li>
              2017-yil 27-dekabr kuni O‘zbekistonda tarix fani: muammolar va
              rivojlanish istiqbollari‘ mavzusida yettinchi ‘Tarixshunoslik
              o‘qishlari‘ bo‘lib o‘tdi.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
