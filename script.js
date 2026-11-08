

/* ============================================================
   YOUR MEDIA FILES

   Create an "assets" folder beside index.html.

   Change these paths to match your actual filenames, or rename
   your files to match the names below.

   Photos should be JPG/PNG/WebP. Videos should be MP4.
   ============================================================ */

const FILES = {
  portrait: "assets/portrait.jpg",

  hairCover: "assets/hair-photo-1.jpg",
  hairPhoto2: "assets/hair-photo-2.jpg",
  hairDetail: "assets/hair-detail.jpg",

  combinedChart: "assets/hair-chart.jpg",
  cindyChart: "assets/cindy-chart.jpg",
  bridgetChart: "assets/bridget-chart.jpg",
  danielleChart: "assets/danielle-chart.jpg",
  rachaelChart: "assets/rachael-chart.jpg",

  conceptPDF: "assets/hair-chart-concept.pdf",

  tribeImage: "assets/tribe.jpg",
  tribeVideo: "assets/tribe.mp4",

  thayersImage: "assets/thayers.jpg",
  thayersVideo: "assets/thayers.mp4",

  oakImage: "assets/oak.jpg",
  oakVideo1: "assets/oak-1.mp4",
  oakVideo2: "assets/oak-2.mp4",
  oakVideo3: "assets/oak-3.mp4",

  personalImage: "assets/personal.jpg",
  personalFilm: "assets/personal-film.mp4",
  personalVideo1: "assets/personal-1.mp4",
  personalVideo2: "assets/personal-2.mp4",
  personalVideo3: "assets/personal-3.mp4"
};

/* ---------- PROJECT CONTENT: EDIT YOUR WORDING HERE ---------- */

