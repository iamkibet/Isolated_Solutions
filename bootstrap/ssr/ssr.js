import { jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import route from "ziggy-js";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Isolated Solutions";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "./Pages/AboutUs.tsx": () => import("./assets/AboutUs-CUOic-O4.js"), "./Pages/Admin/Dashboard.tsx": () => import("./assets/Dashboard-B8_35WSm.js"), "./Pages/Admin/Posts/Index.tsx": () => import("./assets/Index-DdI2bKda.js"), "./Pages/Admin/Quotes/Create.tsx": () => import("./assets/Create-CNaVjK6-.js"), "./Pages/Admin/Quotes/Index.tsx": () => import("./assets/Index-Do71lUIo.js"), "./Pages/Admin/Services/Index.tsx": () => import("./assets/Index-3fTwDWSs.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-BAW52aHV.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-CxScUoHq.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-DdSitShg.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-B98cz6su.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-BwjHRz6e.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-CdHoQoop.js"), "./Pages/Contact.tsx": () => import("./assets/Contact-CAydhWzk.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-B0gyZsLT.js"), "./Pages/Industries/AgriTech.tsx": () => import("./assets/AgriTech-SZnpvlpN.js"), "./Pages/Industries/Ecommerce.tsx": () => import("./assets/Ecommerce-g-lRwyzo.js"), "./Pages/Industries/EdTech.tsx": () => import("./assets/EdTech-DcXqPYJQ.js"), "./Pages/Industries/FinTech.tsx": () => import("./assets/FinTech-8pQSE1fE.js"), "./Pages/Industries/Government.tsx": () => import("./assets/Government-BNKwhN37.js"), "./Pages/Industries/Index.tsx": () => import("./assets/Index-CwXiNOM6.js"), "./Pages/Industries/Insurance.tsx": () => import("./assets/Insurance-pEThWwsy.js"), "./Pages/Industries/SaaS.tsx": () => import("./assets/SaaS-Cr4o_-eU.js"), "./Pages/Industries/Wellness.tsx": () => import("./assets/Wellness-CDJ3_gNW.js"), "./Pages/Landing.tsx": () => import("./assets/Landing-DXFo-9vw.js"), "./Pages/PortfolioProduct.tsx": () => import("./assets/PortfolioProduct-BZnsRCoo.js"), "./Pages/Posts/Create.tsx": () => import("./assets/Create-CZhlZi_t.js"), "./Pages/Posts/Index.tsx": () => import("./assets/Index-C5MscI4F.js"), "./Pages/Posts/Show.tsx": () => import("./assets/Show-D34P3wrH.js"), "./Pages/PrivacyPolicy.tsx": () => import("./assets/PrivacyPolicy-iCbhaECq.js"), "./Pages/ProductDetail.tsx": () => import("./assets/ProductDetail-D-MyfzEK.js"), "./Pages/Products.tsx": () => import("./assets/Products-CWE8BI6S.js"), "./Pages/ProductsShowcase.tsx": () => import("./assets/ProductsShowcase-BGJZy-nT.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-lrOVzWlU.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-C1GlQhz6.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-C53DbxsD.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-BLc6rV1x.js"), "./Pages/Quote/Index.tsx": () => import("./assets/Index-DmlxVwzc.js"), "./Pages/Quote/Show.tsx": () => import("./assets/Show-DcmWlod-.js"), "./Pages/Services/AppDevelopment.tsx": () => import("./assets/AppDevelopment-BRkhim0Z.js"), "./Pages/Services/Consulting.tsx": () => import("./assets/Consulting-irT-LB5b.js"), "./Pages/Services/Ecommerce.tsx": () => import("./assets/Ecommerce-B3z1tXBM.js"), "./Pages/Services/Index.tsx": () => import("./assets/Index-B9QURHfc.js"), "./Pages/Services/WebDevelopment.tsx": () => import("./assets/WebDevelopment-BxZUqXzI.js"), "./Pages/SokoMagari.tsx": () => import("./assets/SokoMagari-Ccq0Ch_0.js"), "./Pages/Technologies/Backend.tsx": () => import("./assets/Backend-CCxt5V2L.js"), "./Pages/Technologies/CMS.tsx": () => import("./assets/CMS-BLVYq_qI.js"), "./Pages/Technologies/Cloud.tsx": () => import("./assets/Cloud-Cygmconb.js"), "./Pages/Technologies/Frontend.tsx": () => import("./assets/Frontend-CbSeMNTV.js"), "./Pages/Technologies/FullStack.tsx": () => import("./assets/FullStack-BcBmCGe8.js"), "./Pages/Technologies/Index.tsx": () => import("./assets/Index-C93D5OYM.js"), "./Pages/Technologies/Mobile.tsx": () => import("./assets/Mobile-C0pzUd4x.js"), "./Pages/TermsOfUse.tsx": () => import("./assets/TermsOfUse-AQrpJaQ2.js"), "./Pages/Work/Index.tsx": () => import("./assets/Index-Cq4PL2d-.js") })
    ),
    setup: ({ App, props }) => {
      global.route = route;
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
