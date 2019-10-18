import styled from 'styled-components/native';


export const ImageWrapperStyled = styled.View`
  position: absolute;
  margin: 0 ${props => props.marginH}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

export const ImageStyled = styled.Image`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;
