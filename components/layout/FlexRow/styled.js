import styled, { css } from 'styled-components/native';


const flexRowCss = css`
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

const wrapCss = css`
  flex-wrap: wrap;
`;

export const FlexRowStyled = styled.View`
  ${flexRowCss}
  ${props => props.spaceBetween ? spaceBetweenCss : ''}
  ${props => props.center ? centerCss : ''}
  ${props => props.wrap ? wrapCss : ''}
`;
