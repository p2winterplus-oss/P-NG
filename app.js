const ADMIN_PIN = "1234";
const STORAGE_KEY = "mood-playground-results";

const questions = [
  {
    text: "เช้านี้สมองเปิดเครื่องเร็วแค่ไหน?",
    hint: "เลือกภาพที่เหมือนหัวตัวเองที่สุดตอนเริ่มงาน",
    options: [
      { value: 1, emoji: "🚀", label: "ติดเครื่องพุ่ง" },
      { value: 2, emoji: "☕", label: "กาแฟเริ่มช่วย" },
      { value: 3, emoji: "🌀", label: "หมุนโหลดอยู่" },
      { value: 4, emoji: "🧊", label: "แช่แข็งนิด ๆ" },
      { value: 5, emoji: "🛌", label: "เตียงเรียกชื่อ" }
    ]
  },
  {
    text: "วันนี้งานวิ่งเข้าหาแบบไหน?",
    hint: "นึกถึง inbox, chat, และเสียงเรียกชื่อจากระยะไกล",
    options: [
      { value: 1, emoji: "🎈", label: "ลอยมาน่ารัก" },
      { value: 2, emoji: "🛵", label: "ขี่เข้ามาเรื่อย ๆ" },
      { value: 3, emoji: "🎪", label: "เริ่มตั้งขบวน" },
      { value: 4, emoji: "🚨", label: "ไซเรนเริ่มดัง" },
      { value: 5, emoji: "🌊", label: "คลื่นซัดโต๊ะ" }
    ]
  },
  {
    text: "มีคนทักงานเพิ่ม ใจคุณทำหน้าแบบไหน?",
    hint: "ไม่ต้องตอบสุภาพ ตอบตามหน้าข้างในได้เลย",
    options: [
      { value: 1, emoji: "😎", label: "ได้เลยเพื่อน" },
      { value: 2, emoji: "🙂", label: "โอเค จดก่อน" },
      { value: 3, emoji: "🥲", label: "ยิ้มทั้งน้ำตา" },
      { value: 4, emoji: "🫥", label: "ตัวเริ่มจาง" },
      { value: 5, emoji: "💥", label: "ตู้มในใจ" }
    ]
  },
  {
    text: "พลังงานตอนนี้อยู่โหมดไหน?",
    hint: "วัดจากความอยากลุกไปเติมน้ำโดยไม่ถอนหายใจ",
    options: [
      { value: 1, emoji: "🔋", label: "แบตเต็มหลอด" },
      { value: 2, emoji: "🕹️", label: "ยังเล่นได้" },
      { value: 3, emoji: "🪫", label: "เหลือครึ่งใจ" },
      { value: 4, emoji: "📴", label: "โหมดประหยัด" },
      { value: 5, emoji: "🧟", label: "ร่างเดินเอง" }
    ]
  },
  {
    text: "วันนี้รอยยิ้มกับทีมเป็นแบบไหน?",
    hint: "เลือกแบบที่ใกล้เคียงที่สุด ไม่ต้องเก็บภาพลักษณ์",
    options: [
      { value: 1, emoji: "😁", label: "ยิ้มจริงฟันครบ" },
      { value: 2, emoji: "😊", label: "อบอุ่นกำลังดี" },
      { value: 3, emoji: "😐", label: "ยิ้มระบบงาน" },
      { value: 4, emoji: "🫠", label: "ยิ้มละลาย" },
      { value: 5, emoji: "🙃", label: "ยิ้มกลับหัว" }
    ]
  },
  {
    text: "ถ้าปัญหาโผล่มาอีกหนึ่งก้อน คุณจะทำยังไง?",
    hint: "ลองนึกว่าปัญหาเป็นกล่องพัสดุที่มาผิดเวลา",
    options: [
      { value: 1, emoji: "📦", label: "แกะดูสบาย" },
      { value: 2, emoji: "🧰", label: "หยิบเครื่องมือ" },
      { value: 3, emoji: "📝", label: "แปะคิวไว้" },
      { value: 4, emoji: "🧯", label: "หาถังดับไฟ" },
      { value: 5, emoji: "🕳️", label: "อยากมุดพื้น" }
    ]
  },
  {
    text: "ความคิดในหัววันนี้เรียงแถวดีไหม?",
    hint: "ดูว่าข้างในหัวเป็นห้องสมุดหรือสนามเด็กเล่น",
    options: [
      { value: 1, emoji: "📚", label: "เรียงชั้นสวย" },
      { value: 2, emoji: "🧩", label: "ต่อภาพได้" },
      { value: 3, emoji: "🎲", label: "สุ่มนิดหน่อย" },
      { value: 4, emoji: "🎡", label: "วนชิงช้า" },
      { value: 5, emoji: "🥨", label: "พันเป็นเพรทเซล" }
    ]
  },
  {
    text: "พักเบรกแล้วชาร์จขึ้นแค่ไหน?",
    hint: "นับจากเบรกจริง ไม่รวมเลื่อนมือถือจนลืมหายใจ",
    options: [
      { value: 1, emoji: "🌞", label: "แดดออกเลย" },
      { value: 2, emoji: "🍹", label: "สดขึ้นกรุบ" },
      { value: 3, emoji: "🧋", label: "ดูดได้อีกนิด" },
      { value: 4, emoji: "🔌", label: "เสียบไม่เข้า" },
      { value: 5, emoji: "🪨", label: "ก้อนหินพัก" }
    ]
  },
  {
    text: "วันนี้อยากคุยเล่นกับทีมแค่ไหน?",
    hint: "วัดโซเชียลแบต ไม่ใช่ความรักเพื่อนร่วมงาน",
    options: [
      { value: 1, emoji: "🎤", label: "ถือไมค์เอง" },
      { value: 2, emoji: "🗣️", label: "คุยได้เพลิน" },
      { value: 3, emoji: "👂", label: "ฟังเป็นหลัก" },
      { value: 4, emoji: "🪟", label: "ขอมองนอกหน้าต่าง" },
      { value: 5, emoji: "🤐", label: "ปิดซิปปากใจ" }
    ]
  },
  {
    text: "ก่อนเลิกงาน ใจยังมีพื้นที่ให้คำว่าโอเคแค่ไหน?",
    hint: "ตอบแบบส่งท้ายวัน ให้ใจเป็นคนกดปุ่ม",
    options: [
      { value: 1, emoji: "🏖️", label: "โอเคมีชายหาด" },
      { value: 2, emoji: "🪁", label: "ยังมีลมดี" },
      { value: 3, emoji: "🧺", label: "ตะกร้าเริ่มเต็ม" },
      { value: 4, emoji: "🚧", label: "พื้นที่ซ่อมใจ" },
      { value: 5, emoji: "🧨", label: "ห้ามจุดประกาย" }
    ]
  }
];

