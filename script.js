let accordions;
const accordionWrapper = document.querySelector(".accordion-wrapper");

const contentData = [
  {
    id: 1,
    title: "Title 1",
    content: "Lorem ipsum. Abracadabra",
  },
  {
    id: 2,
    title: "Title 2",
    content: "Lorem ipsum. Abracadabra",
  },
  {
    id: 3,
    title: "Title 3",
    content: "Lorem ipsum .Abracadabra",
  },
  {
    id: 4,
    title: "Title 4",
    content: "Lorem ipsum. Abracadabra",
  },
  {
    id: 5,
    title: "Title 5",
    content: "Lorem ipsum. Abracadabra",
  },
  {
    id: 6,
    title: "Title 6",
    content: "Lorem ipsum . Abracadabra",
  },
];

const createTemplate = (item) => {
  return `
    <div class="accordion__item">
    <div class="accordion__title">${item.title}</div>
    <div class="accordion__content">
      ${item.content}
    </div>

    `;
};

const fillHtmlList = () => {
  contentData.forEach((item) => {
    accordionWrapper.innerHTML += createTemplate(item);
  });
  accordions = document.querySelectorAll(".accordion__item");
};
fillHtmlList();

if (accordions) {
  for (item of accordions) {
    item.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        for (el of accordions) {
          el.classList.remove("active");
        }
        this.classList.add("active");
      }
    });
  }
}
