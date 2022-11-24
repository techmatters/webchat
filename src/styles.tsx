import * as FlexWebChat from '@twilio/flex-webchat-ui';

const { styled } = FlexWebChat;

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
