import styled, { css } from 'styled-components/native';

import { colors } from 'constants';


const primaryCss = css`
  background-color: ${colors.primary};
  border-color: ${colors.primary};
`;

const successCss = css`
  background-color: ${colors.success};
  border-color: ${colors.success};
`;

const invertedCss = css`
  background-color: ${colors.white};
  border-color: ${colors.primary};
`;

const disabledCss = css`
  background-color: ${colors.disabled};
  border-color: ${colors.smoke};
`;

export const ButtonStyled = styled.View`
  align-items: center;
  border-radius: 100px;
  border-width: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 18px;
  ${props => props.primary ? primaryCss : ''}
  ${props => props.inverted ? invertedCss : ''}
  ${props => props.success ? successCss : ''}
  ${props => props.disabled ? disabledCss : ''}
`;

const primaryTextCss = css`
  color: ${colors.white};
`;

const successTextCss = css`
  color: ${colors.white};
`;

const invertedTextCss = css`
  color: ${colors.primary};
`;

const disabledTextCss = css`
  color: ${colors.smoke};
`;

export const ButtonTextStyled = styled.Text`
  font-family: roboto-regular;
  font-size: 18px;
  font-weight: 500;
  line-height: 52px;
  ${props => props.primary ? primaryTextCss : ''}
  ${props => props.inverted ? invertedTextCss : ''}
  ${props => props.success ? successTextCss : ''}
  ${props => props.disabled ? disabledTextCss : ''}
`;
