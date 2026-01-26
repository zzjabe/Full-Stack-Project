import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewAdded from "./pages/NewAdded";
import PopBooks from "./pages/PopBooks";
import Activity from "./pages/Activity";
import SignIn from "./pages/SignIn";
import BookDetailPage from "./pages/BookDetailPage";
import './App.css'
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/NewAdded" element={<NewAdded />} />
          <Route path="/PopBooks" element={<PopBooks />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Search" element={<SearchResultPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
