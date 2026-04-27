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
    // Add your projects here. Set `url` to the live site link.
    const projects = [
      { title: "Skool Web", tag: "Education", meta: "School portal redesign",  url: "#", color: "warm", },
      { title: "Skool Web", tag: "Education", meta: "Dashboard layout",         url: "#", color: "sun", },
      { title: "Skool Web", tag: "Education", meta: "Student hub UI",           url: "#", color: "forest", },
      { title: "Skool Web", tag: "Education", meta: "Admin panel design",       url: "#", color: "amethyst", },
    ];
 
    // ── Render cards ──────────────────────────────────────────
    const container = document.getElementById('exploreContent');
 
    projects.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <div>
          <h3>${p.title}</h3>
          <h6 class="pill pill-${p.color}">${p.tag}</h6>
        </div>
        <button class="preview-btn" data-index="${i}">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"/>
            <circle cx="8" cy="8" r="2"/>
          </svg>
          Preview
        </button>
      `;
      container.appendChild(card);
    });
 
    // ── Modal logic ───────────────────────────────────────────
    const backdrop       = document.getElementById('modalBackdrop');
    const modalTitle     = document.getElementById('modalTitle');
    const modalPreviewLabel = document.getElementById('modalPreviewLabel');
    const modalMeta      = document.getElementById('modalMeta');
    const visitBtn       = document.getElementById('visitBtn');
 
    // Open modal on Preview click
    container.addEventListener('click', e => {
      const btn = e.target.closest('.preview-btn');
      if (!btn) return;
 
      const p = projects[parseInt(btn.dataset.index)];
      modalTitle.textContent        = p.title;
      modalPreviewLabel.textContent = `Preview for: ${p.meta}`;
      modalMeta.textContent         = p.meta;
      visitBtn.onclick              = () => window.open(p.url, '_blank');
 
      backdrop.classList.add('open');
    });
 
    // Close on × button
    document.getElementById('modalClose').addEventListener('click', () => {
      backdrop.classList.remove('open');
    });
 
    // Close on backdrop click
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) backdrop.classList.remove('open');
    });
 
    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') backdrop.classList.remove('open');
    });
}




aboutSettings();
exploreModal();
