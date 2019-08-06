/**
 *
 * Asynchronously loads the component for DownLoader
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
