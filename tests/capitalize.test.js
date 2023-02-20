import { strict as assert } from 'node:assert';

import capitalize from '../src/capitalize.js';

assert.equal(capitalize(''), '');
assert.equal(capitalize('hello'), 'Hello');

