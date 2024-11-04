"use strict";
// Collapse navbar automatically
const navbar = document.querySelector("nav");
const navCollapseList = document.querySelector(".navbar-collapse");

navbar.addEventListener('click', e => {
  const navItem = e.target.closest(".nav-item");
  if (!navItem) return;
  navCollapseList.classList.remove("show");
})
//////////////////////////////////////////////

/*   S T A R T                     F A Q                        S E C T I O N  */
const faqsContainer = document.querySelector(".questions");
const faqs = document.querySelectorAll(".question-item");

faqsContainer.addEventListener("click", (e) => {
  const question = e.target.closest(".question-item");
  if (!question) return;
  if (question.classList.contains("active")) {
    question.classList.remove("active");
    return
  }
  faqs.forEach(faq => {
    faq.classList.remove('active');
  })
  question.classList.add("active");
});
/*   E N D                     F A Q                        S E C T I O N  */
