import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <div>
        <ul className={s.statList}>
          {stats.map(stat => (
            <li
              className={s.item}
              style={{ backgroundColor: getRandomColor() }}
              key={stat.id}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}&#37;</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  return backgroundColor;
}

export default Statistics;
