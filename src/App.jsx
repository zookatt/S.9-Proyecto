import { Header } from "./components/orgamisms/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { Footer } from "./components/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Login } from "./pages/Login.jsx";
import { Products } from "./pages/Products.jsx";
import { Design } from "./pages/Design.jsx";
import { Contact } from "./pages/Contact.jsx";
import { AuthenticationContext } from "./context/AuthenticationContext.jsx";
import { UserLogged } from "./pages/UserLogged.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";

function App() {
  return (
    <AuthenticationContext>
      <BrowserRouter>
        <main className="container mx-auto px-6 pt-6">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/design" element={<Design />} />
            <Route element={<ProtectedRoute redirectPath="/login" />}>
              <Route path="/user" element={<UserLogged />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </main>
      </BrowserRouter>
    </AuthenticationContext>
  );
}

export default App;
