import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({label, percentage}) => {  
      return (
    <section className="statistics">
        <h2 className={css.title}>Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  </ul>
</section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
} 