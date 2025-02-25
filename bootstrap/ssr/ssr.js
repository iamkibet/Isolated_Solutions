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
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(
      `./Pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "./Pages/AboutUs.tsx": () => import("./assets/AboutUs-SDmibDQY.js"), "./Pages/Admin/Posts/Index.tsx": () => import("./assets/Index-DMbN_sHB.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-DHvsu0LF.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-CPIpYBOD.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-NTSRcOxM.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-BxEc2c39.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-DnEjR-MR.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-D7zoZYiA.js"), "./Pages/Contact.tsx": () => import("./assets/Contact-CM_ar48f.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-C5ayr_L9.js"), "./Pages/Landing.tsx": () => import("./assets/Landing-DpTBf1No.js"), "./Pages/Posts/Create.tsx": () => import("./assets/Create-6t-ev2Qp.js"), "./Pages/Posts/Index.tsx": () => import("./assets/Index-D3hOmhWD.js"), "./Pages/Posts/Show.tsx": () => import("./assets/Show-pTS0XH3F.js"), "./Pages/Products.tsx": () => import("./assets/Products-D-WSXPkC.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-C1NXqKUo.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-C1GlQhz6.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-C53DbxsD.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-BLc6rV1x.js"), "./Pages/SokoMagari.tsx": () => import("./assets/SokoMagari-Ba81FRwh.js") })
    ),
    setup: ({ App, props }) => {
      global.route = route;
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
