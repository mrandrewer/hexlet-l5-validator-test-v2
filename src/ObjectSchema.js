import BaseSchema from './BaseSchema.js';

export default class ObjectSchema extends BaseSchema {
  constructor(validators) {
    super(validators ?? []);
    if (!validators || validators.length === 0) {
      this.validators.push((v) => typeof v === 'object');
    }
  }

  shape(schema) {
    const validator = (v) => {
      const keys = Object.keys(v);
      const schemaKeys = Object.keys(schema);
      if (keys.length !== schemaKeys.length) {
        return false;
      }

      return schemaKeys.every((k) => schema[k].isValid(v[k]));
    };
    return new ObjectSchema([...this.validators, validator]);
  }
}
