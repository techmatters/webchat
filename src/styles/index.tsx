import * as FlexWebChat from '@twilio/flex-webchat-ui';

const { styled } = FlexWebChat;

export const EndButtonBase = styled('button')`
  margin: 5px;
  color: #fff;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  background-color: #1876d0;
  border-radius: 4px;
  width: 257px;
  height: 29px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 11px;
  line-height: 24px;
  text-align: center;
  &:focus: {
    outline: auto;
  }
`;

export const ExitButtonBase = styled('button')`
  margin: 3px 15px;
  display: flex;
  color: #d22f2f;
  background-color: #fbf2f2;
  border-radius: 4px;
  width: 45%;
  height: 29px;
  font-weight: bold;
  border: none;
  padding-top: 5px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 11px;
  line-height: 24px;
  text-align: center;
  &:focus: {
    outline: auto;
  }
`;

type StyleWrapperProps = {
  margin?: string;
  color?: string;
};

export const StyleWrapper = styled('div')<StyleWrapperProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  width: 100%;
  display: flex;
`;

export const StyleText = styled('span')<StyleWrapperProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  padding: 0 15px;
  font-family: Open Sans;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`;
