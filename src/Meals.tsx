import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Space, Divider } from "antd";

export const Meals = ({ category }) => {
  console.log("category", category);
  const [data, setData] = useState<any>(null);

  // const categoryLink = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(({ data }) => {
        // console.log(data.meals);
        setData(data.meals);
      })
      .catch((e) => console.log(e));
  }, [category]);
  return (
    <div className="category_container">
      <p>Categories</p>
      {data &&
        data.map((item: any) => (
          <Link to={`/meal/${item.idMeal}`}>
            <Space
              align="center"
              direction="vertical"
              size={[120, 120]}
              style={{ display: "flex" }}
            >
              <img src={item.strMealThumb} alt="#" />
              <p>{item.strMeal}</p>
            </Space>
            <Divider />
          </Link>
        ))}
    </div>
  );
};
