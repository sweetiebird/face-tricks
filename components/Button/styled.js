import styled from 'styled-components/native';

import { colors } from 'constants';

export const ButtonStyled = styled.View`
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 18px;
`;

export const ButtonTextStyled = styled.Text`
  color: ${colors.white};
  font-family: roboto-regular;
  font-size: 18px;
  font-weight: 400;
  line-height: 52px;
`;
