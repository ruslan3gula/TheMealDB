import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Space, Divider, Row, Col } from "antd";

const handleData = (data: any) => {
  const result = [];
  for (let i = 0; i < Object.keys(data).length; i++) {
    let ingredient = data[`strIngredient${i + 1}`];
    let measure = data[`strMeasure${i + 1}`];
    const dataHasOwnProperty = data.hasOwnProperty(`strMeasure${i + 1}`);
    const emptyLine = data[`strIngredient${i + 1}`] !== "";
    const condition = dataHasOwnProperty && emptyLine;
    console.log("condition", condition);

    if (condition) {
      result.push({ ingredient, measure });
    }
  }
  return result;
};
export const Meal = () => {
  const { id } = useParams();
  const [ingredients, setIngredients] = useState<any>([]);
  const [meal, setMeal] = useState<any>(null);
  const uri = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  console.log(uri);
  useEffect(() => {
    axios.get(uri).then(({ data }) => {
      console.log(data.meals[0]);
      setMeal(data.meals[0]);
      setIngredients(handleData(data.meals[0]));
      console.log(handleData(data.meals[0]));
    });
  }, []);

  return (
    <div className="meal_container">
      {meal && (
        <Space direction="vertical" style={{ display: "flex" }}>
          <Space direction="horizontal">
            <img className="meal_main_image" src={meal.strMealThumb} alt="#" />
            <div>
              <h3>Ingredients</h3>
              <Row gutter={[16, 24]}>
                {ingredients &&
                  ingredients.map((item) => (
                    <Col span={6}>
                      <div className="meal_ingredients">
                        <img
                          src={`https://www.themealdb.com/images/ingredients/${item.ingredient}.png`}
                          alt="#"
                        />
                        <p>{item.ingredient}</p>
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          </Space>
          <h3>{meal.strMeal}</h3>
          <p className="meal_description">{meal.strInstructions}</p>
        </Space>
      )}
    </div>
  );
};
