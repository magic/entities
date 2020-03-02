import { entities, isEntity } from '../src/index.mjs'

export default [
  { fn: isEntity('&#39;'), info: 'can detect numeric entities' },
  { fn: isEntity('&lt;'), info: 'can detect string entities' },
  { fn: isEntity(39), expect: false, info: 'numbers are not entities' },
  { fn: isEntity('#39;'), expect: false, info: 'invalid strings are not entities' },
  { fn: isEntity('&#39'), expect: false, info: 'invalid strings are not entities' },
  {
    fn: entities.every(e => isEntity(`&#${e[0]};`)),
    info: 'all exported numerical entities are indeed entities',
  },
  {
    fn: entities.filter(e => e[2]).every(e => isEntity(`&${e[2]};`)),
    info: 'all exported string entities are indeed entities',
  },
]
