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
      /* @__PURE__ */ Object.assign({ "./Pages/AboutUs.tsx": () => import("./assets/AboutUs-WDDRXIKE.js"), "./Pages/Admin/Posts/Index.tsx": () => import("./assets/Index-DMbN_sHB.js"), "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-Dexj-h0f.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-BOOUtV-C.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-6TmUDnpT.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-D2QcpZ0z.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-DleS6l8O.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-zJTntg0H.js"), "./Pages/Contact.tsx": () => import("./assets/Contact-BG9DctSk.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-C5ayr_L9.js"), "./Pages/Landing.tsx": () => import("./assets/Landing-Bf0GWIqu.js"), "./Pages/Posts/Create.tsx": () => import("./assets/Create-6t-ev2Qp.js"), "./Pages/Posts/Index.tsx": () => import("./assets/Index-CXsBOWXI.js"), "./Pages/Posts/Show.tsx": () => import("./assets/Show-C7a5T5k7.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-C1NXqKUo.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-C1GlQhz6.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-C53DbxsD.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-BLc6rV1x.js") })
    ),
    setup: ({ App, props }) => {
      global.route = route;
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
