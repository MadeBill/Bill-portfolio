import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/", lazy: async () => ({ Component: (await import("./pages/Home")).default }) },
  { path: "/works/quanvaulte", lazy: async () => ({ Component: (await import("./pages/QuanvaultePage")).default }) },
  { path: "/works/forfalify", lazy: async () => ({ Component: (await import("./pages/ForfalifyPage")).default }) },
  { path: "/works/owambe", lazy: async () => ({ Component: (await import("./pages/OwambePage")).default }) },
  { path: "/works/webprebuilt", lazy: async () => ({ Component: (await import("./pages/WebprebuiltPage")).default }) },
  { path: "/works/:id", lazy: async () => ({ Component: (await import("./pages/WorkDetail")).default }) },
]);
