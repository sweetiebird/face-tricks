import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { colors } from '../../../../constants';

export const ButtonViewStyled = styled.View`
  margin: 10px 20% 10px;
  width: 60%;
`;

const containerTopPadding = Platform.OS === 'ios' ? '40px' : '0px';

export const ContainerStyled = styled.View`
  flex: 1;
  background-color: #f8f9fe;
  padding-bottom: 20px;
  padding-top: ${containerTopPadding};
`;

export const ScrollViewStyled = styled.ScrollView`
  flex: 1;
`;
