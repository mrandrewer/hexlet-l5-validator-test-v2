import BaseSchema from './BaseSchema.js';

export default class ArraySchema extends BaseSchema {
  constructor(validators) {
    super(validators ?? []);
    if (!validators || validators.length === 0) {
      this.validators.push((v) => Array.isArray(v));
    }
  }
}
