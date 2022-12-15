/**
 * In order for the widget to look/behave well on mobile devices (screen size smaller than 980px),
 * the page's viewport needs to be configured appropriately.
 */
const REQUIRED_VIEWPORT_CONTENT = 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=yes';

export function updateViewport() {
  let viewportMeta = document?.querySelector('meta[name="viewport"]');

  if (!viewportMeta) {
    viewportMeta = document.createElement('meta');
    viewportMeta.setAttribute('name', 'viewport');
    document.head.appendChild(viewportMeta);
  }

  const previousViewportContent = viewportMeta.getAttribute('content');
  const updatedViewportContent = [previousViewportContent, REQUIRED_VIEWPORT_CONTENT].join(', ');
  viewportMeta.setAttribute('content', updatedViewportContent);
}
