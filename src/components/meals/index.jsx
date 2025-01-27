import Meal from "./meal";
import { useState } from "react";

const MEAL_LIST = [
  {
    id: 1,
    name: "汉堡1",
    desc: "汉堡1",
    price: "12",
  },
  {
    id: 2,
    name: "汉堡2",
    desc: "汉堡2",
    price: "13",
  },
  {
    id: 3,
    name: "汉堡3",
    desc: "汉堡3",
    price: "14",
  },
  {
    id: 4,
    name: "汉堡4",
    desc: "汉堡4",
    price: "15",
  },
];
const index = () => {
  const [meals, setMeals] = useState(MEAL_LIST);
  return (
    <div>
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default index;