const levels = [
  {
    max: 18,
    key: "spark",
    theme: "theme-spark",
    emoji: "✨",
    title: "มู้ดสายรุ้งกระโดดเชือก",
    text: "วันนี้ใจค่อนข้างเบา งานยังไม่กลายร่างเป็นบอสใหญ่ เหมาะกับการเก็บแต้มดี ๆ แล้วแบ่งพลังสดใสให้ทีมแบบไม่ต้องโปรยแสงมากเกินไป",
    tips: [
      "เก็บโมเมนต์ดี ๆ ไว้หนึ่งอย่าง เผื่อพรุ่งนี้ใจอยากดูรูปถ่ายความโอเค",
      "ช่วยเพื่อนสักเรื่องเล็ก ๆ แบบฮีโร่เดินผ่าน ไม่ต้องเปิดเพลงประกอบ",
      "อย่าลืมพัก ถึงจะสดใสก็ไม่ใช่หลอดไฟ LED เปิด 24 ชั่วโมง"
    ]
  },
  {
    max: 28,
    key: "jelly",
    theme: "theme-jelly",
    emoji: "🍮",
    title: "มู้ดเยลลี่โยกเบา ๆ",
    text: "โดยรวมยังไหว แต่มีบางจังหวะที่ใจเริ่มเด้งกลับช้ากว่าปกติ เหมาะกับการจัดโต๊ะในหัวให้โล่งขึ้นนิดนึง",
    tips: [
      "เลือกงานสำคัญสุด 1 ชิ้นแล้วตั้งชื่อมันว่า ภารกิจหัวโต",
      "ลุกเดิน 3 นาที ทำหน้าเหมือนกำลังไปประชุมลับกับน้ำดื่ม",
      "ส่งสัญญาณกับทีมว่า วันนี้ขอคิวงานแบบเรียงตัว ไม่วิ่งชนกัน"
    ]
  },
  {
    max: 38,
    key: "noodle",
    theme: "theme-noodle",
    emoji: "🍜",
    title: "มู้ดบะหมี่พันส้อม",
    text: "ใจเริ่มมีเส้นพันกันหลายเส้น อาจไม่ได้แย่ แต่ถ้าฝืนต่อแบบไม่พัก เส้นอาจกลายเป็นเงื่อนทะเลได้",
    tips: [
      "เขียนสิ่งที่ค้างในหัวลงกระดาษ แล้วบอกมันว่า ออกมานั่งรอก่อน",
      "พักสายตา 5 นาทีแบบจริงจัง ไม่ใช่ย้ายจากจอคอมไปจอมือถือ",
      "คุยกับหัวหน้าหรือเพื่อนร่วมทีมเรื่องลำดับงานแบบนุ่ม ๆ ก่อนหม้อเดือด"
    ]
  },
  {
    max: 50,
    key: "volcano",
    theme: "theme-volcano",
    emoji: "🌋",
    title: "มู้ดภูเขาไฟใส่หมวกกันน็อก",
    text: "วันนี้ใจส่งไฟแจ้งเตือนค่อนข้างชัด อาจมีความล้า เครียด หรือแน่นในหัวมากกว่าปกติ เหมาะกับการลดแรงปะทะและขอแรงสนับสนุน",
    tips: [
      "เลื่อนงานที่ไม่ด่วนออกไปหนึ่งอย่าง แล้วประกาศในใจว่า นี่คือการบริหาร ไม่ใช่การหนี",
      "หายใจช้า ๆ 6 รอบ ทำเหมือนกำลังเป่าซุปให้ตัวละครจิ๋วในจินตนาการ",
      "บอกคนที่เกี่ยวข้องว่า วันนี้ขอช่วยจัด priority หน่อย ก่อนสมองเปิดโหมดปิ้งขนมปัง"
    ]
  }
];

