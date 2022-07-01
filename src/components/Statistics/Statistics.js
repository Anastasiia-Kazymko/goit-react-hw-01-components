import PropTypes from 'prop-types';
import css from './Statistics.module.css'

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {    
      return (
    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

          <ul className={css.list}>
            {stats.map(({ id, label, percentage }) => (            
              <li className={css.item} key={id} style={{ backgroundColor: randomColor() }}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
              </li>))}
  </ul>
</section>
  );
};

Statistics.propTypes = {  
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}
 