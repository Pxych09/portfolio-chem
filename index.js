let navs = ["home", "about", "profile", "gallery"];

function activeSectionClicked(e) {
    // Remove active from all nav links
    navs.forEach(id => {
        document.querySelector(`a[href="#${id}"]`)?.classList.remove("active");
    });

    // Add active to the clicked link
    e.currentTarget.classList.add("active");
}

navs.forEach(id => {
    let link = document.querySelector(`a[href="#${id}"]`);
    if (link) {
        link.addEventListener("click", activeSectionClicked);
    }
});

function aboutSettings() {
    const wrappers = document.querySelectorAll("#about > div");
    wrappers.forEach(wrapper => {
        const select = wrapper.querySelector(".textAlign");
        const button = wrapper.querySelector(".toggleBtn");
        const content = wrapper.querySelector(".about-content");
        
        // Text align
        select.addEventListener("change", () => {
            console.log(content)
            content.style.textAlign = `${select.value}`
        });
        console.log(content)

        // Hide / Show
        button.addEventListener("click", () => {
            const isHidden = content.style.display === "none";

            content.style.display = isHidden ? "block" : "none";
            button.textContent = isHidden ? "Hide" : "Show";
        });
    });
}

function exploreModal() {
  // ── Project data ──────────────────────────────────────────
  const projects = [
    { title: "Skool Web 101", tag: "Education", meta: "Take a limited exams",  url: "https://skool-web101.netlify.app/", color: "warm", description:"A web-based educational platform built using HTML, CSS, JavaScript, and Bootstrap, with Google Apps Script serving as the API and Google Sheets as the database. Users can begin by entering their email to gain access to a dashboard interface. This project demonstrates basic user flow, data handling, and integration between front-end design and cloud-based backend services." },
    { title: "Movie Watchlists & Write a Reviews", tag: "Entertainment", meta: "Movie Watchlists (Private)",         url: "https://post-movie-watchlists.netlify.app/", color: "sun", description: "A web application developed with HTML, CSS, JavaScript, and Bootstrap, powered by Google Apps Script and Google Sheets as its database. Full access requires fixed credentials. The platform allows users to create posts about movies, write personal reviews, organize watchlists, and filter entries based on posting date, viewing date, or author. This project focuses on content management, filtering functionality, and user interaction." },
    { title: "Share a Forums", tag: "Personal", meta: "Post a forums (Private)",           url: "https://our-forums-webapp.netlify.app/", color: "forest", description: "A simple forum-style web application that requires fixed credentials for full access. Built as a practice project using a limited Firestore free-tier database, it enables users to create posts and interact with others. This project highlights basic CRUD operations and real-time or near real-time interaction within a constrained backend environment." },
    { title: "Music Poster Generator (Limited)", tag: "Entertainment", meta: "Customize Music Poster",       url: "https://custom-music-story.netlify.app/", color: "amethyst", description: "A fun and lightweight web tool that generates a poster-style image showcasing a user’s top 5 favorite music selections (e.g., April 2026). This project focuses on creativity, layout design, and dynamic content generation, offering a simple but engaging user experience." },
  ];

  // ── Render cards ──────────────────────────────────────────
  const container = document.getElementById('exploreContent');

  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="modal-h-stick">
      <hr />&nbsp;
        <p class="fs-1 text-justify">${p.description}</p>
      </div>
      <div class="modal-f-stick">
        <span class="preview-btn" data-index="${i}">
          Preview: ${p.title}
        </span>
      </div>

    `;
    container.appendChild(card);
  });

  // ── Element refs ──────────────────────────────────────────
  const backdrop        = document.getElementById('modalBackdrop');
  const modalTitle      = document.getElementById('modalTitle');
  const modalMeta       = document.getElementById('modalMeta');
  const visitBtn        = document.getElementById('visitBtn');
  const modalIframe     = document.getElementById('modalIframe');
  const previewFallback = document.getElementById('previewFallback');

  // ── Close helper ──────────────────────────────────────────
  function closeModal() {
    backdrop.classList.remove('open');
    modalIframe.src = ''; // stop background loading
  }

  // ── Open modal on Preview click ───────────────────────────
  container.addEventListener('click', e => {
    const btn = e.target.closest('.preview-btn');
    if (!btn) return;

    const p = projects[parseInt(btn.dataset.index)];

    modalTitle.textContent = p.title;
    modalMeta.textContent  = p.meta;
    visitBtn.onclick       = () => window.open(p.url, '_blank');

    if (p.url && p.url !== '#') {
      modalIframe.src           = p.url;
      modalIframe.style.display = 'block';
      previewFallback.style.display = 'none';
    } else {
      modalIframe.src           = '';
      modalIframe.style.display = 'none';
      previewFallback.style.display = 'flex';
    }

    backdrop.classList.add('open');
  });

  // ── Close triggers ────────────────────────────────────────
  document.getElementById('modalClose').addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

function toggleText(e, shortText, fullText, moreLabel = 'See more.', lessLabel = 'See less.') {
    e.preventDefault();
    const btn = e.target;
    const isCollapsed = btn.dataset.collapsed !== 'false';

    btn.previousElementSibling.textContent = isCollapsed ? fullText : shortText;
    btn.textContent = isCollapsed ? ` ${lessLabel}` : ` ${moreLabel}`;
    btn.dataset.collapsed = !isCollapsed;
}


aboutSettings();
exploreModal();
