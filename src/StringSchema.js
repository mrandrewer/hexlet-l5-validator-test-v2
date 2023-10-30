import BaseSchema from './BaseSchema.js';

export default class StringSchema extends BaseSchema {
  constructor(validators) {
    super(validators ?? []);
    if (!validators || validators.length === 0) {
      this.validators.push((v) => typeof (v) === 'string');
    }
  }
}
