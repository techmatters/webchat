import ReactHtmlParser from 'react-html-parser';
import DOMPurify from 'dompurify';

/**
 * Adds target="_blank" rel="noopener" to <a> elements
 */
DOMPurify.addHook('afterSanitizeAttributes', (node) => {
  if ('target' in node) {
    node.setAttribute('target', '_blank');
    node.setAttribute('rel', 'noopener');
  }
});

export const safeParseHtml = (htmlString: string) =>
  ReactHtmlParser(DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true } }));
