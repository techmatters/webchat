const CONTAINER_ID = 'twilio-customer-frame';

export type ScriptParameter = string | null | undefined;

/**
 * Updates Webchat container z-index with the value provided by the client.
 * Sample: <script src="point/to/aselo-webchat.min.js" data-z-index="200">
 */
export function updateZIndex(zIndex: ScriptParameter) {
  const container = document?.getElementById(CONTAINER_ID);

  if (container && zIndex) {
    container.style.zIndex = zIndex;
    container.style.position = 'relative';
  }
}