const form = document.querySelector("#moodForm");
const questionsEl = document.querySelector("#questions");
const resultPanel = document.querySelector("#resultPanel");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const resultEmoji = document.querySelector("#resultEmoji");
const tipsList = document.querySelector("#tipsList");
const meterFill = document.querySelector("#meterFill");
const adminDialog = document.querySelector("#adminDialog");
const pinGate = document.querySelector("#pinGate");
const adminContent = document.querySelector("#adminContent");
const pinError = document.querySelector("#pinError");
const resultsTable = document.querySelector("#resultsTable");
const statsGrid = document.querySelector("#statsGrid");
const searchInput = document.querySelector("#searchInput");

function renderQuestions() {
  questionsEl.innerHTML = questions
    .map((question, index) => {
      const options = question.options
        .map(
          (item) => `
            <label>
              <input type="radio" name="q${index}" value="${item.value}" required />
              <span>${item.emoji}</span>
              <span>${item.label}</span>
            </label>
          `
        )
        .join("");

      return `
        <fieldset class="question" data-question="${String(index + 1).padStart(2, "0")}">
          <div class="question-title">
            <span class="question-badge">ด่าน ${index + 1}</span>
            <h3>${question.text}</h3>
            <p>${question.hint}</p>
          </div>
          <div class="scale">${options}</div>
        </fieldset>
      `;
    })
    .join("");
}

function getResults() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveResults(results) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

function getLevel(score) {
  return levels.find((level) => score <= level.max) || levels.at(-1);
}

function applyTheme(level) {
  document.body.className = level.theme;
}

