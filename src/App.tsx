import { BrowserRouter, Routes, Route } from "react-router-dom";
import { protectedRoutes, unProtectedRoutes } from "./router/NisekoRouter";
import ThemeContext from "./context/ThemeContext";
import Protected from "./layout/Protected";
import Main from "./layout/Main";

function App() {
  return (
    <BrowserRouter>
      <ThemeContext>
        <Routes>
          <Route element={<Protected />}>
            {protectedRoutes.map((route) => {
              const Component = route.element;
              return (
                <Route
                  path={route.path}
                  element={<Component />}
                  key={route.path}
                />
              );
            })}
          </Route>
          <Route element={<Main />}>
            {unProtectedRoutes.map((route) => {
              const Component = route.element;
              return (
                <Route
                  path={route.path}
                  element={<Component />}
                  key={route.path}
                />
              );
            })}
          </Route>
        </Routes>
      </ThemeContext>
    </BrowserRouter>
  );
}

export default App;
