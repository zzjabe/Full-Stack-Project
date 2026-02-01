import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import NewAdded from "./pages/NewAdded";
import PopBooks from "./pages/PopBooks";
import ReadingList from "./pages/ReadingList";
import SignIn from "./pages/SignIn";
import BookDetailPage from "./pages/BookDetailPage";
import SearchResultPage from "./pages/SearchResultPage";

import type { Book } from "./data/books";
import { initialBooks } from "./data/books";

import type { User } from "./data/users";
import { initialUsers } from "./data/users";
import UsersPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";

import "./App.css";

function App() {
  const [books, setBooks] = useState<Book[]>(() => {
    const saved = localStorage.getItem("books");
    return saved ? JSON.parse(saved) : initialBooks;
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const [users, setUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : initialUsers;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const [currentUserId, _setCurrentUserId] = useState("U1");

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home books={books} setBooks={setBooks} />} />
        <Route
          path="/home"
          element={<Home books={books} setBooks={setBooks} />}
        />

        <Route
          path="/newadded"
          element={<NewAdded books={books} setBooks={setBooks} />}
        />

        <Route path="/popbooks" element={<PopBooks books={books} />} />

        <Route
          path="/book/:id"
          element={
            <BookDetailPage
              books={books}
              users={users}
              setUsers={setUsers}
              currentUserId={currentUserId}
            />
          }
        />

        <Route path="/search" element={<SearchResultPage books={books} />} />

        <Route path="/ReadingList" element={<ReadingList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/users"
          element={<UsersPage users={users} setUsers={setUsers} />}
        />
        <Route
          path="/users/:userId"
          element={
            <UserDetailPage users={users} setUsers={setUsers} books={books} />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
