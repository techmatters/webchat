import * as FlexWebChat from '@twilio/flex-webchat-ui';

const { styled } = FlexWebChat;

export const EndChatWrapper = styled('div')`
  margin: 2px auto;
  width: 100%;
  display: flex;
`;

export const StyledEndButton = styled('button')`
  margin: 5px;
  background-color: #1876d0;
  color: #fff;
  width: 100%;
  flex-grow: 1;
  height: 29px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Open Sans;
  font-size: 11px;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  overflow-wrap: break-word;
  &:focus: {
    outline: auto;
  }
`;

export const ExitWrapper = styled('div')`
  margin: 3px 2px 10px 5px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

export const ExitDescWrapper = styled('div')`
  flex-basis: 100px;
  flex-grow: 1;
  display: inline-grid;
  align-content: center;
  justify-items: center;
`;

export const ExitDescText = styled('span')`
  margin: 2px 0 0 2px;
  color: #606b85;
  padding: 0 10px;
  font-family: Open Sans;
  font-size: 11px;
  line-height: 15px;
  text-align: center;
  max-width: fit-content;
`;

export const StyledQuickExitButton = styled('button')`
  display: flex;
  margin: 3px 10px 0 0;
  background-color: #fbf2f2;
  color: #d22f2f;
  place-items: center;
  min-width: fit-content;
  justify-content: center;
  font-size: 11px;
  min-width: 50%;
  flex-grow: 1;
  height: 29px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: Open Sans;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  overflow-wrap: break-word;
  &:focus: {
    outline: auto;
  }
`;

export const QuickExitText = styled('span')`
  padding: 0 5px 1px 2px;
`;
