import { injectGlobal } from 'react-emotion';

export function fullScreenChat() {
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
    }
  `;
}
