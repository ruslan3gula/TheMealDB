import axios from "axios";
import { useEffect, useState } from "react";
import { isInputElement } from "react-router-dom/dist/dom";
import { Space, Divider } from "antd";

import { Link } from "react-router-dom";

export const Search = ({ search }) => {
  const uri = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  const [result, setResult] = useState<any>(null);
  useEffect(() => {
    axios(uri).then(({ data }) => {
      setResult(data.meals);
      console.log("data.meals", data.meals);
    });
  }, [search]);
  return (
    <div>
      {result &&
        result.map((item: any) => (
          <Space
            align="center"
            direction="vertical"
            size={[120, 120]}
            style={{ display: "flex" }}
          >
            <img src={item.strMealThumb} alt="#" />
            <Link to={`/meal/${item.idMeal}`}>
              <h1 className="search_title">{item.strMeal}</h1>
            </Link>
            <p>{item.strInstructions}</p>
            <Divider />
          </Space>
        ))}
    </div>
  );
};
