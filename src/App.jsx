import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticationContext } from "./context/AuthenticationContext.jsx";
import { Header } from "./components/orgamisms/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import ProtectedRoute from "./components/routing/ProtectedRoutes.jsx";
import { routes } from "./routes";

function App() {
  return (
    <AuthenticationContext>
      <BrowserRouter>
        <main className="container mx-auto px-6 pt-6">
          <Header />

          <Routes>
            {routes.map(({ path, element, isProtected }) =>
              isProtected ? (
                <Route
                  key={path}
                  element={<ProtectedRoute redirectPath="/login" />}
                >
                  <Route path={path} element={element} />
                </Route>
              ) : (
                <Route key={path} path={path} element={element} />
              ),
            )}
          </Routes>

          <Footer />
        </main>
      </BrowserRouter>
    </AuthenticationContext>
  );
}

export default App;
