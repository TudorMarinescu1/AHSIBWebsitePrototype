const courses = [
  {
    id: "english-hl",
    title: "IB English Literature HL",
    group: "Group 1: Studies in Language and Literature",
    level: "HL",
    twoYear: true,
    sequence: ["IB English HL1", "IB English HL2"],
    details: [
      "A two-year literature sequence centered on close reading, literary discussion, writing, oral analysis, and global works in translation.",
      "Students practice building arguments from textual evidence and preparing polished analytical work over time.",
      "Because it is an HL course, it occupies both junior and senior year in the planner."
    ],
  },
  {
    id: "english-sl",
    title: "IB English Literature SL",
    group: "Group 1: Studies in Language and Literature",
    level: "SL",
    sequence: ["One-year English Literature pathway"],
    details: [
      "English Literature SL offers a focused college-level study of literature, communication, literary interpretation, and analytical writing.",
      "Students examine texts from different cultures and time periods while developing discussion and written argument skills.",
      "Students should confirm the current grade-level availability with the IB coordinator before final scheduling."
    ],
  },
  {
    id: "spanish-hl",
    title: "IB Spanish HL",
    group: "Group 2: Language Acquisition",
    level: "HL",
    twoYear: true,
    sequence: ["IB Spanish HL1", "IB Spanish HL2"],
    details: [
      "Spanish HL develops reading, writing, listening, and speaking through culturally rich units and authentic documents.",
      "Students extend grammar and communication skills while considering language, culture, globalization, and identity.",
      "The course prepares students for the IB Higher Level language assessment."
    ],
  },
  {
    id: "spanish-sl",
    title: "IB Spanish SL",
    group: "Group 2: Language Acquisition",
    level: "SL",
    twoYear: true,
    sequence: ["Spanish year 3", "Spanish year 4"],
    details: [
      "Spanish SL is a two-year language pathway for students continuing Spanish study at the year 3 and 4 level.",
      "Students strengthen communication through reading, writing, speaking, listening, current events, culture, and authentic sources.",
      "The course supports global awareness and practical cross-cultural communication."
    ],
  },
  {
    id: "chinese-sl",
    title: "IB Chinese SL",
    group: "Group 2: Language Acquisition",
    level: "SL",
    twoYear: true,
    sequence: ["IB Chinese SL year 1", "IB Chinese SL year 2"],
    details: [
      "Chinese SL introduces and develops Mandarin communication through reading, writing, speaking, and listening.",
      "Students explore Chinese culture, traditions, and modern society while practicing real-world language use.",
      "The PDF lists Chinese SL as a two-year course."
    ],
  },
  {
    id: "history-hl",
    title: "IB History HL",
    group: "Group 3: Individuals and Societies",
    level: "HL",
    twoYear: true,
    sequence: ["IB 20th Century Global Studies HL1", "IB History of the Americas HL2"],
    details: [
      "History HL is a two-year sequence built around historical interpretation, source analysis, and evidence-based argument.",
      "Topics include causes and effects of war, single-party states, regional studies in the Americas, and a student Historical Investigation.",
      "Students learn to evaluate how historians construct different interpretations of the same events."
    ],
  },
  {
    id: "psychology-sl",
    title: "IB Psychology SL",
    group: "Group 3: Individuals and Societies",
    level: "SL",
    sequence: ["One-year course"],
    details: [
      "Psychology SL introduces students to behavior, research methods, experimental design, data analysis, and interpretation.",
      "Students evaluate theories and empirical studies while considering cultural, ethical, gender, and methodological factors.",
      "CP Psychology is recommended before taking this IB course."
    ],
  },
  {
    id: "ess-sl",
    title: "IB Environmental Systems and Societies SL",
    group: "Group 4: Sciences",
    level: "SL",
    sequence: ["One-year course"],
    details: [
      "ESS is an interdisciplinary course that connects environmental science with social and ethical questions.",
      "Students study ecosystems, global cycles, physical systems, population, carrying capacity, pollution, and environmental decision-making.",
      "The course uses practical investigations and can support planning across both Individuals and Societies and Sciences."
    ],
  },
  {
    id: "sehs-hl",
    title: "IB Sport Exercise and Health Science HL",
    group: "Group 4: Sciences",
    level: "HL",
    twoYear: true,
    sequence: ["SEHS HL year 1", "SEHS HL year 2"],
    details: [
      "SEHS explores the science behind athletic performance, personal health, movement, and physical well-being.",
      "Students study physiological, biomechanical, psychological, mental, and nutritional factors that shape performance and long-term health.",
      "The HL pathway is listed as a two-year science option."
    ],
  },
  {
    id: "sehs-sl",
    title: "IB Sport Exercise and Health Science SL",
    group: "Group 4: Sciences",
    level: "SL",
    sequence: ["One-year course"],
    details: [
      "SEHS SL connects scientific inquiry to health, fitness, training, and athletic performance.",
      "Students apply evidence-based thinking to personal fitness, community wellness, and healthier lifestyles.",
      "The SL pathway is listed as a one-year science option."
    ],
  },
  {
    id: "math-aa-sl",
    title: "IB Math Analysis and Approaches SL",
    group: "Group 5: Mathematics",
    level: "SL",
    sequence: ["One-year mathematics pathway"],
    details: [
      "Math Analysis and Approaches SL is designed for students who enjoy mathematical concepts, problem-solving, logic, and proof.",
      "The course emphasizes algebra, calculus, mathematical structure, and preparation for college-level mathematics.",
      "It is a strong match for interests such as science, engineering, economics, and technology."
    ],
  },
  {
    id: "math-ai-sl",
    title: "IB Math Applications and Interpretation SL",
    group: "Group 5: Mathematics",
    level: "SL",
    sequence: ["One-year mathematics pathway"],
    details: [
      "Math Applications and Interpretation SL focuses on applying math to real-world contexts.",
      "Students work with statistics, modeling, data analysis, technology-based approaches, and practical problem-solving.",
      "It is a strong match for interests such as social sciences, business, design, and data-informed decision-making."
    ],
  },
  {
    id: "film-hl",
    title: "IB Film HL",
    group: "Group 6: The Arts",
    level: "HL",
    twoYear: true,
    sequence: ["IB Film HL1", "IB Film HL2"],
    details: [
      "Film HL develops students as both interpreters and makers of film texts.",
      "Students combine theoretical study with practical production, refining the knowledge, skills, and habits needed for the art form.",
      "The two-year HL sequence gives students a deeper foundation for further study in film or media."
    ],
  },
  {
    id: "film-sl",
    title: "IB Film SL",
    group: "Group 6: The Arts",
    level: "SL",
    sequence: ["One-year Film pathway"],
    details: [
      "Film SL introduces students to film analysis, creative exploration, and technical production.",
      "Students develop skills in areas such as directing, cinematography, editing, sound design, screenwriting, and analysis of films from around the world.",
      "The PDF notes Film SL as a one-year option for juniors."
    ],
  },
  {
    id: "music-hl",
    title: "IB Music HL",
    group: "Group 6: The Arts",
    level: "HL",
    twoYear: true,
    sequence: ["IB Music HL year 1", "IB Music HL year 2"],
    details: [
      "Music HL gives students an advanced path through music theory, history, performance, composition, critical listening, and analysis.",
      "Students engage with diverse musical genres and cultures through individual and group work.",
      "The PDF lists Music HL as a two-year option for IB Diploma students."
    ],
  },
  {
    id: "tok",
    title: "Theory of Knowledge",
    group: "Core",
    level: "Core",
    sequence: ["TOK seminar and essay or presentation milestones"],
    details: [
      "TOK explores how knowledge is created, tested, communicated, and challenged across disciplines.",
      "Students consider reason, language, emotion, perception, and the assumptions behind claims.",
      "TOK connects the academic subject groups back to the learner at the center of the diploma."
    ],
  },
  {
    id: "ee",
    title: "Extended Essay",
    group: "Core",
    level: "Core",
    sequence: ["Research question, advisor, draft, final 4,000-word essay"],
    details: [
      "The Extended Essay is an independent research project on a student-selected topic approved by an AHS advisor.",
      "Students learn to narrow a question, gather sources, manage drafts, and write in a formal academic style.",
      "The final paper is 4,000 words and is required for diploma candidates."
    ],
  },
  {
    id: "cas",
    title: "CAS",
    group: "Core",
    level: "Core",
    sequence: ["Creativity, activity, service reflections and interviews"],
    details: [
      "CAS stands for creativity, activity, and service.",
      "Students pursue meaningful experiences outside class and reflect on how those experiences shape their growth.",
      "CAS helps students maintain balance and connect the diploma experience to their community."
    ],
  },
];

