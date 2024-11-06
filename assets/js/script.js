"use strict";
// Elements
const navbar = document.querySelector("nav");
const navCollapseList = document.querySelector(".navbar-collapse");
const navbarItems = document.querySelector(".navbar-nav");
const navbarBrandIcon = document.querySelector(".brand-icon");

const navCollapse = document.querySelector(".navbar-collapse");
const navToggler = document.querySelector(".navbar-toggler");

// navToggler.addEventListener("click", () => {
//   navCollapse.classList.add("invisible");
//   console.log(10);
//   setTimeout(delay, 100);
// });

// const delay = () => {
//   navCollapse.classList.remove("invisible");
// };

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
const language = {
  ar: {
    navSlogan: `
        <span class="fw-bold fs-6 nav-slogan">حلول تمويل التقاضي</span>
        <br/>
        <span class="fw-bold fs-6 nav-slogan">  التي تثق بها</span>
    `,
    linkWho: "من نحن",
    linkTerms: "الشروط والأحكام",
    linkFaq: "الأسئلة الشائعة",
    linkStart: "ابدأ الآن",
    lang: `
    <span class="ms-3 language-box">
      <span class="language">
        <span class="">English</span>
        <i class="fa-solid fa-globe me-1"></i>
      </span>
    </span>
          `,
    signUp: `
    <span>
    سجل الآن
    </span>
    <i class="fa-solid fa-arrow-left me-1"></i>
    `,
    homeMainTitle: "تمويل التقاضي",
    homeSecondaryTitle: "اربح قضيتك الآن... و ادفع لاحقًا",
    homeStartNowBtn: `
        <span class="fs-3 ">ابدأ الان</span>
        <i class="fa-solid fa-arrow-left fs-4 me-2"></i>
    `,
    logIn: `
        <span class="fs-3 btn-login">تسجيل الدخول</span>
        <i class="fa-solid fa-arrow-left fs-4 me-2"></i>
    `,
    companyName: "[اسم الشركة]",
    companyDesc:
      "شركة [اسم الشركة] تأسست في [سنة التأسيس] لتقديم خدمات تمويل التقاضي للأفراد والشركات. نحن نؤمن بأن العدالة حق للجميع، ونسعى لدعم عملائنا في مواجهة التحديات القانونية عبر توفير تمويل موثوق وعادل.",
    featuresTitle: "ما هو تمويل التقاضي؟",
    featuresDesc:
      "هو توفير التمويل لأحد الأطراف في التقاضي مقابل نسبه مئوية من العائدات",
    featureATitle: "تمويل التقاضي",
    featureADesc:
      "نقدم تمويلًا لتغطية تكاليف المحامين، الخبراء، والرسوم القضائية. سواء كنت فردًا أو شركة، نحن هنا لدعمك.",
    featureBTitle: "الاستشارات القانونية",
    featureBDesc:
      "فريقنا من المحامين المتخصصين يقدم استشارات قانونية مجانية لمساعدتك في فهم حقوقك وتحديد أفضل استراتيجية قانونية..",
    featureCTitle: "تقييم القضايا",
    featureCDesc:
      "نقوم بتقييم شامل لقضيتك لتحديد مدى قوتها وفرص النجاح قبل البدء في التمويل.",
    featureDTitle: "إدارة المخاطر",
    featureDDesc:
      "نقدم حلولًا لإدارة المخاطر القانونية لضمان حماية مصالحك طوال عملية التقاضي.",
    termsTitle: "الشروط والأحكام",
    termsIntroTitle: "مقدمة:",
    termsIntroContent:
      "يتم تشغيل هذا الموقع بواسطة [اسم الشركة]، وهي شراكة ذات مسؤولية محدودة مسجلة في المملكة العربية السعودية، برقم تسجيل [ رقم التسجيل]، ومقرها المسجل في [عنوان الشركة] لأغراض هذه الشروط والأحكام.",
    termsAcceptanceTitle: "قبولكم وتأكيداتكم:",
    termsAcceptanceDesc: "من خلال استخدامكم لمنصتنا، أنتم تؤكدون على ما يلي:",
    termsAcceptanceContent: [
      "قبولكم وموافقتكم على أحكام: (1) هذه الشروط (2) سياسة الخصوصية، وتؤكدون على قارئتكم وفهمكم لها وموافقتكم على الالتزام بها.",
      "أنكم قادرون على استلام المعلومات، بما في ذلك إشعارات التعديلات على هذه الشروط، إما من خلال المنشورات على المنصة أو من خلال أي الوسائل الأخرى على النحو المبين في هذه الشروط وفقًا لسياسة الخصوصية.",
      "أن كل شخص يستطيع الوصول إلى المنصة باستخدام بيانات الاعتماد ذات الصلة، وتفاصيل تسجيل الدخول التي يتم إنشاؤها على المنصة لحساب المنصة الخاص بك، لديه صلاحية تامة للتصرف بالنيابة عن أي شخص يتم إنشاء حساب المنصة له.",
      "أنكم توافقون على المنشورات وتسليم الشروط و/أو أي اتفاقيات من جانبنا وبيننا، أو أي تغييرات تنشأ عليها، من خلال الوسائط الإلكترونية (بما في ذلك، على سبيل المثال لا الحصر، الرسائل الإلكترونية أو منشورات موقع الويب، أو البريد الإلكتروني، أو الوسائل الإلكترونية الأخرى).",
      "أنكم توافقون على أن التسليم الإلكتروني للإشعارات والسياسات وسجلات العمليات التي بدأت أو اكتملت من خلال المنصة و/أو فيما يتعلق بها بالإضافة إلى أي توقيعات ممكّنة رقميًا، يعتبر مستوفيًا لأي متطلبات قانونية بأن يكون الخطاب ‘موقعاً’ و ‘وكتابياً’. وبناءً على ذلك، تعتبر أي مستندات يتم تسليمها لكم إلكترونيًا ‘كتابياً’.",
    ],
    termsUsageTitle: "استخدام المنصة لتنفيذ العمليات:",
    termsUsageContent: [
      "استخدام المنصة لتنفيذ العمليات من أجل استخدام الخدمات المقدمة على منصتنا، يجب عليكم استيفاء متطلبات الشركة الخاصة بقبول العملاء، وإنشاء حساب على المنصة يسمح لكم باستخدامها، والدخول في اتفاقية وكالة الاستثمار الرئيسة. وسنحتفظ بجميع الأموال التي حولتموها لنا في حساب إدارة الودائع. وكذلك، سيتم الاحتفاظ بأي مبلغ في حساب إدارة الودائع وفقًا لشروط اتفاقية وكالة الاستثمار الرئيسة، من اجل تنفيذ العمليات بناءً على تعليماتك. سيتم إتاحة تفاصيل حجم الأموال التي قمتم بإيداعها في حساب إدارة الودائع لتمويل استثماراتكم في الودائع لأجل وجميع الاستثمارات التي تمت، وعوائد هذا الحساب، في حساب المنصة. ويخضع حساب إدارة الودائع وحساب (حسابات) الوديعة لأجل لشروط وأحكام البنوك التي تم فتح هذه الحسابات لديها.",
      "مع مراعاة اتفاقية وكالة الاستثمار الرئيسة وشروط الاستثمار في الودائع لأجل، يحق لكم الحصول على جميع المبالغ التي أودعتموها أو تم إيداعها بالنيابة عنكم في حساب إدارة الودائع أو في أي حساب وديعة لأجل.",
      "نحتفظ بحقنا في إغلاق أي حساب وديعة لأجل أو حساب إدارة الودائع الذي لا توجد أي عمليات متعلقة به، من دون إشعار مسبق ووفقًا لتقديرنا المطلق.",
      "يجب عليكم تزويدنا بجميع التعليمات الخاصة بتنفيذ العمليات عبر المنصة، وسوف نسعى بشكل معقول لتنفيذ تلك العمليات بالنيابة عنكم وفقًا لهذه الشروط ووفقًا للإجراءات المطلوبة من البنك ذي الصلة. وبمجرد تنفيذها، سيتم مشاركة تأكيد تفاصيل العملية معك عبر المنصة. وسيتم أيضا إتمام جميع الدفعات من حساب الوديعة لأجل أو إليه، أو من الحساب البنكي للعميل إلى حساب إدارة الودائع أو منه. وكذلك، سيتم القيام بجميع العمليات بالنيابة عنكم من الرصيد المتوفر في حساب المنصة الخاص بكم.",
      "وكذلك، أنتم تقرون وتوافقون على أن تنفيذ أي من تعليماتكم أو العمليات ذات الصلة خاضع لأنظمة ولوائح ساما، وأننا لن نكون مسؤولين تجاهكم عن أي انقطاع، أو توقف للخدمة، أو أي إخفاق في تنفيذ أي تعليمات والتي من شأنها أن تضعنا في موقف مخالف لمتطلبات الامتثال لأي من هذه الأنظمة واللوائح. كما تقرون انكم قرأتم وفهمتم متطلبات وشروط ساما المتعلقة بالمستلمين/المستخدمين لخدمات جمع الودائع لأجل، والمنصة، وتوافقون في جميع الأوقات على الامتثال بهذه القيود والالتزام بها.",
      "نحن لا نقدم لكم أي ضمانات متعلقة بنجاح تنفيذ أي عملية أو مستوى الربح الذي يمكن تحقيقه من خلال كل عملية يتم تنفيذها بالنيابة عنكم.",
      "قد يتم تنفيذ العمليات فعليًا بأسعار وشروط مختلفة، حيث أن الأسعار المعروضة على المنصة هي أسعار إرشادية فقط. عندما يكون معدل الربح في وقت تنفيذ العملية أقل من ذلك المعروض على المنصة، سنبذل جهودًا بشكل معقول للاتصال بكم لتأكيد ما إذا كنتم لا تزالون ترغبون في إتمام العملية، ولن نتحمل أي مسؤولية تجاهكم عند اختلاف معدلات الربح عن تلك الموجودة في المنصة.",
      "نقوم بتحديث هذه الشروط من وقت لآخر. في كل مرة ترغب في زيارة أو استخدام موقعنا، يرجى مراجعة هذه الشروط للتأكد من فهمك للشروط التي تنطبق في ذلك الوقت.",
    ],
    termsDisclaimerTitle: "نحن غير مسؤولين عن:",
    termsDisclaimerContent: [
      "أي خسائر متكبدة بسبب فشلكم أو تأخركم في إعطائنا التعليمات قبل، أو عند استحقاق أي وديعة، أو نتيجة لأي أموال محتجزة في حساب الوديعة لأجل أو حساب إدارة الودائع بسبب تبقي تعليمات مطلوبة منك.",
      "أو أي خسارة أو ضرر قد يلحق بكم نتيجة لعدم توفر المنصة لأي سبب من الأسباب.",
      "أو أي تقصير من أي نوع كان، من قبل أي بنك يحتفظ بحساب إدارة الودائع أو حساب الودائع لأجل فيما يتعلق بإعادة مبلغ الوديعة المودعة لدى هذا البنك أو الربح الناتج عن تلك الوديعة.",
      "أو أي خسارة أو ضرر قد يلحق بكم نتيجة لتصفية أي بنك يحتفظ بحساب إدارة الودائع أو حساب الوديعة لأجل، أو بسبب تعيين حارس قضائي، أو وصي، أو مسؤول، أو أي ممارس آخر في مجال الإفلاس أو بدء أي إجراءات إفلاس ضد ذلك البنك.",
      "أو أي خسارة أو ضرر قد تتكبدون بسبب أدائنا لهذه الشروط أو اتفاقية وكالة الاستثمار الرئيسة.",
      "أو أي خسارة أو ضرر أو فشل في أداء أو تأخير أداء الخدمات بموجب هذه الشروط، أو بموجب اتفاقية وكالة الاستثمار الرئيسة الناتجة بسبب حدوث قوة قاهرة.",
    ],
    termsChangeTermsTitle: "قد نقوم بإجراء تغييرات على هذه الشروط:",
    termsChangeTermsContent: [
      "يجوز لنا تعديل هذه الشروط من وقت لآخر بأثر فوري لغرض الامتثال للأنظمة واللوائح المعمول بها، أو بسبب التحديثات التشغيلية أو التغيرات التي تحدث على المنصة. وسيتم إعلامكم بعد تنفيذ هذه التعديلات من خلال المنصة من وقت لآخر.",
      "وما عدا ذلك، سنبلغكم بأي تعديلات أخرى قد تطرأ على هذه الشروط عبر بريدكم الإلكتروني المسجل و/أو من خلال منصتنا قبل ثلاثين (30) يومًا من تنفيذ هذه التعديلات.",
      "أنتم تقرون أيضاً بأن أي من هذه التعديلات التي تم إشعاركم بها، قد تم استلامها فعلاً من تاريخ هذا الإشعار. كما أنكم توافقون على أنه سيتم اعتباركم موافقين على أي تعديلات يتم إجراؤها على هذه الشروط عند استخدام المنصة بعد تلقي الإشعار المذكور أعلاه.",
      "بالإضافة إلى ذلك، قد تتغير سياسة الخصوصية الخاصة بنا فوراً ودون إشعار مسبق. لذلك، يرجى الدخول إلى المنصة بانتظام للتأكد من مواكبتكم لكل ما يطرأ من إصدارات تتعلق بسياسة الخصوصية من وقت لآخر.",
    ],
    termsUpdateWebsiteTitle: "قد نقوم بإجراء تغييرات على منصتنا:",
    termsUpdateWebsiteContent: [
      "يجوز لنا إضافة أو تعديل أو إيقاف أي ميزة أو وظيفة أو أي أداة أخرى، على المنصة، وفقًا لتقديرنا ومن دون أي إشعار بذلك. ومع ذلك، إذا قمنا بتقليص الوظائف الأساسية للمنصة بشكل جوهري، فسنقوم بإخطار المستخدمين المسجلين عن طريق نشر إعلان على المنصة أو عبر البريد الإلكتروني.",
      "نحن لا نقدم أي تمثيل أو ضمان فيما يتعلق بملاءمة أي برنامج لأي غرض. كما أننا لا نتحمل أي مسؤولية عن التحديثات أو عدم وجود تحديثات للبرنامج المتاح لك من وقت لآخر.",
    ],
    termssuspendWebsiteTitle: "يجوز لنا تعليق عمل المنصة أو سحبها:",
    termssuspendWebsiteContent: [
      "نحن لا نضمن إتاحة منصتنا، أو أي محتوى عليها، بشكل دائم ودون انقطاع أو خلوه من الأخطاء. كما يجوز لنا تعليق أو سحب أو تقييد إتاحة كل أو أي جزء من منصتنا لأسباب تجارية أو تشغيلية. ومع ذلك، في حال قمنا بتعليق الخدمات أو المنصة لفترة زمنية طويلة، أو قمنا بسحب أي جزء من الوظائف الأساسية للمنصة، فسنقوم بإخطار المستخدمين المسجلين عن طريق نشر إعلان على المنصة أو عبر البريد الإلكتروني.",
      "أنتم مسؤولون أيضًا عن ضمان أن جميع الأشخاص الذين يدخلون منصتنا من خلال اتصال الإنترنت الخاص بكم على علم بهذه الشروط وغيرها من الشروط والأحكام المعمول بها، وأنهم يلتزمون بها.",
    ],
    termsUsingWebsiteTitle: "كيف يمكنك استخدام المواد الموجودة على منصتنا",
    termsUsingWebsiteContent: [
      "لا يجوز لك تعديل النسخ الورقية أو الرقمية لأي مواد قمت بطباعتها أو تحميلها من المنصة بأي شكل من الأشكال، من دون الحصول على موافقتنا الخطية بشكل أولي. كما لا يجوز لكم استخدام أي رسوم توضيحية أو صور فوتوغرافية أو مقاطع فيديو أو مقاطع صوتية أو أي رسومات بشكل منفصل عن أي نص مصاحب.",
      "يجب دائمًا الإقرار بدورنا (وبدور أي مساهمين محددين) كمقدمي المحتوى على منصتنا.",
      "لا يجوز لك استخدام أي جزء من المحتوى الموجود على منصتنا لأغراض تجارية من دون الحصول على ترخيص منا أو من المرخص لهم على منصتنا. فعندما تستخدم البيانات الشخصية، يجب عليك الالتزام بسياسة الخصوصية الخاصة بنا مع الالتزام بأنظمة ولوائح حماية البيانات المعمول بها.",
      "إذا قمت بطباعة أو نسخ أو تحميل أي جزء من منصتنا بما يخالف هذه الشروط، فسيتم تعليق حقك في استخدام منصتنا فوراً وعليك، حسب خيارنا، إعادة أو التخلص من أي نسخ من المواد التي قمت بإنشائها.",
    ],
    faqTitle: "الأسئلة الشائعة",
    faqQuestions: [
      "ما هو مفهوم تمويل التقاضي وأهميته؟",
      "ما هي خدمات تمويل التقاضي؟",
      "ما هي فائده تمويل التقاضي؟",
      "الفئات المسموح لها باستخدام الخدمة؟",
      "ما الذي يتعين فعله لتأمين التمويل؟",
      "كم من الوقت سيستغرق الأمر؟",
      "ماذا يحدث بعد أن يتم تقديم التمويل؟",
    ],
    faqAnswers: [
      "تمويل التقاضي هو نظام يتيح للأفراد والشركات الحصول على الدعم المالي اللازم لتغطية تكاليف القضايا القانونية. هذه الخدمة يمكن أن تكون أداة حيوية، خاصة في الحالات التي تكون فيها التكاليف القانونية مرتفعة وتفوق القدرة المالية للطرف المعني. بفضل تمويل التقاضي، يمكن للأطراف المعنية التركيز على قضيتهم دون القلق بشأن الأعباء المالية، مما يسهم في تحقيق العدالة والوصول إلى حقوقهم القانونية.",
      "تعمل خدمات تمويل التقاضي على توفير التمويل اللازم لتغطية مجموعة متنوعة من التكاليف، مثل أتعاب المحامين، رسوم المحاكم، وتكاليف الشهود والخبراء. هذا التمويل يمكن أن يكون مفيدًا بشكل خاص في القضايا المعقدة أو الطويلة الأمد، حيث تتطلب مثل هذه القضايا موارد مالية كبيرة. من خلال توفير الدعم المالي، تتيح خدمات تمويل التقاضي للأفراد والشركات فرصة أفضل لتحقيق نتيجة إيجابية في قضيتهم",
      "لتمويل التقاضي فوائد عديدة، منها زيادة فرص الوصول إلى العدالة. في العديد من الحالات، يمكن أن تكون تكاليف التقاضي عائقًا كبيرًا أمام الأفراد والشركات الذين يسعون لتحقيق العدالة. من خلال توفير الدعم المالي، يمكن لتمويل التقاضي أن يزيل هذا العائق ويتيح للجميع فرصة متساوية للدفاع عن حقوقهم. إضافة إلى ذلك، يمكن أن يسهم تمويل التقاضي في تحسين فرص الفوز في القضية، حيث يمكن للطرف المدعوم ماليًا توظيف أفضل المحامين والخبراء. أحد الجوانب المهمة الأخرى لتمويل التقاضي هو تقليل المخاطر المالية. في حالة خسارة القضية، قد لا يكون على الطرف المدعوم ماليًا سداد التمويل، مما يقلل من الأعباء المالية المحتملة. هذا يتيح للأفراد والشركات اتخاذ قرارات أكثر جرأة في القضايا القانونية دون الخوف من العواقب المالية السلبية",
      "يمكن لجميع الفئات من الأشخاص الطبيعيين كالأفراد أو الأشخاص الاعتباريين كالمؤسسات، الشركات،الجهات الشبه حكومية و المنشآت الغير الربحية الأخرى الاستفادة من خدمات التسجيل في منصة ودائع",
      "يتعين على العملاء المحتملين أن يهدفوا إلى تقديم مذكرة جوهرية للمطالبات تتضمن تقديرًا مدروسًا ومدعمًا للأضرار في مرحلة مبكرة وميزانية مفصلة لرسوم وتكاليف المستشارين الخارجيين، وفقًا لمرحلة التقاضي.",
      "يعتمد الإطار الزمني لتأمين التمويل القانوني على عدة عوامل. فالمسائل التي تحتوي على عدد أقل من المجهولات (على سبيل المثال، المسائل التي يتم استئنافها) تتطلب أقل قدر من الوقت؛ والمسائل التي لم يتم رفعها بعد تتطلب وقتًا أطول. وعلى الرغم من أننا قمنا بتمويل القضايا في غضون بضعة أيام، كقاعدة عامة، إذا تم إعداد القضايا جيدًا وتم تقديم المعلومات في الوقت المناسب، فإن المسائل التجارية تستغرق عادةً حوالي شهرين من المراجعة الأولية للقضية إلى الاستثمار. تتطلب التحكيم الدولي ومسائل براءات الاختراع عادةً عملية عناية أطول",
      "بعد أن تقوم الشركة بالاستثمار، نعمل مع عملائنا علي مراقبة وتتبع تقدم الأمور أثناء عملية إدارة القضية. وبينما نحن كمقدمو رأس مال يمكننا أيضًا إضافة قيمة إلى استراتيجيات التقاضي والتحكيم بعد التمويل إذا رحب العملاء بذلك.",
    ],
    journeyTitle: "رحلتك معنا",
    journeyStepOneTitle: "تقديم الطلب اونلاين",
    journeyStepOneContent: "املأ الطلب بكل بسهولة",
    journeyStepTwoTitle: "تقييم الطلب",
    journeyStepTwoContent:
      "توفير المستندات اللازمة لمراجعة جدوى وعدالة المطالبة من قبل [اسم الشركة].",
    journeyStepThreeTitle: "تقديم العرض التمويلي و إختيار المحامي",
    journeyStepThreeContent:
      "إحالة الملف لمكتب المحاماة لتقديم الأستراتيجية المقترحة و الاتفاق على نسبة النجاح مع العميل والبدء بتقديم الخدمة ودفع التكاليف.",
    journeyStepFourTitle: "توقيع الاتفاقية الثلاثية",
    journeyStepFourContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis blanditiis",
    startNowTitle: "ابدأ الآن",
    startNowDesc: "*لطلب الخدمة الرجاء ملء المعلومات أدناه:",
    inputName: "الاسم",
    inputNumber: "رقم الهاتف",
    inputEmail: "البريد الإلكتروني",
    inputCompany: "اسم الشركة",
    inputJop: "المسمى الوظيفي",
    inputClameValues: [
      "قيمة المطالبة",
      "أقل من 500,000 ريال سعودي",
      "500,000 إلى 999,000 ريال سعودي",
      "1-5 مليون ريال سعودي",
      "5-10 مليون ريال سعودي",
      "10-50 مليون ريال سعودي",
      "50-500 مليون ريال سعودي",
      "فوق 500 مليون ريال سعودي",
    ],
    startNowSubmit: "احجز الآن",
    startNowNoteA: "*لا نقبل المطالبات التي تقل قيمتها عن 500 ألف ريال سعودي",
    startNowNoteB:
      "*بإرسال هذا النموذج، فإنك توافق على أن يتم الاتصال بك إما مباشرة أو من خلال أحد شركاء العمل لدينا",
    footerSlogan: "شركة [اسم الشركة] لتمويل التقاضي",
    footerRegNum: "سجل تجاري رقم [رقم السجل التجاري]",
    footerWho: "عن [اسم الشركة]",
    footerTerms: "الشروط و الأحكام",
    footerFaq: "الأسئلة الشائعة",
    footerStart: "ابدأ الآن",
    footerContact: "التواصل",
    footerCopyright:
      "جميع الحقوق محفوظة لـ شركة [اسم الشركة] لتمويل التقاضي © 2024",
  },

  en: {
    navSlogan: `
        <span class="fw-bold fs-6 nav-slogan">Litigation Financing Solutions</span>
        <br/>
        <span class="fw-bold fs-6 nav-slogan">That You Trust</span>
    `,
    linkWho: "About Us",
    linkTerms: "Terms and Conditions",
    linkFaq: "FAQ",
    linkStart: "Start Now",
    lang: `
          <span class="me-3 language-box">
            <span class="language">
            <i class="fa-solid fa-globe me-1"></i>
              <span>العربية</span>
            </span>
          </span>
          `,
    signUp: `
        <span>Register now</span>
        <i class="fa-solid fa-arrow-right ms-1"></i>
    `,
    homeMainTitle: "Litigation Financing",
    homeSecondaryTitle: "Win your case now...pay later",
    homeStartNowBtn: `
    <span class="fs-3 ">Sign up</span>
    <i class="fa-solid fa-arrow-right fs-4 ms-2"></i>
    `,
    logIn: `
        <span class="fs-3 btn-login">Sign in</span>
        <i class="fa-solid fa-arrow-right fs-4 ms-2"></i>
    `,
    companyName: "[Company Name]",
    companyDesc:
      "[Company Name] was established in [Year of Establishment] to provide litigation financing services to individuals and businesses. We believe that justice is a right for all, and we seek to support our clients in facing legal challenges by providing reliable and fair financing.",
    featuresTitle: "What is litigation financing?",
    featuresDesc:
      "It is providing financing to one of the parties in litigation in return for a percentage of the proceeds.",
    featureATitle: "Litigation Financing",
    featureADesc:
      "We provide financing to cover the costs of lawyers, experts, and legal fees. Whether you are an individual or a company, we are here to support you.",
    featureBTitle: "Legal Consultations",
    featureBDesc:
      "Our team of specialized lawyers provides free legal consultations to help you understand your rights and determine the best legal strategy.",

    featureBTitle: "Legal Consultations",
    featureBDesc:
      "Our team of specialized lawyers provides free legal consultations to help you understand your rights and determine the best legal strategy.",
    featureCTitle: "Evaluation of Situations",
    featureCDesc:
      "We conduct a comprehensive evaluation of your case to determine its strength and chances of success before proceeding with funding.",
    featureDTitle: "Risk Management",
    featureDDesc:
      "We provide legal risk management solutions to ensure your interests are protected throughout the litigation process..",
    termsTitle: "Terms and Conditions",
    termsIntroTitle: "Introduction:",
    termsIntroContent:
      "This website is operated by [Company Name], a limited liability partnership registered in the Kingdom of Saudi Arabia, with registration number [Registration Number], and whose registered office is at [Company Address] for the purposes of these terms and conditions.",
    termsAcceptanceTitle: "Your acceptance and confirmations:",
    termsAcceptanceDesc: "By using our Platform, you confirm that:",
    termsAcceptanceContent: [
      "you accept and agree to the provisions of: (i) these Terms and (ii) the Privacy Policy (as defined below), and that you confirm that you have read, understood and agree to comply with them;.",
      "you are able to receive information, including notices of amendments to these Terms, either through communications posted on the Platform or such other means as set out in these Terms, in accordance with the Privacy Policy (as defined below);",
      "Each person accessing the Platform using the relevant credentials and log in details created on the Platform for your Platform Account, has all due authority to act on behalf of any person for whom the Platform Account was created.",
      "You agree to communications being made, and to the delivery of the Terms and/or any agreements by and between us, or changes thereto, via electronic media (including, without limitation, electronic messaging, website postings, email, or other electronic means).",
      "You agree that the electronic delivery of notices, policies and records of transactions initiated or completed through the Platform and/or in relation thereto as well as any digitally enabled signatures, shall be deemed to satisfy any legal requirements that a communication should be ‘signed’ and ‘in writing’. Accordingly, any such documents that are delivered to you electronically are deemed to be ‘in writing’.",
    ],
    termsUsageTitle: "Use of the Platform to execute Transactions",
    termsUsageContent: [
      "Use of the Platform to carry out operations In order to use the services provided on our Platform, you must meet the Company's requirements for accepting clients, create an account on the Platform that allows you to use it, and enter into the Master Investment Agency Agreement. We will hold all funds that you have transferred to us in the Deposit Management Account. Likewise, any amount in the Deposit Management Account will be held in accordance with the terms of the Master Investment Agency Agreement, in order to carry out operations based on your instructions. Details of the amount of funds that you have deposited in the Deposit Management Account to finance your investments in term deposits and all investments made, and the returns on this account, will be made available in the Platform Account. The Deposit Management Account and the Term Deposit Account(s) are subject to the terms and conditions of the banks with which these accounts are opened.",
      "Subject to the Master Investment Agency Agreement and the Terms of Investment in Term Deposits, you are entitled to receive all amounts that you have deposited or that have been deposited on your behalf in the Deposit Management Account or in any Term Deposit Account.",
      "We reserve the right to close any Term Deposit Account or Deposit Management Account",
      "You must provide us with all instructions for executing transactions through the Platform, and we will reasonably endeavor to execute such transactions on your behalf in accordance with these Terms and in accordance with the procedures required by the relevant bank. Once executed, confirmation of the transaction details will be shared with you through the Platform. All payments will also be made from or to the Term Deposit Account, or from the Customer's Bank Account to or from the Deposit Management Account. Likewise, all transactions will be made on your behalf from the balance available in your Platform Account.",
      "You also acknowledge and agree that the execution of any of your instructions or related transactions is subject to SAMA's rules and regulations, and that we will not be liable to you for any interruption, cessation of service, or any failure to execute any instructions that would put us in a position contrary to the requirements of compliance with any of these rules and regulations. You acknowledge that you have read and understood SAMA’s requirements and terms relating to recipients/users of term deposit collection services and the platform, and you agree at all times to comply with and abide by these restrictions.",
      "We do not provide you with any guarantees regarding the successful execution of any transaction or the level of profit that can be achieved through each transaction executed on your behalf.",
      "Transactions may actually be executed at different prices and terms, as the prices displayed on the platform are indicative prices only. When the profit rate at the time of execution of the transaction is lower than that displayed on the platform, we will make reasonable efforts to contact you to confirm whether you still wish to complete the transaction, and we will not bear any liability to you when the profit rates differ from those on the platform",
      "We update these terms from time to time. Each time you wish to visit or use our site, please review these terms to ensure that you understand the terms that apply at that time.",
    ],
    termsDisclaimerTitle: "We shall not be liable for:",
    termsDisclaimerContent: [
      "Any losses suffered due to your failure or delay in giving us instructions prior to or at maturity of any deposit or as a consequence of any funds being held in the Time Deposit Account or Deposit Management Account awaiting instruction from you.",
      "Any loss or damage suffered by you as a result of unavailability of the Platform for whatever reason;",
      "Any default of any nature whatsoever, by any Bank holding the Deposit Management Account or the Time Deposit Account in relation to returning the amount of deposit placed with such Bank or the profit on such deposit",
      "Any loss or damage suffered by you as a result of any Bank holding the Deposit Management Account or the Time Deposit Account going into liquidation or a receiver, trustee, administrator or other insolvency practitioner being appointed or any insolvency proceedings being initiated against such Bank",
      "Any loss or damage suffered by you as a result of our performance of these Terms or the Master Investment Agency Agreement",
      "Any loss, damage or failure to perform, or delay in performance of, the services under these Terms or the Master Investment Agency Agreement that is caused by a Force Majeure Event.",
    ],
    termsChangeTermsTitle: "We may make changes to these Terms:",
    termsChangeTermsContent: [
      "We may amend these Terms from time to time with immediate effect in order to comply with applicable laws and regulation or as a result of operational upgrades or changes to the Platform. You may be notified after such amendments are implemented through the Platform from time to time",
      "Otherwise, we will communicate to you any other amendments to these Terms via your registered email and/or on our Platform thirty (30) days prior to implementing such amendments.",
      "You acknowledge that any such amendments communicated to you are received by you from the date of such communication. You further agree that you will be considered to have consented to any amendments made to these Terms upon using the Platform after receiving the abovementioned communication.",
      "In addition, our Privacy Policy may change with immediate effect and without prior notice. Please check to the Platform regularly to ensure you are aware of the latest version of the Privacy Policy from time to time.",
    ],
    termsUpdateWebsiteTitle: "We may make changes to our Platform:",
    termsUpdateWebsiteContent: [
      "We may add, modify or discontinue any feature, functionality or any other tool, within the Platform, at our discretion and without notice. However, if we make materially reduce the core functionality of the Platform, then we will notify registered users by posting an announcement on the Platform or by email.",
      "We do not provide any representation or warranty in respect of the fitness for purpose or otherwise of any software. Nor do we take any responsibility for updates, or lack of updates, to the software available to you from time to time.",
    ],
    termssuspendWebsiteTitle: "We may suspend or withdraw the Platform:",
    termssuspendWebsiteContent: [
      "We do not guarantee that our Platform, or any content on it, will always be available or be uninterrupted or error-free. We may suspend or withdraw or restrict the availability of all or any part of our Platform for business or operational reasons. However, if we suspend services or the Platform for any substantial period of time, or withdraw, any part of the core functionality of the Platform, then we will notify registered users by posting an announcement on the Platform or by email.",
      "You are also responsible for ensuring that all persons who access our Platform through your internet connection are aware of these Terms and other applicable terms and conditions, and that they comply with them.",
    ],
    termsUsingWebsiteTitle: "How you may use material on our Platform:",
    termsUsingWebsiteContent: [
      "You must not modify the paper or digital copies of any materials you have printed off or downloaded in any way, without obtaining our written consent first. You must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.",
      "Our status (and that of any identified contributors) as the authors of content on our Platform must always be acknowledged.",
      "You must not use any part of the content on our Platform for commercial purposes without obtaining a licence to do so from us or our licensors. Where you use personal data, you must comply with our Privacy Policy and your obligations under the applicable data protection laws and regulations.",
      "If you print off, copy or download any part of our Platform in breach of these Terms, your right to use our Platform will cease immediately and you must, at our option, return or destroy any copies of the materials you have made.",
    ],
    faqTitle: "FAQ",
    faqQuestions: [
      "What is the concept of litigation financing and its importance?",
      "What are litigation financing services?",
      "What is the benefit of litigation financing?",
      "Which categories are allowed to use the service?",
      "What needs to be done to secure financing?",
      "How long will it take?",
      "What happens after the financing is provided?",
    ],
    faqAnswers: [
      "Litigation funding is a system that allows individuals and businesses to obtain the financial support needed to cover the costs of legal cases. This service can be a vital tool, especially in cases where legal costs are high and beyond the financial capacity of the party concerned. Thanks to litigation funding, the parties concerned can focus on their case without worrying about financial burdens, which contributes to achieving justice and accessing their legal rights.",
      "Litigation funding services provide the necessary funding to cover a variety of costs, such as attorneys’ fees, court fees, and witness and expert costs. This funding can be particularly useful in complex or protracted cases, where such cases require significant financial resources. By providing financial support, litigation funding services give individuals and businesses a better chance of achieving a positive outcome in their case.",
      "Litigation funding has many benefits, including increasing access to justice. In many cases, litigation costs can be a major barrier to individuals and businesses seeking justice. By providing financial support, litigation funding can remove this barrier and give everyone an equal opportunity to defend their rights. In addition, litigation financing can improve the chances of winning a case, as the financially supported party can hire the best lawyers and experts. Another important aspect of litigation financing is reducing financial risk. In the event of a loss in the case, the financially supported party may not have to repay the financing, which reduces potential financial burdens. This allows individuals and companies to make bolder decisions in legal cases without fear of negative financial consequences.",
      "All categories of natural persons, whether individuals or legal entities such as institutions, companies, semi-governmental entities and other non-profit entities, can benefit from the registration services on the Wadai platform.",
      "Prospective clients should aim to submit a substantial memorandum of claims that includes a well-considered and supported estimate of damages at an early stage and a detailed budget for the fees and costs of external counsel, depending on the stage of the litigation.",
      "The time frame for securing legal financing depends on several factors. Matters with fewer unknowns (for example, matters that are under appeal) require the least amount of time; Matters that have not yet been filed take longer. While we have funded cases within a few days, as a general rule, if the cases are well prepared and information is provided in a timely manner, commercial matters typically take approximately two months from initial review of the case to investment. International arbitration and patent matters typically require a longer due diligence process.",
      "After the firm has invested, we work with our clients to monitor and track the progress of matters during the case management process. As capital providers, we can also add value to litigation and arbitration strategies post-funding if the clients welcome it.",
    ],
    journeyTitle: "Your Journey",
    journeyStepOneTitle: "Apply online",
    journeyStepOneContent: "Fill out the application with ease.",
    journeyStepTwoTitle: "Request evaluation",
    journeyStepTwoContent:
      "Providing the necessary documents to review the feasibility and fairness of the claim by [Company Name].",
    journeyStepThreeTitle:
      "Submitting the financing offer and choosing the lawyer",
    journeyStepThreeContent:
      "Refer the file to the law firm to present the proposed strategy, agree on the success rate with the client, start providing the service, and pay the costs.",
    journeyStepFourTitle: "Signing the tripartite agreement",
    journeyStepFourContent:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis corporis blanditiis",

    startNowTitle: "Start Now",
    startNowDesc: "*To request a service, please fill in the form below:",
    inputName: "name",
    inputNumber: "phone number",
    inputEmail: "e-mail",
    inputCompany: "company name",
    inputJop: "job tile",
    inputClameValues: [
      "Claim value",
      "Less than 500,000 Saudi Riyals",
      "500,000 to 999,000 Saudi Riyals",
      "1-5 million Saudi riyals",
      "5-10 million Saudi riyals",
      "10-50 million Saudi riyals",
      "50-500 مليون ريال سعودي",
      "More than 500,000 Saudi Riyals",
    ],
    startNowSubmit: "Submit",
    startNowNoteA:
      "*We do not accept claims of less than 500,000 Saudi Riyals.",
    startNowNoteB:
      "*By submitting this form, you agree to be contacted either directly or through one of our business partners.",
    footerSlogan: "[Website Name] Litigation Financing",
    footerRegNum: "Commercial Registration No. [************]",
    footerWho: "About [Website Name]",
    footerTerms: "Terms and conditions",
    footerFaq: "FAQ",
    footerStart: "Start Now",
    footerContact: "Contact",
    footerCopyright:
      "All rights reserved | [Website Name] Litigation Financing Company © 2024",
  },
};

//! LOADER
const loader = document.querySelector(".loader");

const handleLoader = () => {
  loader.classList.add("loader--hidden");
};

window.addEventListener("load", () => {
  setTimeout(handleLoader, 1000);
});
