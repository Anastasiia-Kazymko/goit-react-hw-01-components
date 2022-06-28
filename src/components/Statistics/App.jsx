import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';

export const AppStatistics = () => {
  return (<div>
    {data.map(({id, label, percentage}) => (
      <Statistics
        key={id}
        label={label}
        percentage={percentage}
      />
    ))}    
  </div>);
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(),  
}  