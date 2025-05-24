import { lazy, Suspense } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./components/ui/layout/Layout"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path="/" />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
