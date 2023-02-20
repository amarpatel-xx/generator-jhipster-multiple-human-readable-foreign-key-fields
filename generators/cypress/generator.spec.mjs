import { expect } from 'expect';

import { helpers, lookups } from '#test-utils';

const SUB_GENERATOR = 'cypress';
const BLUEPRINT_NAMESPACE = `jhipster:${SUB_GENERATOR}`;

describe('SubGenerator cypress of multiple-human-readable-foreign-key-fields JHipster blueprint', () => {
  describe('run', () => {
    let result;
    before(async function () {
      result = await helpers
        .create(BLUEPRINT_NAMESPACE)
        .withOptions({
          reproducible: true,
          defaults: true,
          blueprint: 'multiple-human-readable-foreign-key-fields',
        })
        .withLookups(lookups)
        .run();
    });

    it('should succeed', () => {
      expect(result.getStateSnapshot()).toMatchSnapshot();
    });
  });
});
