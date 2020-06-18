import styled, { css } from 'styled-components/native';


const flexRowCss = css`
  align-items: center;
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

const startCss = css`
  justify-content: flex-start;
`;

const endCss = css`
  justify-content: flex-end;
`;

const wrapCss = css`
  flex-wrap: wrap;
`;

export const FlexRowStyled = styled.View`
  ${flexRowCss}
  ${props => props.spaceBetween ? spaceBetweenCss : ''}
  ${props => props.center ? centerCss : ''}
  ${props => props.flexEnd ? endCss : ''}
  ${props => props.flexStart ? startCss : ''}
  ${props => props.wrap ? wrapCss : ''}
`;
