"use strict";
// pre-set

const checkCurrentLanguage = () => {
  if (
    typeof localStorage.lang !== "undefined" ||
    localStorage.lang === null ||
    localStorage.length === 0
  ) {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    localStorage.lang = document.documentElement.lang;
    localStorage.dir = document.documentElement.dir;
    currentLang = localStorage.lang;
    currentDir = localStorage.dir;
  } else {
    document.documentElement.lang = localStorage.lang;
    document.documentElement.dir = localStorage.dir;
    currentLang = localStorage.lang;
    currentDir = localStorage.dir;
  }
};

const handleForm = () => {
  [accountIndividual, accountEntity].forEach((e) => {
    e.addEventListener("click", (e) => {
      if (e.target === accountIndividual) {
        formIndividual.classList.add("active");
        formEntity.classList.remove("active");
      }
      if (e.target === accountEntity) {
        formEntity.classList.add("active");
        formIndividual.classList.remove("active");
      }
    });
  });

  document
    .querySelector("#popup-form-individual .close-btn")
    .addEventListener("click", () => {
      formIndividual.classList.remove("active");
    });
  document
    .querySelector("#popup-form-entity .close-btn")
    .addEventListener("click", () => {
      formEntity.classList.remove("active");
    });
};

let formIndividual = document.querySelector("#popup-form-individual");
let formEntity = document.querySelector("#popup-form-entity");
let accountIndividual = document.querySelector(".account-individual");
let accountEntity = document.querySelector(".account-entity");

const handleFormLanguage = (lang) => {
  formIndividual.children[1].children[0].innerHTML =
    formLanguage[lang].formTitle;
  formEntity.children[1].children[0].innerHTML = formLanguage[lang].formTitle;
  formIndividual.children[1].children[1].children[0].innerHTML =
    formLanguage[lang].emailLabel;
  formEntity.children[1].children[1].children[0].innerHTML =
    formLanguage[lang].emailLabel;
  formIndividual.children[1].children[2].children[0].innerHTML =
    formLanguage[lang].passwordLabel;
  formEntity.children[1].children[2].children[0].innerHTML =
    formLanguage[lang].passwordLabel;
  formIndividual.children[1].children[3].children[0].innerHTML =
    formLanguage[lang].forgotPassword;
  formEntity.children[1].children[3].children[0].innerHTML =
    formLanguage[lang].forgotPassword;
  formIndividual.children[1].children[4].children[0].innerHTML =
    formLanguage[lang].formBtn;
  formEntity.children[1].children[4].children[0].innerHTML =
    formLanguage[lang].formBtn;

  if (lang === "ar") {
    formIndividual.children[1].children[1].children[0].classList.add(
      "text-end"
    );
    formIndividual.children[1].children[1].children[0].classList.remove(
      "text-start"
    );
    formEntity.children[1].children[1].children[0].classList.add("text-end");
    formEntity.children[1].children[1].children[0].classList.remove(
      "text-start"
    );
    formIndividual.children[1].children[2].children[0].classList.add(
      "text-end"
    );
    formIndividual.children[1].children[2].children[0].classList.remove(
      "text-start"
    );
    formEntity.children[1].children[2].children[0].classList.add("text-end");
    formEntity.children[1].children[2].children[0].classList.remove(
      "text-start"
    );
    formIndividual.children[1].children[3].children[0].classList.add(
      "text-end"
    );
    formIndividual.children[1].children[3].children[0].classList.remove(
      "text-start"
    );
    formEntity.children[1].children[3].children[0].classList.add("text-end");
    formEntity.children[1].children[3].children[0].classList.remove(
      "text-start"
    );
  }
  if (lang === "en") {
    formIndividual.children[1].children[1].children[0].classList.add(
      "text-start"
    );
    formIndividual.children[1].children[1].children[0].classList.remove(
      "text-end"
    );
    formEntity.children[1].children[1].children[0].classList.add("text-start");
    formEntity.children[1].children[1].children[0].classList.remove("text-end");
    formIndividual.children[1].children[2].children[0].classList.add(
      "text-start"
    );
    formIndividual.children[1].children[2].children[0].classList.remove(
      "text-end"
    );
    formEntity.children[1].children[2].children[0].classList.add("text-start");
    formEntity.children[1].children[2].children[0].classList.remove("text-end");
    formIndividual.children[1].children[3].children[0].classList.add(
      "text-start"
    );
    formIndividual.children[1].children[3].children[0].classList.remove(
      "text-end"
    );
    formEntity.children[1].children[3].children[0].classList.add("text-start");
    formEntity.children[1].children[3].children[0].classList.remove("text-end");
  }
};

// Elements

const navbar = document.querySelector("nav .container");
const navbarBrandBox = document.querySelector(".navbar-brand");
const controlBox = document.querySelector(".control-box");
const signInSection = document.querySelector("#sign-in .container");
const footer = document.querySelector("footer .container");

