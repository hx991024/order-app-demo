import Meal from "./meal";
import { useState } from "react";
import styles from "./index.module.css";

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
  {
    id: 5,
    desc: "汉堡5",
    name: "汉堡5",
    price: "15",
  },
  {
    id: 6,
    name: "汉堡6",
    desc: "汉堡6",
    price: "15",
  },
  {
    id: 7,
    name: "汉堡7",
    desc: "汉堡7",
    price: "15",
  },
  {
    id: 8,
    name: "汉堡8",
    desc: "汉堡8",
    price: "15",
  },
];
const index = () => {
  const [meals, setMeals] = useState(MEAL_LIST);
  return (
    <div className={styles.mealsBox}>
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default index;
