import * as FlexWebChat from '@twilio/flex-webchat-ui';

const { styled } = FlexWebChat;

export const EndButtonBase = styled('button')`
  margin: 5px;
  color: fff;
  background-color: #1976d1;
  padding: 8px 94px;
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:focus: {
    outline: auto;
  }
`;

export const ExitButtonBase = styled('button')`
  margin: 3px 15px;
  display: flex;
  width: 50%;
  color: #d22f2f;
  background-color: #fbf2f2;
  padding: 10px 7px 7px 7px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-size: 13px;
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
  z-index: 100;
  display: flex;
`;

export const StyleText = styled('span')<StyleWrapperProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  padding: 0 15px;
  text-align: center;
`;