const projects = [
  {
    id: "hair",
    number: "01",
    category: ["production"],
    label: "Hair by Perpy · Self-initiated brand project",
    title: "A familiar format. A fresh point of view.",
    caseTitle: "The Modern Hair Chart",
    summary: "A modern take on the Black salon hair chart, brought from concept to a collaborative photoshoot and finished Photoshop graphics.",
    role: "Concept & creative direction · Team sourcing & coordination · Wardrobe styling · Hairstyling · Graphic design",
    tags: ["Creative production", "Art direction", "Adobe Photoshop"],
    cover: FILES.hairCover,
    coverAlt: "Models with coordinated hairstyles and wardrobe from the Hair by Perpy photoshoot",
    brief: "Revisit the hair charts I remembered seeing in Black salons and create a modern interpretation for Hair by Perpy.",
    contribution: "I developed the project, found the models, photographer, and makeup artist, and created the group chat to coordinate the collaboration. I styled the models, created their hairstyles, and designed the final hair-chart graphics in Adobe Photoshop.",
    process: [
      ["Define the direction", "Assembled a concept presentation with references for mood, wardrobe, poses, makeup, hairstyles, and possible outcomes."],
      ["Bring the team together", "Sourced the models, photographer, and makeup artist and coordinated group communication."],
      ["Style and produce", "Styled the models and created their hairstyles, bringing the planned looks into the shoot."],
      ["Build the graphics", "Combined the photographs, typography, and backgrounds into the final Photoshop hair-chart layouts."]
    ],
    deliverable: "A concept presentation, collaborative photoshoot, individual hairstyle charts, and a combined branded hair chart.",
    demonstrates: "Creative direction, production coordination, styling, and the ability to carry an idea through to finished visual assets.",
    credit: "My contribution covered concept, production coordination, wardrobe styling, hairstyling, and Photoshop graphics. Photography, makeup, and modelling were separate contributions from project collaborators.",
    gallery: [
      [FILES.hairCover, "Production, wardrobe styling, and hairstyling"],
      [FILES.hairPhoto2, "Selected photograph from the collaborative shoot"],
      [FILES.hairDetail, "A closer look at the hairstyling"],
      [FILES.combinedChart, "The combined Hair by Perpy hair chart"],
      [FILES.cindyChart, "Individual hairstyle chart — Cindy"],
      [FILES.bridgetChart, "Individual hairstyle chart — Bridget"],
      [FILES.danielleChart, "Individual hairstyle chart — Danielle"],
      [FILES.rachaelChart, "Individual hairstyle chart — Rachael"]
    ],
    pdf: FILES.conceptPDF
  },

  {
    id: "tribe",
    number: "02",
    category: ["brand", "film"],
    label: "Tribe Thrift Store · Event promotion",
    title: "A story worth stepping into.",
    caseTitle: "Tribe Thrift Store",
    summary: "A thrift-shopping story with a leather-event reveal.",
    role: "Creative concept · Shot planning · Direction · Production · Editing",
    tags: ["Creative direction", "Video production", "Event promotion"],
    cover: FILES.tribeImage,
    coverAlt: "Frame from the Tribe Thrift Store promotional film",
    brief: "Make a leather event feel like a discovery through a promotional film following two friends thrift shopping.",
    contribution: "Developed the creative concept and shot plan, directed the video, managed production, and edited the final promotional film.",
    process: [
      ["Find the story", "Built the concept around a shared shopping experience."],
      ["Plan and produce", "Mapped the shots and directed the action around the store and fitting-room sequence."],
      ["Shape the reveal", "Edited the shopping narrative into a clear event-promotion video."]
    ],
    deliverable: "A finished vertical promotional film for Tribe Thrift Store’s leather event.",
    demonstrates: "Narrative-led promotion and ownership from creative concept to final edit.",
    clips: [
      [FILES.tribeVideo, "Leather-event promotional film"]
    ],
    videoDescription: "Two friends explore a thrift store. A fitting-room sequence and outfit reveals lead into the leather-event promotion."
  },

  {
    id: "thayers",
    number: "03",
    category: ["brand"],
    label: "Thayers · PR product showcase",
    title: "A product. A personal perspective.",
    caseTitle: "Thayers Product Showcase",
    summary: "An independently filmed skincare feature, from brand research to final edit.",
    role: "Brand research · Shot list · Filming · Editing · Colour grading",
    tags: ["Product storytelling", "Camera work", "Post-production"],
    cover: FILES.thayersImage,
    coverAlt: "Frame from the Thayers skincare product showcase",
    brief: "Create an authentic skincare showcase around a PR package collaboration, with a visual approach informed by the brand’s existing content.",
    contribution: "Researched the brand’s content, developed a shot list, filmed independently using two camera angles, and completed the edit and colour grading.",
    process: [
      ["Research the brand", "Reviewed the brand’s visual style before planning the piece."],
      ["Plan and film", "Built a shot list around product details and a skincare routine."],
      ["Complete the edit", "Brought the footage, on-screen text, and colour grading together."]
    ],
    deliverable: "A vertical product-showcase video combining product details, a skincare routine, and on-screen text.",
    demonstrates: "Connecting brand research with product storytelling, filming, and post-production.",
    clips: [
      [FILES.thayersVideo, "Skincare product showcase"]
    ],
    videoDescription: "Close-up shots introduce the skincare products, followed by a filmed routine and application details."
  },

  {
    id: "oak",
    number: "04",
    category: ["brand"],
    label: "Oak Shop · Retail & social content",
    title: "More than what’s on the rack.",
    caseTitle: "Oak Shop",
    summary: "Lifestyle content that brings a shop’s personality online.",
    role: "Content ideas · Styling · Promotional video · Interactive social content",
    tags: ["Social content", "Styling", "Retail marketing"],
    cover: FILES.oakImage,
    coverAlt: "Frame from the Oak Shop retail content",
    brief: "Give the shop an online presence that reflects its in-store experience and the personality behind its products.",
    contribution: "Created promotional content and styled outfit features. Developed ideas for interactive Instagram stories, campaigns, and scavenger hunts.",
    process: [
      ["Understand the setting", "Used the shop’s products, people, and customer experience as starting points."],
      ["Create the content", "Developed promotional videos and styled outfit features."],
      ["Invite participation", "Explored interactive social formats that connected the online audience with the store."]
    ],
    deliverable: "A collection of retail-focused social videos and interactive content ideas.",
    demonstrates: "Content creation for a real retail environment, supported by customer-facing experience.",
    clips: [
      [FILES.oakVideo1, "Shop personality"],
      [FILES.oakVideo2, "Styled outfit feature"],
      [FILES.oakVideo3, "In-store visual"]
    ],
    videoDescription: "Retail and lifestyle content filmed around the shop, its products, and its personality."
  },

  {
    id: "personal",
    number: "05",
    category: ["film"],
    label: "Personal work · Lifestyle & visual storytelling",
    title: "Everyday life. My own lens.",
    caseTitle: "Personal Visual Stories",
    summary: "Self-written, self-shot, self-edited stories and visual experiments.",
    role: "Writing · On-camera performance · Filming · Editing · Personal branding",
    tags: ["Visual storytelling", "Independent production", "Editing"],
    cover: FILES.personalImage,
    coverAlt: "Frame from Perpetual Ocheme’s personal video work",
    brief: "Turn real-life moments into story-driven content, with scripting, visuals, and editing building a consistent personal voice.",
    contribution: "Write, film, perform in, and edit my own content, exploring different approaches to pacing, framing, and storytelling.",
    process: [
      ["Start with a moment", "Find a personal experience, visual idea, or everyday observation."],
      ["Build the story", "Plan the words and images around the central idea."],
      ["Explore the edit", "Experiment with framing, rhythm, sound, and format."]
    ],
    deliverable: "Short-form lifestyle videos and a landscape-format visual film.",
    demonstrates: "An individual creative voice and the ability to produce independently across formats.",
    clips: [
      [FILES.personalFilm, "Visual storytelling"],
      [FILES.personalVideo1, "Lifestyle storytelling"],
      [FILES.personalVideo2, "Fashion & visual identity"],
      [FILES.personalVideo3, "Short-form experiment"]
    ],
    videoDescription: "A selection of independently produced visual stories and lifestyle videos."
  }
];

