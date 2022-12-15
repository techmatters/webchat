/**
 * This module optimizes the widget for mobile devices.
 *
 * Notice that some of the optimization may override the default webpage HTML/CSS. If that
 * is not desired, you can disable it by setting 'disable-mobile-optimization' attribute:
 * <script disable-mobile-optimization src=''></script>
 */
import { fullScreenChat } from './full-screen';
import { updateViewport } from './viewport';

function shouldDisableMobileOptimization() {
  const disableMobileOptimizationAttribute = document.currentScript?.getAttribute('disable-mobile-optimization');
  return ['', true, 'true'].some((value) => value === disableMobileOptimizationAttribute);
}

export function applyMobileOptimization() {
  if (shouldDisableMobileOptimization()) {
    return;
  }

  fullScreenChat();
  updateViewport();
}
