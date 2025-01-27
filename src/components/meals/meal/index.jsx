import { useState } from "react";
import styles from "./index.module.css";
import Counter from "@/components/counter/index.jsx";

const index = (props) => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const reduce = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.mealItem}>
      <div className={styles.imageBox}>
        <img src="https://pic.616pic.com/ys_img/00/06/10/rKvVTsmvZr.jpg" />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.title}>{props.meal.name}</div>
        <div className={styles.desc}>{props.meal.desc}</div>
        <div className={styles.priceBox}>
          <div>￥{props.meal.price}</div>
          <Counter count={count} add={add} reduce={reduce} />
        </div>
      </div>
    </div>
  );
};

export default index;
