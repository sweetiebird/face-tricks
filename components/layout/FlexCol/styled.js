import styled, { css } from 'styled-components/native';


const flexColCss = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const spaceBetweenCss = css`
  justify-content: space-between;
`;

const centerCss = css`
  justify-content: center;
`;

export const FlexColStyled = styled.View`
  ${flexColCss}
  ${props => props.spaceBetween ? spaceBetweenCss : ''}
  ${props => props.center ? centerCss : ''}
`;
