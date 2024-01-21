import Styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const StatsPercent = stats.map(item => (
    <li
      className={Styles.item}
      // style={{ backgroundColor: '#fff', border: '3px solid #4ab043' }}
      key={item.id}
    >
      <span className={Styles.label}>{item.label}</span>
      <span className={Styles.percentage}>{item.percentage}$</span>
    </li>
  ));

  return (
    <>
      <section className={Styles.statistics}>
        {title && <h2 className={Styles.title}>{title}</h2>}
        <ul className={Styles.statList}>{StatsPercent}</ul>
      </section>
    </>
  );
};

export default Statistics;
