let navs = ["home", "about", "profile"];

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
