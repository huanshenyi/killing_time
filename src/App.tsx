import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Board, HomePage, TagsPage } from "./pages";
import { useSelector } from "@/redux/hooks";

import styles from "./App.module.css";

// プライペートルート
const PrivateRoute = ({ isAuthenticated }: any) => {
  if (isAuthenticated === null) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

function App() {
  const jwt = useSelector((state) => state.user.token);
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/tags/:tagId" element={<TagsPage />}></Route>
          <Route path="/" element={<PrivateRoute isAuthenticated={jwt} />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
