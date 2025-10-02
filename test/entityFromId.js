import { entities, entityFromId } from '../src/index.js'

export default [
  // Test numeric IDs
  ...entities.map(([id, _char, _name, desc]) => ({
    fn: entityFromId(id),
    expect: `&#${id};`,
    info: `can handle numeric ID ${id} (${desc})`,
  })),

  // Test named entities (only those with names)
  ...entities
    .filter(([_id, _char, name]) => name !== '')
    .map(([_id, _char, name, desc]) => ({
      fn: entityFromId(name),
      expect: `&${name};`,
      info: `can handle named entity '${name}' (${desc})`,
    })),

  // Test already formatted numeric entities
  ...entities.map(([id, _char, _name, desc]) => ({
    fn: entityFromId(`&#${id};`),
    expect: `&#${id};`,
    info: `returns valid numeric entity &#${id}; unchanged (${desc})`,
  })),

  // Test already formatted named entities (only those with names)
  ...entities
    .filter(([_id, _char, name]) => name !== '')
    .map(([_id, _char, name, desc]) => ({
      fn: entityFromId(`&${name};`),
      expect: `&${name};`,
      info: `returns valid named entity &${name}; unchanged (${desc})`,
    })),
]
