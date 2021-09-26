import { SectionMain, SectionTitle } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionMain>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionMain>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
