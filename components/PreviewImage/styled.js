import styled from 'styled-components/native';


export const ImageWrapperStyled = styled.View`
  border-radius: 22px;
  position: absolute;
  margin: 0 ${props => props.size * 0.1}px;
  width: ${props => props.size * 0.8}px;
  height: ${props => props.size * 0.8}px;
`;

export const ImageStyled = styled.Image`
  border-radius: 22px;
  width: ${props => props.size * 0.8}px;
  height: ${props => props.size * 0.8}px;
`;
