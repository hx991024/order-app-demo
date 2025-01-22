import styles from './index.module.css'

const index = () => {
  return (
    <div className={styles.mealItem}>
      <div className={styles.imageBox}>
        <img src="https://pic.616pic.com/ys_img/00/06/10/rKvVTsmvZr.jpg" />
      </div>
      <div className={styles.infoBox}>
        <div>名字</div>
        <div>简介</div>
        <div className={styles.priceBox}>
          <div>价格</div>
          <div>加减器</div>
        </div>
      </div>
    </div>
  )
}

export default index
