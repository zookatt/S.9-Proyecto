import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import { Products } from "./pages/Products.jsx";
import { Design } from "./pages/Design.jsx";
import { Contact } from "./pages/Contact.jsx";
import { UserLogged } from "./pages/UserLogged.jsx";
import { NotFound } from "./pages/NotFound.jsx";

export const routes = [
  { path: "/", element: <Home />, isProtected: false },
  { path: "/about", element: <About />, isProtected: false },
  { path: "/signup", element: <SignUp />, isProtected: false },
  { path: "/login", element: <Login />, isProtected: false },
  { path: "/products", element: <Products />, isProtected: false },
  { path: "/contact", element: <Contact />, isProtected: false },
  { path: "/design", element: <Design />, isProtected: false },
  { path: "/user", element: <UserLogged />, isProtected: true },
  { path: "*", element: <NotFound />, isProtected: false },
];
