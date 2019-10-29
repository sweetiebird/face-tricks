import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'constants';

export const ButtonViewStyled = styled.View``;

const containerTopPadding = Platform.OS === 'ios' ? '40px' : '0px';

export const ContainerStyled = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #f8f9fe;
  padding-bottom: 20px;
  padding-top: ${containerTopPadding};
`;

export const ScrollViewStyled = styled.ScrollView``;