const controlNavbarBrand = (lang) => {
  if (lang === "ar" || !lang) {
    navbarBrandBox.innerHTML = `
          <img src="assets/img/logo.ico" alt="logo" class="brand-icon ms-2" />
          <span class="nav-slogan slogan d-inline-flex flex-column">
              <span class="fw-bold">حلول تمويل التقاضي</span>
              <br/>
              <span class="fw-bold">  التي تثق بها</span>
          </span>
      `;
  }
  if (lang === "en") {
    navbarBrandBox.innerHTML = `
        <span class="nav-slogan slogan d-inline-flex flex-column">
            <span class="fw-bold align-self-end">Litigation Financing Solutions</span>
            <br/>
            <span class="fw-bold align-self-end">That You Trust</span>
        </span>
        <img src="assets/img/logo.ico" alt="logo" class="brand-icon me-2" />
      `;
  }
};
const controlNanvbarLanguage = (lang) => {
  if (lang === "ar" || !lang) {
    controlBox.style.width = "140px";
    controlBox.innerHTML = `
        <div class="language-box">
          <span class="language align-middle">
            <img src="assets/img/lang-icons/united-kingdom.png" alt="english" class="lang-icon">
          </span>
        </div>

        <a href="#" class="sign-up d-flex justify-content-center align-items-center">
          <span>سجل الآن</span>
          <i class="fa-solid fa-arrow-left me-1"></i>
        </a>
    `;
  }
  if (lang === "en") {
    controlBox.style.width = "180px";
    controlBox.innerHTML = `
      <a href="#" class="sign-up d-flex justify-content-center align-items-center">
        <i class="fa-solid fa-arrow-right ms-1"></i>
          <span>Register now</span>
        </a>
        <div class="language-box">
          <span class="language align-middle">
            <img src="assets/img/lang-icons/saudi-arabia.png" alt="arabic" class="lang-icon">
          </span>
        </div>
    `;
  }
};
const controlSignInLanguage = (lang) => {
  if (lang === "ar" || !lang) {
    signInSection.innerHTML = `
        <div class="sign-in-title">
          <h2 class="mb-0 text-center">تسجيل الدخول</h2>
          <span class="text-center">مرحباً بعودتك من جديد!</span>
        </div>

        <div class="account">
          <p class="account-title text-muted">حدد نوع الحساب</p>

          <div class="account-type">
            <div class="account-individual">
              <i class="fa-solid fa-user"></i>
              <p class="account-type-title">فرد</p>
            </div>

            <div class="account-entity">
              <i class="fa-solid fa-building"></i>
              <p class="account-type-title">منشأة</p>
            </div>
          </div>
    `;
  }
  if (lang === "en") {
    signInSection.innerHTML = `
    <div class="sign-in-title">
          <h2 class="mb-0 text-center">Sign in</h2>
          <span class="text-center">Welcome Back!</span>
        </div>

        <div class="account">
          <p class="account-title text-muted">Select account type</p>

          <div class="account-type">
            <div class="account-individual">
              <i class="fa-solid fa-user"></i>
              <p class="account-type-title">Individual</p>
            </div>

            <div class="account-entity">
              <i class="fa-solid fa-building"></i>
              <p class="account-type-title">Entity</p>
            </div>
          </div>
    `;
  }
};
const controlFooterLanguage = (lang) => {
  if (lang === "ar" || !lang) {
    footer.innerHTML = `
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6  d-flex flex-column justify-content-between py-4 text-center">
              <div class="logo mb-2">
                <a href="#">
                  <img src="assets/img/logo.webp" alt="logo" class="w-25 mb-2">
                </a>
              </div>
              <div class="info mt-2">
                <span class="text-white-50 d-block mb-2 footer-slogan">شركة تمويل التقاضي</span>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6  d-flex flex-column justify-content-around py-4 text-center">
              <h4 class="fs-5 fw-semibold mb-4 footer-contact">التواصل</h4>
              <a href="mailto:Litfinan@gmail.com" class="contact-email fs-6 fw-normal">Litfinan@gmail.com</a>
              <ul class="social d-flex flex-row justify-content-center">
                <li>
                  <div class="icon mx-2">
                    <a href="#">
                      <i class="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="icon mx-2">
                    <a href="#">
                      <i class="fa-brands fa-x-twitter fa-xl"></i>
                    </a>
                  </div>
                </li>
                <li>
                  <div class="icon mx-2">
                    <a href="#">
                      <i class="fa-brands fa-facebook fa-xl"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr>
          <div class="copyright d-flex justify-content-center align-items-center">
            <p class="copyright-content">جميع الحقوق محفوظة لـ شركة تمويل التقاضي © 2024</p>
          </div>
    `;
  }
  if (lang === "en") {
    footer.innerHTML = `
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6  d-flex flex-column justify-content-around py-4 text-center">
          <h4 class="fs-5 fw-semibold mb-4 footer-contact">Contact</h4>
          <a href="mailto:Litfinan@gmail.com" class="contact-email fs-6 fw-normal">Litfinan@gmail.com</a>
          <ul class="social d-flex flex-row justify-content-center">
            <li>
              <div class="icon mx-2">
                <a href="#">
                  <i class="fa-brands fa-linkedin fa-xl"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="icon mx-2">
                <a href="#">
                  <i class="fa-brands fa-x-twitter fa-xl"></i>
                </a>
              </div>
            </li>
            <li>
              <div class="icon mx-2">
                <a href="#">
                  <i class="fa-brands fa-facebook fa-xl"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-6  d-flex flex-column justify-content-between py-4 text-center">
          <div class="logo mb-2">
            <a href="#">
              <img src="assets/img/logo.webp" alt="logo" class="w-25 mb-2">
            </a>
          </div>
          <div class="info mt-2">
            <span class="text-white-50 d-block mb-2 footer-slogan">Litigation Financing</span>
          </div>
        </div>
      </div>
      <hr>
      <div class="copyright d-flex justify-content-center align-items-center">
        <p class="copyright-content">All rights reserved | Litigation Financing Company © 2024</p>
      </div>
    `;
  }
};

