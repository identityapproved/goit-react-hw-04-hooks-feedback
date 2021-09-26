import { FeedbackBtn } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(opt => (
        <FeedbackBtn key={opt} type="button" name={opt} onClick={() => leaveFeedback(opt)}>
          {opt.toUpperCase()}
        </FeedbackBtn>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
