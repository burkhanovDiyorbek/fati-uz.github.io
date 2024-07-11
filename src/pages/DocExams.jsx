import PageTop from "../components/PageTop/PageTop";

export const DocExams = () => {
  return (
    <section>
      <PageTop data={{ h2: "doc-exams" }} />
      <div className="container">
        <div className="section-slice">
          <div className="row1">
            <h2> Malakaviy imtihon o‘tkazish tartibi</h2>
            <img src="./assets/about-header.jpg" alt="img" />
          </div>
          <div className="row2">
            <h4>
              Malakaviy imtihonlar O‘zbekiston Respublikasi Vazirlar Mahkamasi
              huzuridagi Oliy attestatsiya komissiyasi Rayosatining 2016-yil
              28-yanvardagi 220/2-son qarori bilan tasdiqlangan. Malakaviy
              imtihonlarni o‘tkazish tartibi to‘g‘risidagi nizomiga (Oliy
              attestatsiya komissiyasi Rayosatining 2017-yil 31-maydagi
              239/6-son qarori bilan o‘zgartirishlar kiritilgan) muvofiq
              o‘tkaziladi.
            </h4>
            <ol className="list">
              <li>
                1. Falsafa doktori (Doctor of Philosophy) ilmiy darajasini olish
                uchun dissertatsiya tadqiqotlarini olib borayotgan izlanuvchilar
                quyidagi malakaviy imtihonlarni topshiradi: ixtisoslik
                (dissertatsiya mavzusiga muvofiq).
              </li>
              <li>
                2. Falsafa doktori (Doctor of Philosophy) ilmiy darajasini olish
                uchun dissertatsiya tadqiqotlarini olib borayotgan xorijiy
                fuqarolar faqat dissertatsiya mavzusiga muvofiq ixtisoslik
                bo‘yicha malakaviy imtihon topshiradi.
              </li>
              <li>
                3. Ixtisoslik bo‘yicha malakaviy imtihonlar huzurida ilmiy
                darajalar beruvchi ilmiy kengash tuzilgan muassasa tomonidan,
                chet tili (ingliz, fransuz yoki nemis tili) bo‘yicha malakaviy
                imtihonlar esa, yetakchi ilmiy tashkilot va ta’lim muassasalari
                tomonidan har 3-4 yilda (zarurat bo‘lganda qisqaroq muddatda)
                ishlab chiqilgan, tasdiqlangan hamda OAK tomonidan ma’qullangan
                dasturlar asosida topshiriladi.
              </li>
              <li>
                4. Ixtisoslik bo‘yicha malakaviy imtihon — dissertatsiya
                himoyasi o‘tkaziladigan Ilmiy kengash faoliyat ko‘rsatayotgan
                muassasada o‘tkaziladi. Chet tili bo‘yicha malakaviy imtihonlar
                Oliy attestatsiya komissiyasi belgilagan muassasalarda
                o‘tkaziladi.
              </li>
              <li>
                <p>
                  5. Tarix institutida “O‘zbekiston tarixi”, “Etnografiya,
                  etnologiya va antropologiya”, “Tarixshunoslik, manbashunoslik
                  va tarixiy tadqiqot usullari” ixtisosliklari bo‘yicha
                  malakaviy imtihonlarni qabul qilish sessiya shaklida
                  <b>fevral, may, noyabr</b>
                  oylarida belgilangan reja asosida o‘tkaziladi.
                </p>
              </li>
              <li>
                <p>
                  6. Imtihon topshirishga nomzodlar
                  <b>shaxsini tasdiqlovchi hujjati</b>
                  nusxasini ilova qilgan holda malakaviy imtihonlarni qabul
                  qilishning navbatdagi sessiyasi o‘tkaziladigan oyning{" "}
                  <b>
                    1-sanasigacha yozma ravishda ish bajarilgan tashkilotning
                    yo‘llanma xati
                  </b>
                  bilan murojaat qilishi kerak. Murojaatda nomzod bilan
                  bog‘lanishning aloqa vositalari (telefon raqami, elektron
                  pochta manzili va hokazo) aniq va to‘liq aks ettirilishi
                  lozim. Mazkur murojaatga asosan nomzodlar Tarix instituti
                  tomonidan imtihon topshiruvchilar ro‘yxatiga kiritiladi.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
