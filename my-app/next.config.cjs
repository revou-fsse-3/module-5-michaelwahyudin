import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';
import { checkKeys } from 'next/config';

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    checkKeys(require('next/dist/compose/statics/client-stats')(phase));
  }

  return {
    // Your configuration options here
  };
};