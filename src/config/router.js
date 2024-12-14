

const Layout = lazy(() => import("../components/Layout/Layout"));
const Home = lazy(() => import("../pages/Home/Home"));
// const About = lazy(() => import("../pages/About/About"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
// const Career = lazy(() => import("../pages/Career/Career"));
// const Portfolio = lazy(() => import("../pages/Portfolio/Portfolio"));


export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "contact-us", element: <Contact /> },
    ],
  }
]