/* ---------- SMALL REUSABLE HELPERS ---------- */

const $ = selector => document.querySelector(selector);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function makeMedia(source, description, mark, label, contain = false) {
  const frame = document.createElement("div");
  frame.className = "media" + (contain ? " contain" : "");

  const largeMark = document.createElement("span");
  largeMark.className = "media-mark";
  largeMark.setAttribute("aria-hidden", "true");
  largeMark.textContent = mark;

  const smallLabel = document.createElement("span");
  smallLabel.className = "media-label";
  smallLabel.setAttribute("aria-hidden", "true");
  smallLabel.textContent = label;

  const image = document.createElement("img");
  image.alt = description;
  image.loading = "lazy";
  image.addEventListener("error", () => image.remove(), { once: true });
  image.src = source;

  frame.append(largeMark, smallLabel, image);
  return frame;
}

/* ---------- HOMEPAGE ---------- */

$("#portrait-image").append(
  makeMedia(FILES.portrait, "Portrait of Perpetual Ocheme", "PO", "")
);

$("#year").textContent = new Date().getFullYear();

function renderProjects(filter = "all") {
  const grid = $("#project-grid");
  grid.replaceChildren();

  const visible = projects.filter(project =>
    filter === "all" || project.category.includes(filter)
  );

  $("#project-count").textContent =
    String(visible.length).padStart(2, "0") +
    (visible.length === 1 ? " PROJECT" : " PROJECTS");

  visible.forEach(project => {
    const article = document.createElement("article");
    article.className =
      "project-card" + (project.id === "hair" ? " featured" : "");

    article.append(
      makeMedia(
        project.cover,
        project.coverAlt,
        project.number,
        project.label.split(" · ")[0]
      )
    );

    const copy = document.createElement("div");
    copy.innerHTML = `
      <p class="eyebrow">${escapeHTML(project.label)}</p>
      <h3>${escapeHTML(project.title)}</h3>
      <p class="description">${escapeHTML(project.summary)}</p>
      <p class="role-label">My role</p>
      <p class="role-text">${escapeHTML(project.role)}</p>
      <div class="tags">
        ${project.tags.map(tag =>
          `<span class="tag">${escapeHTML(tag)}</span>`
        ).join("")}
      </div>
      <button class="text-button" type="button">
        Explore the case study <span aria-hidden="true">↗</span>
      </button>
    `;

    copy.querySelector("button").addEventListener("click", event => {
      openProject(project, event.currentTarget);
    });

    article.append(copy);
    grid.append(article);
  });
}

