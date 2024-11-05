"use strict";
const switchLanguageBtn = document.querySelector(".language-box");

//Text Elements
const navSlogan = document.querySelector(".nav-slogan");
const navLinkWho = document.querySelector(".nav-link-who");
const navLinkTerms = document.querySelector(".nav-link-terms");
const navLinkFaq = document.querySelector(".nav-link-faq");
const navLinkStart = document.querySelector(".nav-link-start");
const btnLang = document.querySelector(".language-box");
const btnSignUp = document.querySelector(".sign-up");
const homeMainTitle = document.querySelector(".home-main-title");
const homeSecTitle = document.querySelector(".home-secondary-title");
const btnStart = document.querySelector(".btn-start-now");
const btnLogin = document.querySelector(".btn-login");
const homeCompanyName = document.querySelector(".home-company-name");
const homeCompanyDesc = document.querySelector(".home-company-desc");
const featuresTitle = document.querySelector(".features-title");
const featuresDesc = document.querySelector(".features-desc");
const featureATitle = document.querySelector(".features-feature-a-title");
const featureADesc = document.querySelector(".features-feature-a-desc");
const featureBTitle = document.querySelector(".features-feature-b-title");
const featureBDesc = document.querySelector(".features-feature-b-desc");
const featureCTitle = document.querySelector(".features-feature-c-title");
const featureCDesc = document.querySelector(".features-feature-c-desc");
const featureDTitle = document.querySelector(".features-feature-d-title");
const featureDDesc = document.querySelector(".features-feature-d-desc");
const terms = document.querySelector(".terms-title");
const termsIntroTitle = document.querySelector(".terms-intro-title");
const termsIntroContent = document.querySelector(".terms-intro-content");
const termsAcceptanceTitle = document.querySelector(".terms-acceptance-title");
const termsAcceptanceDesc = document.querySelector(".terms-acceptance-desc");
const termsAcceptanceContent = document.querySelector(".terms-acceptance-content");
const termsUsageTitle = document.querySelector(".terms-usage-title");
const termsUsageContent = document.querySelector(".terms-usage-content");
const termsisclaimerTitle = document.querySelector(".terms-disclaimer-title");
const termsDisclaimerContent = document.querySelector(".terms-disclaimer-content");
const termsChangeTermsTitle = document.querySelector(".changing-terms-title");
const termsChangeTermsContent = document.querySelector(".changing-terms-content");
const termsUpdateWebsiteTitle = document.querySelector(".updating-website-title");
const termsUpdateWebsiteContent = document.querySelector(".updating-website-content");
const termsSuspendWebsiteTitle = document.querySelector(".suspending-website-title");
const termsSuspendWebsiteContent = document.querySelector(".suspending-website-content");
const termsUsingWebsiteTitle = document.querySelector(".using-our-website-title");
const termsUsingWebsiteContent = document.querySelector(".using-our-website-content");

const faqTitle = document.querySelector(".faq-title");
const faqQ1 = document.querySelector(".faq-q-1");
const faqQ2 = document.querySelector(".faq-q-2");
const faqQ3 = document.querySelector(".faq-q-3");
const faqQ4 = document.querySelector(".faq-q-4");
const faqQ5 = document.querySelector(".faq-q-5");
const faqQ6 = document.querySelector(".faq-q-6");
const faqQ7 = document.querySelector(".faq-q-7");
const faqA1 = document.querySelector(".faq-a-1");
const faqA2 = document.querySelector(".faq-a-2");
const faqA3 = document.querySelector(".faq-a-3");
const faqA4 = document.querySelector(".faq-a-4");
const faqA5 = document.querySelector(".faq-a-5");
const faqA6 = document.querySelector(".faq-a-6");
const faqA7 = document.querySelector(".faq-a-7");

const journeyTitle = document.querySelector(".journey-title");
const journeyStepOneTitle = document.querySelector('.journy-step-one-title')
const journeyStepOnecontent = document.querySelector('.journy-step-one-content')
const journeyStepTwoTitle = document.querySelector('.journy-step-two-title')
const journeyStepTwocontent = document.querySelector('.journy-step-two-content')
const journeyStepThreeTitle = document.querySelector('.journy-step-three-title')
const journeyStepThreecontent = document.querySelector('.journy-step-three-content')
const journeyStepFourTitle = document.querySelector('.journy-step-four-title')
const journeyStepFourcontent = document.querySelector('.journy-step-four-content')

const startNowTitle = document.querySelector(".start-now--title");
const startNowDesc = document.querySelector(".start-now--desc");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone_number");
const inputCompanyName = document.querySelector("#company_name");
const inputJopTitle = document.querySelector("#Job_Title");
const inputClameValue = document.querySelector("#claim_value--select");
const btnFormSubmit = document.querySelector(".start-now--submit");
const formWarningA = document.querySelector(".start-now--warning-a");
const formWarningB = document.querySelector(".start-now--warning-b");
const footerSlogan = document.querySelector(".footer-slogan");
const footerRegNum = document.querySelector(".footer-reg");
const footerToHome = document.querySelector(".footer-link-who");
const footerToTerms = document.querySelector(".footer-link-terms");
const footerToFaq = document.querySelector(".footer-link-faq");
const footerToStartNow = document.querySelector(".footer-link-start");
const footerContact = document.querySelector(".footer-contact");
const footerCopyright = document.querySelector(".copyright-content");
//////////////////////////////////////////////////////////////////////

