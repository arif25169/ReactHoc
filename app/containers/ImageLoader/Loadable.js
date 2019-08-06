/**
 *
 * Asynchronously loads the component for ImageLoader
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
