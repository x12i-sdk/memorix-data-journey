import assert from 'node:assert/strict';
import { projectMatrix } from '@x12i/memorix-data-journey';
const timestamp = '2026-01-01T00:00:00Z';
const observation = { kind: 'database', observationId: 'observation-1', objectType: 'asset', recordId: 'asset-1', occurredAt: timestamp, sequence: 1,
  phase: 'write', service: 'fixture', contentType: 'core', revision: 1,
  paths: [{ path: 'data.name', valueKind: 'string', valuePreview: 'Example asset', visibility: 'visible' }],
  storageRef: { dataCategory: 'entity', objectType: 'asset', contentType: 'core', recordId: 'asset-1' },
};
const matrix = projectMatrix([observation], { objectType: 'asset', basis: { kind: 'record', recordId: 'asset-1', resolvedAt: timestamp }, granularity: 'property', includeValues: true });
assert(matrix.rows.length > 0);
assert(matrix.columns.some(column => column.path.includes('name')));
assert(matrix.cells.some(cell => cell.origin === 'database'));
console.log(matrix);
// This matrix reflects only the supplied observation, not a live database or inferred schema.
