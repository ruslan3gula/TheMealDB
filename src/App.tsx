import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  Routes,
  Route,
  BrowserRouter as Router,
  useNavigate
} from "react-router-dom";

import "antd/dist/reset.css";

import { Meals } from "./Meals";
import { Meal } from "./Meal";
import { Search } from "./Search";
import { SearchInput } from "./SearchInput";
import { Category } from "./Category";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState(null);
  console.log(search);

  const navigate = useNavigate();

  function startSearch() {
    navigate("/search");
  }
  return (
    <div className="App">
      <div className="header">
        <Link to="/">
          <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
        </Link>
        <SearchInput setSearch={setSearch} startSearch={startSearch} />
      </div>
      <nav></nav>

      <Routes>
        <Route
          path="/"
          element={<Category search={search} setCategory={setCategory} />}
        />
        <Route path="meals" element={<Meals category={category} />} />
        <Route path="meal" element={<Meal />}>
          <Route path=":id" element={<Meal />} />
        </Route>
        <Route path="search" element={<Search search={search} />} />
      </Routes>
    </div>
  );
}
