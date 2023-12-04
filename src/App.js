import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Shared/Loader";
const Team = React.lazy(() => import("./pages/Team/Team.page"));
const FormationOverview = React.lazy(() => import("./pages/Formation/FormationOverview"));
const AppLayout = React.lazy(() => import("./Layout/AppLayout"));

function App() {
  return <AppRoutes />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader overlay />}>
              <Team />
            </Suspense>
          }
        />
        <Route
          index
          path='/formation'
          element={
            <Suspense fallback={<Loader overlay />}>
              <FormationOverview />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
