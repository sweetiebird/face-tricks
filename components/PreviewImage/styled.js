import styled from 'styled-components/native';

import { colors } from 'constants';

export const ImageWrapperStyled = styled.View`
  position: absolute;
  margin: 0 ${props => props.marginH}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 4px;
  border: 1px solid ${colors.smoke};
`;

export const ImageStyled = styled.Image`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 4px;
`;
