import { entities, isEntity } from '../src/index.js'

export default [
  // Test each numeric entity
  ...entities.map(([id, _char, _name, desc]) => ({
    fn: isEntity(`&#${id};`),
    expect: true,
    info: `can detect numeric entity &#${id}; (${desc})`,
  })),

  // Test each named entity (only those with names)
  ...entities
    .filter(([_id, _char, name]) => name !== '')
    .map(([_id, _char, name, desc]) => ({
      fn: isEntity(`&${name};`),
      expect: true,
      info: `can detect named entity &${name}; (${desc})`,
    })),

  // Test that raw numbers are not entities
  ...entities.map(([id, _char, _name, desc]) => ({
    fn: isEntity(id),
    expect: false,
    info: `number ${id} is not an entity (${desc})`,
  })),

  // Test invalid format: missing ampersand
  ...entities.map(([id, _char, _name, desc]) => ({
    fn: isEntity(`#${id};`),
    expect: false,
    info: `#${id}; without ampersand is invalid (${desc})`,
  })),

  // Test invalid format: missing semicolon
  ...entities.map(([id, _char, _name, desc]) => ({
    fn: isEntity(`&#${id}`),
    expect: false,
    info: `&#${id} without semicolon is invalid (${desc})`,
  })),

  // Test invalid format: named entities missing semicolon
  ...entities
    .filter(([_id, _char, name]) => name !== '')
    .map(([_id, _char, name, desc]) => ({
      fn: isEntity(`&${name}`),
      expect: false,
      info: `&${name} without semicolon is invalid (${desc})`,
    })),
]
