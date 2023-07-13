import { StatisticItem } from './StatisticItem';
import PropTypes from 'prop-types';
import { List, Statistics, Title } from './Statistics.styled';

export const StatisticList = ({ title, stats }) => {
  return (
    <Statistics>
      {title && <Title className="title">{title}</Title>}
      <List>
        {stats.map(stat => {
          return (
            <StatisticItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </List>
    </Statistics>
  );
};

StatisticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