function showResult(record) {
  const level = getLevel(record.score);
  applyTheme(level);
  resultPanel.classList.remove("is-hidden");
  resultTitle.textContent = level.title;
  resultText.textContent = `${record.name} ได้ ${record.score}/50 คะแนน: ${level.text}`;
  resultEmoji.textContent = level.emoji;
  meterFill.style.width = `${Math.round((record.score / 50) * 100)}%`;
  tipsList.innerHTML = level.tips.map((tip) => `<li>${tip}</li>`).join("");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("employeeName")).trim();
  const age = Number(data.get("employeeAge"));
  const answers = questions.map((_, index) => Number(data.get(`q${index}`)));
  const score = answers.reduce((sum, value) => sum + value, 0);
  const level = getLevel(score);
  const record = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name,
    age,
    answers,
    score,
    level: level.title,
    levelKey: level.key
  };

  saveResults([record, ...getResults()]);
  showResult(record);
  renderAdmin();
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("th-TH", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(dateString));
}

function renderAdmin() {
  const query = searchInput.value.trim().toLowerCase();
  const results = getResults();
  const filtered = results.filter((item) => {
    return `${item.name} ${item.level}`.toLowerCase().includes(query);
  });
  const average = results.length
    ? Math.round(results.reduce((sum, item) => sum + item.score, 0) / results.length)
    : 0;
  const hotCount = results.filter((item) => item.score > 38).length;
  const latest = results[0] ? getLevel(results[0].score).emoji : "—";

  statsGrid.innerHTML = [
    ["ทั้งหมด", results.length],
    ["คะแนนเฉลี่ย", average],
    ["โหมดไฟแรง", hotCount],
    ["ล่าสุด", latest]
  ]
    .map(([label, value]) => `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  resultsTable.innerHTML =
    filtered
      .map(
        (item) => `
          <tr>
            <td>${formatDate(item.createdAt)}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.score}/50</td>
            <td>${item.level}</td>
          </tr>
        `
      )
      .join("") || `<tr><td colspan="5">ยังไม่มีข้อมูล หรือค้นหาไม่เจอ</td></tr>`;
}

function openAdmin() {
  adminDialog.showModal();
  renderAdmin();
}

function unlockAdmin() {
  const pin = document.querySelector("#adminPin").value;
  if (pin !== ADMIN_PIN) {
    pinError.textContent = "รหัสยังไม่ใช่ ลอง 1234 ก่อนนะ";
    return;
  }
  pinError.textContent = "";
  pinGate.classList.add("is-hidden");
  adminContent.classList.remove("is-hidden");
}

function exportCsv() {
  const header = ["createdAt", "name", "age", "score", "level", ...questions.map((_, index) => `q${index + 1}`)];
  const rows = getResults().map((item) => [
    item.createdAt,
    item.name,
    item.age,
    item.score,
    item.level,
    ...item.answers
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mood-results-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function showDemoResult() {
  const name = "ตัวอย่าง";
  const answers = questions.map((question) => {
    const option = question.options[Math.floor(Math.random() * question.options.length)];
    return option.value;
  });
  const score = answers.reduce((sum, value) => sum + value, 0);
  showResult({
    id: "demo",
    createdAt: new Date().toISOString(),
    name,
    age: 25,
    answers,
    score,
    level: getLevel(score).title,
    levelKey: getLevel(score).key
  });
}

renderQuestions();
renderAdmin();

form.addEventListener("submit", handleSubmit);
searchInput.addEventListener("input", renderAdmin);

document.querySelectorAll("[data-open-admin]").forEach((button) => {
  button.addEventListener("click", openAdmin);
});
document.querySelector("[data-close-admin]").addEventListener("click", () => adminDialog.close());
document.querySelector("[data-unlock-admin]").addEventListener("click", unlockAdmin);
document.querySelector("[data-export]").addEventListener("click", exportCsv);
document.querySelector("[data-demo-result]").addEventListener("click", showDemoResult);
document.querySelector("[data-reset]").addEventListener("click", () => {
  form.reset();
  resultPanel.classList.add("is-hidden");
  document.body.className = "theme-start";
  document.querySelector("#quiz").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("[data-clear]").addEventListener("click", () => {
  if (confirm("ล้างข้อมูลทั้งหมดในเครื่องนี้ใช่ไหม?")) {
    saveResults([]);
    renderAdmin();
  }
});
