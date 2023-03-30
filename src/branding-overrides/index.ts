import { injectGlobal } from 'react-emotion';

export const applyWidgetBranding = () => {
  return injectGlobal`
    .Twilio .Twilio-MainContainer {
        width: 350px;
      }
  `;
};
