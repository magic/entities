import { is } from '@magic/test'
import defaultEntities, { entities, isEntity, entityFromId } from '../src/index.mjs'

export default [
  { fn: is.array(entities), info: 'entities is an array' },
  { fn: entities.every(e => is.array(e)), info: 'every entity is an array' },
  { fn: entities.every(e => e.length === 4), info: 'every entity has a length of 4' },
  { fn: entities.every(e => is.num(e[0])), info: 'first entry in entity is a number' },
  {
    fn: entities.every(e => is.str(e[1]) && is.str(e[2]) && is.str(e[3])),
    info: 'second through fourth entry in entity are a string',
  },
  { fn: is.deep.eq(defaultEntities, entities), info: 'both exported entity arrays are deep equal' },

  { fn: () => isEntity, expect: is.fn, info: 'isEntity is a function' },
  { fn: () => entityFromId, expect: is.fn, info: 'entityFromId is a function' },
]
