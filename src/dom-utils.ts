const CONTAINER_ID = 'twilio-customer-frame';

/**
 * Updates Webchat container z-index with the value provided by the client.
 * Sample: <script src="point/to/aselo-webchat.min.js" data-z-index="200">
 */
export function updateZIndex() {
  const container = document?.getElementById(CONTAINER_ID);
  const zIndex = document?.currentScript?.getAttribute('data-z-index');

  if (container && zIndex) {
    container.style.zIndex = zIndex;
  }
}
