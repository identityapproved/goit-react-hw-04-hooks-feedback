import styled from '@emotion/styled';

export const FeedbackBtn = styled.button`
  /* width: 200px; */
  margin: 10px;
  border: 1px solid grey;
  border-radius: 23px;
  padding: 12px 24px;
  color: ${props => `${props.theme.colors.black}`};
  transition: all 250ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
