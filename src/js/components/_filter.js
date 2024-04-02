const filterList = document.querySelector(".filter__nav");
const filterButtons = filterList.querySelectorAll(".btn--filter");
const conferences = document.querySelectorAll(".filter__content");

let conferenceIndex = 0;

conferences.forEach((conference) => {
  conference.style.viewTransitionName = `conf-${++conferenceIndex}`;
});

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let confCategory = e.target.getAttribute("data-filter");

    if (!document.startViewTransition) {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    }

    document.startViewTransition(() => {
      updateActiveButton(e.target);
      filterEvents(confCategory);
    });
  });
});

function updateActiveButton(newButton) {
  filterList.querySelector(".active").classList.remove("active");
  newButton.classList.add("active");
}

function filterEvents(filter) {
  conferences.forEach((conference) => {
    // get each conferences category
    let eventCategory = conference.getAttribute("data-category");

    // check if that category matches with the filter
    if (filter === "all" || filter === eventCategory) {
      conference.removeAttribute("hidden");
    } else {
      conference.setAttribute("hidden", "");
    }
  });
}