const controlLanguage = (lang) => {
  navSlogan.innerHTML = language[lang].navSlogan;
  navLinkWho.innerHTML = language[lang].linkWho;
  navLinkTerms.innerHTML = language[lang].linkTerms;
  navLinkFaq.innerHTML = language[lang].linkFaq;
  navLinkStart.innerHTML = language[lang].linkStart;
  btnLang.innerHTML = language[lang].lang;
  btnSignUp.innerHTML = language[lang].signUp;
  homeMainTitle.innerHTML = language[lang].homeMainTitle;
  homeSecTitle.innerHTML = language[lang].homeSecondaryTitle;
  btnStart.innerHTML = language[lang].homeStartNowBtn;
  btnLogin.innerHTML = language[lang].logIn;
  homeCompanyName.innerHTML = language[lang].companyName;
  homeCompanyDesc.innerHTML = language[lang].companyDesc;
  featuresTitle.innerHTML = language[lang].featuresTitle;
  featuresDesc.innerHTML = language[lang].featuresDesc;
  featureATitle.innerHTML = language[lang].featureATitle;
  featureADesc.innerHTML = language[lang].featureADesc;
  featureBTitle.innerHTML = language[lang].featureBTitle;
  featureBDesc.innerHTML = language[lang].featureBDesc;
  featureCTitle.innerHTML = language[lang].featureCTitle;
  featureCDesc.innerHTML = language[lang].featureCDesc;
  featureDTitle.innerHTML = language[lang].featureDTitle;
  featureDDesc.innerHTML = language[lang].featureDDesc;
  terms.innerHTML = language[lang].termsTitle;
  termsIntroTitle.innerHTML = language[lang].termsIntroTitle;
  termsIntroContent.innerHTML = language[lang].termsIntroContent;
  termsAcceptanceTitle.innerHTML = language[lang].termsAcceptanceTitle;
  termsAcceptanceDesc.innerHTML = language[lang].termsAcceptanceDesc;
  Array.from(termsAcceptanceContent.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].termsAcceptanceContent[i];
  });
  termsUsageTitle.innerHTML = language[lang].termsUsageTitle;
  Array.from(termsUsageContent.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].termsUsageContent[i];
  });
  termsisclaimerTitle.innerHTML = language[lang].termsDisclaimerTitle;
  Array.from(termsDisclaimerContent.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].termsDisclaimerContent[i];
  });
  termsChangeTermsTitle.innerHTML = language[lang].termsChangeTermsTitle;
  Array.from(termsChangeTermsContent.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].termsChangeTermsContent[i];
  });
  termsUpdateWebsiteTitle.innerHTML = language[lang].termsUpdateWebsiteTitle;
  Array.from(termsUpdateWebsiteContent.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].termsUpdateWebsiteContent[i];
  });
  termsSuspendWebsiteTitle.innerHTML =
    language[lang].termssuspendWebsiteTitle;
  Array.from(termsSuspendWebsiteContent.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].termssuspendWebsiteContent[i];
  });
  termsUsingWebsiteTitle.innerHTML = language[lang].termsUsingWebsiteTitle;
  Array.from(termsUsingWebsiteContent.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].termsUsingWebsiteContent[i];
  });
  faqTitle.innerHTML = language[lang].faqTitle;
  faqQ1.innerHTML = language[lang].faqQuestions[0];
  faqQ2.innerHTML = language[lang].faqQuestions[1];
  faqQ3.innerHTML = language[lang].faqQuestions[2];
  faqQ4.innerHTML = language[lang].faqQuestions[3];
  faqQ5.innerHTML = language[lang].faqQuestions[4];
  faqQ6.innerHTML = language[lang].faqQuestions[5];
  faqQ7.innerHTML = language[lang].faqQuestions[6];
  faqA1.innerHTML = language[lang].faqAnswers[0];
  faqA2.innerHTML = language[lang].faqAnswers[1];
  faqA3.innerHTML = language[lang].faqAnswers[2];
  faqA4.innerHTML = language[lang].faqAnswers[3];
  faqA5.innerHTML = language[lang].faqAnswers[4];
  faqA6.innerHTML = language[lang].faqAnswers[5];
  faqA7.innerHTML = language[lang].faqAnswers[6];
  journeyTitle.innerHTML = language[lang].journeyTitle;
  journeyStepOneTitle.innerHTML = language[lang].journeyStepOneTitle;
  journeyStepOnecontent.innerHTML = language[lang].journeyStepOneContent;
  journeyStepTwoTitle.innerHTML = language[lang].journeyStepTwoTitle;
  journeyStepTwocontent.innerHTML = language[lang].journeyStepTwoContent;
  journeyStepThreeTitle.innerHTML = language[lang].journeyStepThreeTitle;
  journeyStepThreecontent.innerHTML = language[lang].journeyStepThreeContent;
  journeyStepFourTitle.innerHTML = language[lang].journeyStepFourTitle;
  journeyStepFourcontent.innerHTML = language[lang].journeyStepFourContent;

  startNowTitle.innerHTML = language[lang].startNowTitle;
  startNowDesc.innerHTML = language[lang].startNowDesc;
  inputName.placeholder = language[lang].inputName;
  inputEmail.placeholder = language[lang].inputNumber;
  inputPhone.placeholder = language[lang].inputEmail;
  inputCompanyName.placeholder = language[lang].inputCompany;
  inputJopTitle.placeholder = language[lang].inputJop;
  Array.from(inputClameValue.children).forEach((ele, i) => {
    ele.innerHTML = language[lang].inputClameValues[i];
    if(i !== 0) ele.value = language[lang].inputClameValues[i];
  });
  btnFormSubmit.innerHTML = language[lang].startNowSubmit;
  formWarningA.innerHTML = language[lang].startNowNoteA;
  formWarningB.innerHTML = language[lang].startNowNoteB;
  footerSlogan.innerHTML = language[lang].footerSlogan;
  footerRegNum.innerHTML = language[lang].footerRegNum;
  footerToHome.innerHTML = language[lang].footerWho;
  footerToTerms.innerHTML = language[lang].footerTerms;
  footerToFaq.innerHTML = language[lang].footerFaq;
  footerToStartNow.innerHTML = language[lang].footerStart;
  footerContact.innerHTML = language[lang].footerContact;
  footerCopyright.innerHTML = language[lang].footerCopyright;
}

