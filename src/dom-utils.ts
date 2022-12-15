const CONTAINER_ID = 'twilio-customer-frame';
const HELPLINE_SELECT_ID = 'menu-helpline';
const LANGUAGE_SELECT_ID = 'menu-language';

// Array of ids from elements that need z-index update
const nodeIds = [CONTAINER_ID, LANGUAGE_SELECT_ID, HELPLINE_SELECT_ID];

/**
 * Updates Webchat container z-index with the value provided by the client.
 * Sample: <script src="point/to/aselo-webchat.min.js" data-z-index="200">
 *
 * How it works?
 * It uses MutationObserver to listen to DOM changes. Everytime it detects a new node was added
 * to `document.body` (or children), it checks if this element needs to have its z-index set.
 */
export function updateZIndex() {
  const zIndex = document?.currentScript?.getAttribute('data-z-index');
  if (zIndex === null || zIndex === undefined) return;

  const observer = new window.MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (isHTMLElement(node) && nodeIds.includes(node.id)) {
          node.style.zIndex = zIndex;

          if (CONTAINER_ID === node.id) {
            node.style.position = 'relative';
          }
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

function isHTMLElement(node: Node): node is HTMLElement {
  return node.nodeType === Node.ELEMENT_NODE;
}

function shouldDisableMobileOptimization() {
  const disableMobileOptimizationAttribute = document.currentScript?.getAttribute('disable-mobile-optimization');
  return ['', true, 'true'].some((value) => value === disableMobileOptimizationAttribute);
}

/**
 * In order for the widget to look/behave well on mobile devices (screen size smaller than 980px),
 * the page's viewport needs to be configured appropriately.
 *
 * Notice that this optimization may override the default webpage configuration. If that
 * is not desired, you can disable it by setting 'disable-mobile-optimization' attribute:
 * <script disable-mobile-optimization src=''></script>
 */
const requiredViewportContent = 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=yes';
export function updateViewport() {
  if (shouldDisableMobileOptimization()) {
    return;
  }

  let viewportMeta = document?.querySelector('meta[name="viewport"]');

  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute('name', 'viewport');
    document.head.appendChild(viewportMeta);
  }

  const previousViewportContent = viewportMeta.getAttribute('content');
  const updatedViewportContent = [previousViewportContent, requiredViewportContent].join(', ');
  viewportMeta.setAttribute('content', updatedViewportContent);
}
