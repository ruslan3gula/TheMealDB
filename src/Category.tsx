import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Col, Card, Space } from "antd";

export const Category = ({ search, setCategory }) => {
  const instance = axios.create({
    baseURL: "https://www.themealdb.com/api/json/v1/1/"
  });

  const [categories, setCategories] = useState<any>([]);

  // console.log(search);

  useEffect(() => {
    instance.get("list.php?c=list").then(({ data }) => {
      // console.log(data.meals);
      setCategories(data.meals);
    });
  }, []);
  return (
    <Row gutter={[16, 24]} justify="space-around" align="middle" wrap={true}>
      {categories &&
        categories.map((item: any, index: number) => (
          <div key={index} onClick={() => setCategory(item.strCategory)}>
            <Link to="/meals">
              <Col span={8}>
                <Card style={{ width: 300 }}>
                  <h2>{item.strCategory}</h2>
                </Card>
              </Col>
            </Link>
          </div>
        ))}
    </Row>
  );
};