if (localStorage.lang || !localStorage.lang === "undefined") {
  document.documentElement.lang = localStorage.lang;
  document.documentElement.dir = localStorage.dir;
}

if (!localStorage.lang || localStorage.lang === "undefined") {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";
  localStorage.lang = document.documentElement.lang;
  localStorage.dir = document.documentElement.dir;
  controlLanguage(localStorage.lang);
} else {
  document.documentElement.lang = localStorage.lang;
  document.documentElement.dir = localStorage.dir;
  controlLanguage(localStorage.lang);
}

switchLanguageBtn.addEventListener("click", () => {
  if (localStorage.lang === "ar") {
    localStorage.lang = "en";
    localStorage.dir = "ltr";
    navbarItems.classList.replace("ms-auto", "me-auto");
    navbarBrandIcon.classList.replace("ms-2", "me-2");
    journeyStepOneTitle.parentNode.style.marginInlineStart = "-20px";
    journeyStepOneTitle.parentNode.style.marginInlineEnd = "0px";
    journeyStepThreeTitle.parentNode.style.marginInlineStart = "-20px";
    journeyStepThreeTitle.parentNode.style.marginInlineEnd = "0px";

    journeyStepTwoTitle.parentNode.style.marginInlineStart = "0px";
    journeyStepTwoTitle.parentNode.style.marginInlineEnd = "-20px";
    journeyStepFourTitle.parentNode.style.marginInlineStart = "0px";
    journeyStepFourTitle.parentNode.style.marginInlineEnd = "-20px";
    
    journeyStepOneTitle.parentNode.classList.replace("right", "left");
    journeyStepThreeTitle.parentNode.classList.replace("right", "left");
    journeyStepTwoTitle.parentNode.classList.replace("left", "right");
    journeyStepFourTitle.parentNode.classList.replace("left", "right");
  } else {
    localStorage.lang = "ar";
    localStorage.dir = "rtl";
    navbarItems.classList.replace("me-auto", "ms-auto");
    navbarBrandIcon.classList.replace("me-2", "ms-2");

    journeyStepOneTitle.parentNode.style.marginInlineStart = "-20px";
    journeyStepOneTitle.parentNode.style.marginInlineEnd = "0px";
    journeyStepThreeTitle.parentNode.style.marginInlineStart = "-20px";
    journeyStepThreeTitle.parentNode.style.marginInlineEnd = "0px";

    journeyStepTwoTitle.parentNode.style.marginInlineStart = "0px";
    journeyStepTwoTitle.parentNode.style.marginInlineEnd = "-20px";
    journeyStepFourTitle.parentNode.style.marginInlineStart = "0px";
    journeyStepFourTitle.parentNode.style.marginInlineEnd = "-20px";

    journeyStepOneTitle.parentNode.classList.replace("left", "right");
    journeyStepThreeTitle.parentNode.classList.replace("left", "right");
    journeyStepTwoTitle.parentNode.classList.replace("right", "left");
    journeyStepFourTitle.parentNode.classList.replace("right", "left");
  }
  loader.classList.remove("loader--hidden");
  console.log(loader.classList);
  setTimeout(handleLoader, 500);
  setTimeout(handleLanguage, 150)
  controlLanguage(localStorage.lang);
})

const handleLanguage = () => {
  document.documentElement.lang = localStorage.lang;
  document.documentElement.dir = localStorage.dir;
}
controlLanguage(localStorage.lang);
