import { initWebchat } from './aselo-webchat';

const zIndex = document?.currentScript?.getAttribute('data-z-index');
initWebchat(zIndex);