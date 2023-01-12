import { injectGlobal } from 'react-emotion';

import { WIDGET_EXPANDED_CLASS } from './widget-expanded-listener';

export function makeMobileFullScreen() {
  return injectGlobal`
    /* 
      This media query matches phones/tablets,
      regardless the screen size or orientation mode.
    */
    @media screen and (pointer: coarse) and (hover: none) {
      .Twilio .Twilio-MainContainer {
        top: 0;
        left: 0;
        min-height: 100%;
        min-width: 100%;
      }

      /* Hides the floating button when expanded */
      button.${WIDGET_EXPANDED_CLASS} {
        display: none;
      }

      /*
        On mobile, after clicking on the send button, it keeps the button
        in :hover state, which turns the button grey. Since we could not get
        rid of :hover state programatically, we're overriding :hover color
        to #1976D2, to get rid of the grey misleading color
      */
      button.Twilio-MessageInput-SendButton:hover {
        background: #1976D2;
      }
    }
  `;
}
