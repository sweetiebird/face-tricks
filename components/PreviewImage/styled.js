import styled from 'styled-components/native';


export const ImageWrapperStyled = styled.View`
  border-radius: 22px;
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export const ImageStyled = styled.Image`
  border-radius: 22px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;
