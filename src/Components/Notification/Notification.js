import { NotificationStyles } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <NotificationStyles>{message}</NotificationStyles>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