document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach(item => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderProjects(button.dataset.filter);
  });
});

renderProjects();

/* ---------- MOBILE NAVIGATION ---------- */

const menuButton = $("#menu-button");
const navigation = $("#navigation");

function closeMenu() {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    closeMenu();
    menuButton.focus();
  }
});

/* ---------- CASE STUDIES ---------- */

const projectDialog = $("#project-dialog");
const imageDialog = $("#image-dialog");
let projectTrigger = null;
let imageTrigger = null;

function updateScrollLock() {
  document.body.classList.toggle(
    "modal-open",
    projectDialog.open || imageDialog.open
  );
}

function openProject(project, trigger) {
  projectTrigger = trigger;
  const content = $("#case-content");

  content.innerHTML = `
    <p class="eyebrow">${escapeHTML(project.label)}</p>
    <h2 id="project-title">${escapeHTML(project.caseTitle)}</h2>
    <p class="lead">${escapeHTML(project.summary)}</p>

    <div class="case-role">
      <strong>MY ROLE</strong>
      ${escapeHTML(project.role)}
    </div>

    <div id="case-media"></div>

    <div class="case-columns">
      <div>
        <h3>The brief</h3>
        <p>${escapeHTML(project.brief)}</p>
      </div>
      <div>
        <h3>My contribution</h3>
        <p>${escapeHTML(project.contribution)}</p>
      </div>
    </div>

    <h3>From idea to delivery</h3>
    <ol class="process">
      ${project.process.map(step => `
        <li>
          <strong>${escapeHTML(step[0])}.</strong>
          ${escapeHTML(step[1])}
        </li>
      `).join("")}
    </ol>

    <div class="case-columns">
      <div>
        <h3>The deliverable</h3>
        <p>${escapeHTML(project.deliverable)}</p>
      </div>
      <div>
        <h3>What this demonstrates</h3>
        <p>${escapeHTML(project.demonstrates)}</p>
      </div>
    </div>

    <div id="case-gallery"></div>
    <div id="case-extra"></div>
  `;

  const mediaArea = content.querySelector("#case-media");

  if (project.clips) {
    buildVideoPlayer(project, mediaArea);
  } else {
    const cover = makeMedia(
      project.cover,
      project.coverAlt,
      project.number,
      "Selected project photograph"
    );
    cover.classList.add("case-cover");
    mediaArea.append(cover);
  }

  if (project.gallery) {
    buildGallery(project, content.querySelector("#case-gallery"));
  }

  const extra = content.querySelector("#case-extra");

  if (project.credit) {
    const credit = document.createElement("p");
    credit.className = "credit";
    credit.textContent = project.credit;
    extra.append(credit);
  }

  if (project.pdf) {
    const heading = document.createElement("h3");
    heading.textContent = "Where the project started";

    const note = document.createElement("p");
    note.className = "muted";
    note.textContent =
      "The original planning deck contains concept and styling references. Reference imagery is inspiration, separate from the finished shoot photography.";

    const link = document.createElement("a");
    link.className = "button";
    link.href = project.pdf;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "Open the concept deck ↗ (PDF)";

    extra.append(heading, note, link);
  }

  projectDialog.showModal();
  projectDialog.scrollTop = 0;
  updateScrollLock();
  $("#close-project").focus();
}

