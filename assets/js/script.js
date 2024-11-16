"use strict";
// Elements
const navbar = document.querySelector("nav");
const navCollapseList = document.querySelector(".navbar-collapse");
const navbarItems = document.querySelector(".navbar-nav");
const navbarBrandIcon = document.querySelector(".brand-icon");

const navCollapse = document.querySelector(".navbar-collapse");
const navToggler = document.querySelector(".navbar-toggler");

const formSuccessAlert = document.querySelector(".alert-success");
const formErrorAlert = document.querySelector(".alert-danger");



//////////////////////////////////////////////
/*   S T A R T                     F A Q                        S E C T I O N  */
const faqsContainer = document.querySelector(".questions");
const faqs = document.querySelectorAll(".question-item");

faqsContainer.addEventListener("click", (e) => {
  const question = e.target.closest(".question-item");
  if (!question) return;
  if (question.classList.contains("active")) {
    question.classList.remove("active");
    return;
  }
  faqs.forEach((faq) => {
    faq.classList.remove("active");
  });
  question.classList.add("active");
});
/*   E N D                     F A Q                        S E C T I O N  */


//! LOADER
const loader = document.querySelector(".loader");

const handleLoader = () => {
  loader.classList.add("loader--hidden");
};

window.addEventListener("load", () => {
  setTimeout(handleLoader, 1000);
});

//! FORM
const formEl = document.querySelector("form");
formErrorAlert.classList.add("d-none");
formSuccessAlert.classList.add("d-none");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    const postData = await fetch("https://l-financing.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    if(postData.status !== 200) {
      formErrorAlert.classList.remove("d-none");
      throw new Error(`${document.documentElement.lang === "en" ? 'Please valid values in all fields' : 'من فضلك ادخل بيانات صحيحة'}`)
    }
    
    if(postData.status === 200) {
      formSuccessAlert.classList.remove("d-none");
    }
  } catch (error) {
    formErrorAlert.classList.remove("d-none");
  }
})

