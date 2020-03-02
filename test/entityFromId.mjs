import { entityFromId, entities } from '../src/index.mjs'

export default [
  { fn: entityFromId(39), expect: '&#39;', info: 'can handle numbers' },
  { fn: entityFromId('lt'), expect: '&lt;', info: 'can handle strings' },
  { fn: entityFromId('&#39;'), expect: '&#39;', info: 'returns valid entity numerics unchanged' },
  { fn: entityFromId('&#lt;'), expect: '&#lt;', info: 'returns valid entity strings unchanged' },
]
