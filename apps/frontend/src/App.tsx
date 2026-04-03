import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout/Layout";

import Home from "./components/pages/Home";
import NewAdded from "./components/pages/NewAdded";
import PopBooks from "./components/pages/PopBooks";
import Activity from "./components/pages/Activity";
import SignIn from "./components/pages/SignInPage";
import BookDetailPage from "./components/pages/BookDetailPage";
import SearchResultPage from "./components/pages/SearchResultPage";
import UsersPage from "./components/pages/UsersPage";
import UserDetailPage from "./components/pages/UserDetailPage";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/newadded" element={<NewAdded />} />

        <Route path="/popbooks" element={<PopBooks />} />

        <Route path="/book/:id" element={<BookDetailPage />} />

        <Route path="/search" element={<SearchResultPage />} />

        <Route path="/Activity" element={<Activity />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:userId" element={<UserDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
