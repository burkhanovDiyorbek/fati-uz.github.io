import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PageTop from "../../components/PageTop/PageTop";

export const Seminar = () => {
  const { t } = useTranslation();
  const { search } = useLocation();
  let id = search.at(-1);
  return (
    <section>
      <PageTop data={{ h2: "seminar" + id }} />
      <div className="container">
        <div className="seminar">
          <h2>{t("seminar" + id)}</h2>
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
    </section>
  );
};
