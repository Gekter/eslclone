import styles from "./PointDistribution.module.css";

const PointDistribution = (props) => {
  return (
    <div className={styles.container}>
      <h4>{props.title}</h4>
      {props.data.map(el => (
        <div key={el.place} className={styles.row}>
          <div className={styles.place}>
            <span className={styles.rankBadge}>
              {el.place}
              .
            </span>
          </div>
          <div className={styles.points}>
            +
            {el.points + ' pts.'}
          </div>
          <div className={styles.spacer}></div>
        </div>
      ))}
    </div>
  );
};

export default PointDistribution;
