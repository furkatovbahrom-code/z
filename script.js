const data = {
  uz: {
    title: "Yoqilg‘ini tejashning yangi darajasi",
    desc: "Fuel Tabs — yoqilg‘ini to‘liq yoqishga yordam beruvchi innovatsion mahsulot.",
    faqTitle: "Savol va javoblar",
    q1: "Nega foydali?",
    a1: "Yoqilg‘i sarfini kamaytiradi va dvigatelni himoya qiladi.",
    q2: "Qanday ishlaydi?",
    a2: "Yoqilg‘ining to‘liq yonishini ta’minlaydi.",
    q3: "Qanday qo‘llaniladi?",
    a3: "1 tabletka 60–70 litr yoqilg‘i uchun.",
    q4: "Qaysi mashinalarga mos?",
    a4: "Benzin va dizel dvigatellariga mos.",
    q5: "Zarar bormi?",
    a5: "Yo‘q, dvigatelga zarar yetkazmaydi.",
    bizTitle: "Biznes imkoniyati",
    bizDesc: "Agar siz ham bu biznesda ishlamoqchi bo‘lsangiz, liderlik olib, daromad topishingiz mumkin."
  },

  kz: {
    title: "Отынды үнемдеудің жаңа деңгейі",
    desc: "Fuel Tabs — отынның толық жануына көмектесетін өнім.",
    faqTitle: "Сұрақтар мен жауаптар",
    q1: "Неге пайдалы?",
    a1: "Отын шығынын азайтады.",
    q2: "Қалай жұмыс істейді?",
    a2: "Отынның толық жануын қамтамасыз етеді.",
    q3: "Қалай қолданады?",
    a3: "1 таблетка 60–70 литрге.",
    q4: "Қандай көліктерге?",
    a4: "Бензин және дизельге.",
    q5: "Зияны бар ма?",
    a5: "Жоқ, қауіпсіз.",
    bizTitle: "Бизнес мүмкіндігі",
    bizDesc: "Бұл бизнесте лидер болып, табыс табуға болады."
  },

  ru: {
    title: "Новый уровень экономии топлива",
    desc: "Fuel Tabs — инновационное решение для полного сгорания топлива.",
    faqTitle: "Вопросы и ответы",
    q1: "Почему это выгодно?",
    a1: "Снижает расход топлива.",
    q2: "Как работает?",
    a2: "Улучшает процесс сгорания.",
    q3: "Как применять?",
    a3: "1 таблетка на 60–70 литров.",
    q4: "Для каких авто?",
    a4: "Для бензина и дизеля.",
    q5: "Безопасно?",
    a5: "Да, полностью безопасно.",
    bizTitle: "Бизнес-возможность",
    bizDesc: "Вы можете стать лидером и получать доход."
  }
};

function setLang(lang) {
  const d = data[lang];
  document.getElementById("title").innerText = d.title;
  document.getElementById("desc").innerText = d.desc;
  document.getElementById("faqTitle").innerText = d.faqTitle;

  for (let i = 1; i <= 5; i++) {
    document.getElementById("q" + i).innerText = d["q" + i];
    document.getElementById("a" + i).innerText = d["a" + i];
  }

  document.getElementById("bizTitle").innerText = d.bizTitle;
  document.getElementById("bizDesc").innerText = d.bizDesc;

  document.getElementById("callBtn").href = "tel:+998XXXXXXXXX";
  document.getElementById("waBtn").href = "https://wa.me/998XXXXXXXXX";
  document.getElementById("igBtn").href =
    "https://www.instagram.com/beco_team?igsh=NjVxZzNqbmNjazll";
}

setLang("uz");
