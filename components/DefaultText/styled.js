import styled, { css } from 'styled-components/native';

import { colors } from 'constants';


const italicCss = css`
  font-family: roboto-italic;
  opacity: 0.8;
`;

const headingCss = css`
  font-family: roboto-medium;
  font-size: 22px;
`;

export const DefaultTextStyled = styled.Text`
  color: ${colors.text};
  font-weight: 400;
  font-family: roboto-regular;
  ${props => props.italic ? italicCss : ''}
  ${props => props.heading ? headingCss : ''}
`;
