import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ stats }) => {  
  
      return (
    <section className="statistics">
        <h2 className={css.title}>Upload stats</h2>

          <ul className="stat-list">
            {stats.map(({ id, label, percentage }) => (            
              <li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>))}
  </ul>
</section>
  );
};

/* Statistics.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number
  })
  
}  */