controlNavbarBrand("ar");
controlNanvbarLanguage("ar");
controlSignInLanguage("ar");
handleFormLanguage("ar");
controlFooterLanguage("ar");

controlBox.addEventListener("click", (ele) => {
  if (ele.target.classList.contains("lang-icon")) {
    if (
      document.documentElement.lang === "ar" ||
      !document.documentElement.lang
    ) {
      document.documentElement.lang = localStorage.lang = "en";
      document.documentElement.dir = localStorage.dir = "ltr";
    } else if (document.documentElement.lang === "en") {
      document.documentElement.lang = localStorage.lang = "ar";
      document.documentElement.dir = localStorage.dir = "rtl";
    }

    controlNavbarBrand(document.documentElement.lang);
    controlNanvbarLanguage(document.documentElement.lang);
    controlSignInLanguage(document.documentElement.lang);
    controlFooterLanguage(document.documentElement.lang);

    const handleForm = () => {
      [accountIndividual, accountEntity].forEach((e) => {
        e.addEventListener("click", (e) => {
          if (e.target === accountIndividual) {
            formIndividual.classList.add("active");
            formEntity.classList.remove("active");
          }
          if (e.target === accountEntity) {
            formEntity.classList.add("active");
            formIndividual.classList.remove("active");
          }
        });
      });

      document
        .querySelector("#popup-form-individual .close-btn")
        .addEventListener("click", () => {
          formIndividual.classList.remove("active");
        });
      document
        .querySelector("#popup-form-entity .close-btn")
        .addEventListener("click", () => {
          formEntity.classList.remove("active");
        });
    };

    //! FORM
    const formIndividual = document.querySelector("#popup-form-individual");
    const formEntity = document.querySelector("#popup-form-entity");
    const accountIndividual = document.querySelector(".account-individual");
    const accountEntity = document.querySelector(".account-entity");
    handleForm();
    handleFormLanguage(document.documentElement.lang);

    navbar.classList.toggle("flex-row-reverse");
    navbar.classList.toggle("justify-content-between");

    if (
      window.matchMedia("(min-width: 426px)").matches &&
      document.documentElement.lang === "ar"
    ) {
      signInSection.children[1].children[1].classList.remove(
        "flex-row-reverse"
      );
    }
    if (
      window.matchMedia("(min-width: 426px)").matches &&
      document.documentElement.lang === "en"
    ) {
      signInSection.children[1].children[1].classList.add("flex-row-reverse");
    }

    if (
      window.matchMedia("(max-width: 575px)").matches &&
      document.documentElement.lang === "ar"
    ) {
      footer.children[0].classList.remove("flex-column-reverse");
    }
    if (
      window.matchMedia("(max-width: 575px)").matches &&
      document.documentElement.lang === "en"
    ) {
      footer.children[0].classList.add("flex-column-reverse");
    }
  }
});

// //! FORM
formIndividual = document.querySelector("#popup-form-individual");
formEntity = document.querySelector("#popup-form-entity");
accountIndividual = document.querySelector(".account-individual");
accountEntity = document.querySelector(".account-entity");
handleForm();

//! LOADER
const loader = document.querySelector(".loader");

const handleLoader = () => {
  loader.classList.add("loader--hidden");
};

window.addEventListener("load", () => {
  setTimeout(handleLoader, 1000);
});
  