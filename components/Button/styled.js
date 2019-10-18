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

const dangerCss = css`
  background-color: ${colors.danger};
  border-color: ${colors.danger};
`;

const invertedCss = css`
  background-color: ${colors.white};
  border-color: ${colors.primary};
`;

const disabledCss = css`
  background-color: ${colors.disabled};
  border-color: ${colors.smoke};
`;

const tinyButtonCss = css`
  padding: 2px 12px;
  border-radius: 22px;
`;

const buttonCss = css`
  align-items: center;
  border-radius: 100px;
  border-width: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 18px;
  position: relative;
  ${props => props.primary ? primaryCss : ''}
  ${props => props.inverted ? invertedCss : ''}
  ${props => props.success ? successCss : ''}
  ${props => props.danger ? dangerCss : ''}
  ${props => props.disabled ? disabledCss : ''}
`;

export const ButtonStyled = styled.View`
  ${buttonCss}
`;

const primaryTextCss = css`
  color: ${colors.white};
`;

const successTextCss = css`
  color: ${colors.white};
`;

const dangerTextCss = css`
  color: ${colors.white};
`;

const invertedTextCss = css`
  color: ${colors.primary};
`;

const disabledTextCss = css`
  color: ${colors.smoke};
`;

const smallTextCss = css`
  font-size: 14px;
  line-height: 26px;
`;

const medTextCss = css`
  font-size: 16px;
  line-height: 38px;
`;

export const ButtonTextStyled = styled.Text`
  font-family: roboto-regular;
  font-size: 18px;
  font-weight: 500;
  line-height: 52px;
  ${props => props.small ? smallTextCss : ''}
  ${props => props.medium ? medTextCss : ''}
  ${props => props.primary ? primaryTextCss : ''}
  ${props => props.inverted ? invertedTextCss : ''}
  ${props => props.success ? successTextCss : ''}
  ${props => props.danger ? dangerTextCss : ''}
  ${props => props.disabled ? disabledTextCss : ''}
`;
