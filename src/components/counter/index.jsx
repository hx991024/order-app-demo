import React from "react";
import styles from "./index.module.css";

function index(props) {
  return (
    <div className={styles.counter}>
      {props.count !== 0 ? (
        <button className={styles.reduce} onClick={props.reduce}>
          -
        </button>
      ) : (
        ""
      )}
      {props.count !== 0 ? <span>{props.count}</span> : ""}
      <button className={styles.add} onClick={props.add}>
        +
      </button>
    </div>
  );
}

export default index;