function buildVideoPlayer(project, area) {
  const player = document.createElement("div");
  player.className = "video-player";

  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.poster = project.cover;
  video.setAttribute("aria-label", project.clips[0][1]);

  const note = document.createElement("p");
  note.className = "video-note";
  note.textContent = project.videoDescription;

  video.addEventListener("error", () => {
    note.textContent =
      "Video preview unavailable. Add the matching MP4 file to the assets folder to display this work.";
  });

  video.src = project.clips[0][0];
  player.append(video, note);
  area.append(player);

  if (project.clips.length > 1) {
    const buttons = document.createElement("div");
    buttons.className = "clip-buttons";
    buttons.setAttribute("role", "group");
    buttons.setAttribute("aria-label", "Choose a video");

    project.clips.forEach((clip, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = clip[1];
      button.setAttribute("aria-pressed", String(index === 0));

      button.addEventListener("click", () => {
        video.pause();
        video.src = clip[0];
        video.setAttribute("aria-label", clip[1]);
        video.load();
        note.textContent = project.videoDescription;

        buttons.querySelectorAll("button").forEach(item => {
          item.setAttribute("aria-pressed", String(item === button));
        });
      });

      buttons.append(button);
    });

    area.append(buttons);
  }
}

function buildGallery(project, area) {
  const heading = document.createElement("h3");
  heading.textContent = "The work, up close";

  const explanation = document.createElement("p");
  explanation.className = "muted";
  explanation.textContent = "Select an image to view it at full size.";

  const gallery = document.createElement("div");
  gallery.className = "gallery";

  project.gallery.forEach((item, index) => {
    const figure = document.createElement("figure");
    const button = document.createElement("button");
    button.type = "button";
    button.disabled = true;
    button.setAttribute("aria-label", "Enlarge: " + item[1]);

    const frame = makeMedia(
      item[0],
      item[1],
      String(index + 1).padStart(2, "0"),
      "Project image",
      true
    );

    const image = frame.querySelector("img");

    if (image.complete && image.naturalWidth > 0) {
      button.disabled = false;
    } else {
      image.addEventListener("load", () => {
        button.disabled = false;
      }, { once: true });
    }

    button.append(frame);

    button.addEventListener("click", () => {
      imageTrigger = button;
      $("#full-image").src = item[0];
      $("#full-image").alt = item[1];
      $("#image-caption").textContent = item[1];
      imageDialog.showModal();
      updateScrollLock();
      $("#close-image").focus();
    });

    const caption = document.createElement("figcaption");
    caption.textContent = item[1];
    figure.append(button, caption);
    gallery.append(figure);
  });

  area.append(heading, explanation, gallery);
}

$("#close-project").addEventListener("click", () => {
  projectDialog.close();
});

$("#close-image").addEventListener("click", () => {
  imageDialog.close();
});

projectDialog.addEventListener("close", () => {
  projectDialog.querySelectorAll("video").forEach(video => video.pause());
  updateScrollLock();
  if (projectTrigger?.isConnected) projectTrigger.focus();
});

imageDialog.addEventListener("close", () => {
  updateScrollLock();
  if (imageTrigger?.isConnected) imageTrigger.focus();
});

[projectDialog, imageDialog].forEach(dialog => {
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;

    const rectangle = dialog.getBoundingClientRect();
    const outside =
      event.clientX < rectangle.left ||
      event.clientX > rectangle.right ||
      event.clientY < rectangle.top ||
      event.clientY > rectangle.bottom;

    if (outside) dialog.close();
  });
});

/* ---------- COPY EMAIL ---------- */

$("#copy-email").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("perpetualocheme@gmail.com");
    $("#copy-status").textContent = "Email address copied.";
  } catch {
    $("#copy-status").textContent =
      "Select the email address above and copy it, or click it to open your email app.";
  }
});