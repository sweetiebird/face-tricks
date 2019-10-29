import styled, { css } from 'styled-components/native';

import { colors } from 'constants';


const tinyButtonCss = css`
  padding: 2px 12px;
  border-radius: 22px;
`;

const primaryCss = css`
  border-color: ${colors.primary};
`;

const successCss = css`
  border-color: ${colors.success};
`;

const dangerCss = css`
  border-color: ${colors.danger};
`;

const invertedCss = css`
  border-color: ${colors.primary};
`;

const disabledCss = css`
  border-color: ${colors.smoke};
`;

const smButtonCss = css`
  border-width: 1px;
`;

const noBorderCss = css`
  border-width: 0;
`;

const circleButtonCss = css`
  border-radius: 40px;
  width: 80px;
  height: 80px;
  padding: 0 0 0 0;
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
  ${props => props.small || props.tiny ? smButtonCss : ''}
  ${props => props.noBorder ? noBorderCss : ''}
  ${props => props.circle ? circleButtonCss : ''}
`;

export const ButtonStyled = styled.View`
  ${buttonCss}
`;

const primaryTextCss = css`
  color: ${colors.primary};
`;

const successTextCss = css`
  color: ${colors.successHover};
`;

const dangerTextCss = css`
  color: ${colors.danger};
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