const plannerCourses = courses.filter((course) => course.level !== "Core");
const coreCourses = courses.filter((course) => course.level === "Core");
const STORAGE_KEY = "ahs-ib-planner-v2";

const courseGrid = document.querySelector("#courseGrid");
const bankList = document.querySelector("#bankList");
const searchInput = document.querySelector("#courseSearch");
const checks = document.querySelector("#diplomaChecks");
const dropzones = [...document.querySelectorAll(".dropzone")];
const hlCounter = document.querySelector("#hlCounter");
const slCounter = document.querySelector("#slCounter");
const customCourseForm = document.querySelector("#customCourseForm");
const customCourseName = document.querySelector("#customCourseName");
const customCourseYear = document.querySelector("#customCourseYear");

let plan = loadPlan();

function tagClass(level) {
  if (level === "Core") return "core";
  if (level.includes("HL")) return "hl";
  return "sl";
}

function getCourse(courseId) {
  return plannerCourses.find((course) => course.id === courseId);
}

function selectedIds() {
  return new Set([...plan["11"], ...plan["12"]].filter((id) => !id.startsWith("custom-")));
}

function selectedIbCourses() {
  return [...selectedIds()].map(getCourse).filter(Boolean);
}

function renderCatalog(filter = "all") {
  if (!courseGrid) return;

  const groupOrder = [
    "Group 1: Studies in Language and Literature",
    "Group 2: Language Acquisition",
    "Group 3: Individuals and Societies",
    "Group 4: Sciences",
    "Group 5: Mathematics",
    "Group 6: The Arts",
    "Core",
  ];
  const visible = courses.filter((course) => {
    if (filter === "all") return true;
    if (filter === "core") return course.level === "Core";
    return course.level.toLowerCase().includes(filter);
  });

  courseGrid.innerHTML = groupOrder
    .map((groupName) => {
      const groupCourses = visible.filter((course) => course.group === groupName);
      if (!groupCourses.length) return "";

      return `
        <section class="course-group">
          <div class="course-group-heading">
            <p class="eyebrow">${groupName === "Core" ? "IB Core" : groupName.split(":")[0]}</p>
            <h2>${groupName}</h2>
          </div>
          <div class="course-stack">
            ${groupCourses.map(courseCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function courseCard(course) {
  return `
    <article class="course-card">
      <div class="tags">
        <span class="tag ${tagClass(course.level)}">${course.level}</span>
        <span class="tag">${course.twoYear ? "2-year" : course.level === "Core" ? "Core" : "1-year"}</span>
      </div>
      <div>
        <h3>${course.title}</h3>
        ${course.details.map((detail) => `<p>${detail}</p>`).join("")}
      </div>
      <p><strong>Typical sequence:</strong> ${course.sequence.join(" -> ")}</p>
    </article>
  `;
}

function renderBank() {
  if (!bankList || !searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  const selected = selectedIds();
  const available = plannerCourses.filter((course) => {
    const searchable = `${course.title} ${course.group} ${course.level}`.toLowerCase();
    return !selected.has(course.id) && searchable.includes(query);
  });

  bankList.innerHTML = available.map((course) => draggableCard(course, "bank-card")).join("");

  if (!available.length) {
    bankList.innerHTML = `<p class="empty-message">No matching unscheduled IB classes.</p>`;
  }

  attachDragHandlers();
}

function draggableCard(course, className) {
  return `
    <div class="${className}" draggable="true" data-course-id="${course.id}">
      <strong>${course.title}</strong>
      <span>${course.level} | ${course.group.replace("Group ", "G")}</span>
    </div>
  `;
}

function customCard(item) {
  return `
    <div class="scheduled-card custom-scheduled" draggable="true" data-course-id="${item.id}">
      <strong>${item.title}</strong>
      <span>${item.type} | additional course</span>
    </div>
  `;
}

function renderSchedule() {
  if (!dropzones.length) return;

  dropzones.forEach((zone) => {
    const year = zone.dataset.year;
    const scheduled = plan[year]
      .map((id) => {
        if (id.startsWith("custom-")) return plan.custom.find((item) => item.id === id);
        return getCourse(id);
      })
      .filter(Boolean);

    zone.innerHTML = scheduled.length
      ? scheduled.map((item) => (item.type ? customCard(item) : draggableCard(item, "scheduled-card"))).join("")
      : `<p class="empty-message">Drop classes here</p>`;
  });

  attachDragHandlers();
  renderChecks();
  savePlan();
}

function attachDragHandlers() {
  document.querySelectorAll("[draggable='true']").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", card.dataset.courseId);
    });

    card.addEventListener("dblclick", () => {
      removeFromPlan(card.dataset.courseId);
    });
  });
}

dropzones.forEach((zone) => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("is-over");
  });

  zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    zone.classList.remove("is-over");
    addToPlan(event.dataTransfer.getData("text/plain"), zone.dataset.year);
  });
});

if (bankList) {
  const bankDropTarget = bankList.closest(".course-bank");

  bankDropTarget.addEventListener("dragover", (event) => {
    event.preventDefault();
    bankDropTarget.classList.add("is-over");
  });

  bankDropTarget.addEventListener("dragleave", () => bankDropTarget.classList.remove("is-over"));

  bankDropTarget.addEventListener("drop", (event) => {
    event.preventDefault();
    bankDropTarget.classList.remove("is-over");
    removeFromPlan(event.dataTransfer.getData("text/plain"));
  });
}

function addToPlan(courseId, year) {
  const course = getCourse(courseId);
  if (!course) return;

  removeFromPlan(courseId, false);

  if (course.twoYear || course.level.includes("HL")) {
    plan["11"].push(courseId);
    plan["12"].push(courseId);
  } else {
    plan[year].push(courseId);
  }

  renderBank();
  renderSchedule();
}

function removeFromPlan(courseId, shouldRender = true) {
  plan["11"] = plan["11"].filter((id) => id !== courseId);
  plan["12"] = plan["12"].filter((id) => id !== courseId);
  if (courseId.startsWith("custom-")) {
    plan.custom = plan.custom.filter((item) => item.id !== courseId);
  }
  if (shouldRender) {
    renderBank();
    renderSchedule();
  }
}

function addCustomCourse(event) {
  event.preventDefault();
  const title = customCourseName.value.trim();
  if (!title) return;

  const upperTitle = title.toUpperCase();
  const type = upperTitle.startsWith("AP ") ? "AP" : upperTitle.startsWith("CP ") ? "CP" : "Other";
  const id = `custom-${Date.now()}`;
  plan.custom.push({ id, title, type });
  plan[customCourseYear.value].push(id);
  customCourseName.value = "";
  renderSchedule();
}

function renderChecks() {
  if (!checks) return;

  const selected = selectedIbCourses();
  const groups = new Set(
    selected.flatMap((course) =>
      course.group.includes("Groups 3 & 4") ? ["Group 3", "Group 4"] : [course.group.slice(0, 7)]
    )
  );
  const hlCount = selected.filter((course) => course.level === "HL").length;
  const slCount = selected.filter((course) => course.level.includes("SL")).length;
  const customCount = plan.custom.length;
  const hasArts = selected.some((course) => course.group.includes("Group 6"));
  const hasMath = selected.some((course) => course.group.includes("Group 5"));
  const hasLanguage = selected.some((course) => course.group.includes("Group 1"));
  const hasSecondLanguage = selected.some((course) => course.group.includes("Group 2"));

  if (hlCounter) hlCounter.textContent = `${Math.min(hlCount, 3)}/3`;
  if (slCounter) slCounter.textContent = `${Math.min(slCount, 3)}/3`;

  const items = [
    { ok: selected.length >= 6, title: "Six IB subjects", detail: `${selected.length}/6 IB subjects selected` },
    { ok: hlCount >= 3, title: "HL requirement", detail: `${hlCount}/3 HL courses selected` },
    { ok: slCount >= 3, title: "SL target", detail: `${slCount}/3 SL courses selected` },
    { ok: hasLanguage && hasSecondLanguage && hasMath, title: "Required anchors", detail: "English, second language, and math are represented" },
    { ok: groups.has("Group 3") && groups.has("Group 4"), title: "Humanities and science", detail: "Individuals and Societies plus Science are represented" },
    { ok: hasArts || selected.length >= 6, title: "Arts or substitution", detail: hasArts ? "Arts course selected" : "Another IB subject can substitute for the arts group" },
    { ok: customCount > 0, title: "Open schedule space", detail: customCount ? `${customCount} AP, CP, or other course added` : "Add AP or CP courses if space remains" },
    { ok: true, title: "Core required", detail: coreCourses.map((course) => course.title).join(", ") },
  ];

  checks.innerHTML = items
    .map(
      (item) => `
        <div class="check ${item.ok ? "ok" : "warn"}">
          <span class="check-icon">${item.ok ? "OK" : "!"}</span>
          <span><strong>${item.title}</strong>${item.detail}</span>
        </div>
      `
    )
    .join("");
}

function savePlan() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
}

function normalizePlan(saved) {
  const base = { 11: [], 12: [], custom: [] };
  if (!saved || typeof saved !== "object") return base;
  return {
    11: Array.isArray(saved["11"]) ? saved["11"] : [],
    12: Array.isArray(saved["12"]) ? saved["12"] : [],
    custom: Array.isArray(saved.custom) ? saved.custom : [],
  };
}

function loadPlan() {
  try {
    return normalizePlan(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch {
    return normalizePlan();
  }
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCatalog(button.dataset.filter);
  });
});

if (searchInput) searchInput.addEventListener("input", renderBank);
if (customCourseForm) customCourseForm.addEventListener("submit", addCustomCourse);

const samplePlanButton = document.querySelector("#samplePlan");
if (samplePlanButton) {
  samplePlanButton.addEventListener("click", () => {
    plan = {
      11: ["english-hl", "spanish-hl", "history-hl", "math-aa-sl", "ess-sl", "film-hl", "custom-1"],
      12: ["english-hl", "spanish-hl", "history-hl", "sehs-sl", "psychology-sl", "film-hl", "custom-2"],
      custom: [
        { id: "custom-1", title: "AP Computer Science", type: "AP" },
        { id: "custom-2", title: "CP Economics", type: "CP" },
      ],
    };
    renderBank();
    renderSchedule();
  });
}

const resetPlanButton = document.querySelector("#resetPlan");
if (resetPlanButton) {
  resetPlanButton.addEventListener("click", () => {
    plan = { 11: [], 12: [], custom: [] };
    renderBank();
    renderSchedule();
  });
}

const printPlanButton = document.querySelector("#printPlan");
if (printPlanButton) printPlanButton.addEventListener("click", () => window.print());

renderCatalog();
renderBank();
renderSchedule();
