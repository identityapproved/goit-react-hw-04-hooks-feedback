import PropTypes from 'prop-types';
import { StatsList, StatsListItem } from './Statistics.styled';

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsList>
      <StatsListItem>Good: {good}</StatsListItem>
      <StatsListItem>Neutral: {neutral}</StatsListItem>
      <StatsListItem>Bad: {bad}</StatsListItem>
      <StatsListItem>Total: {total}</StatsListItem>
      <StatsListItem>Positive feedback: {positivePercentage}%</StatsListItem>
    </StatsList>
  );
};

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
