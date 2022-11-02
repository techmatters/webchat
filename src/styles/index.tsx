import * as FlexWebChat from '@twilio/flex-webchat-ui';

const { styled } = FlexWebChat;

export const EndButtonBase = styled('button')`
  margin: 5px;
  color: fff;
  background-color: #1976d1;
  padding: 8px 90px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:focus: {
    outline: auto;
  }
`;

export const ExitButtonBase = styled('button')`
  margin: 3px 5px;
  display: flex;
  color: #d64444;
  background-color: #faf2f2;
  padding: 5px 7px 5px 5px;
  border-radius: 5px;
  font-weight: bold;
  border: none;
  cursor: pointer;
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
  display: flex;
`;

export const StyleText = styled('span')<StyleWrapperProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;
