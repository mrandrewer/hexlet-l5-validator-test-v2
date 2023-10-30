import BaseSchema from './BaseSchema.js';

export default class StringSchema extends BaseSchema {
  constructor(validators) {
    super(validators ?? []);
    if (!validators || validators.length === 0) {
      this.validators.push((v) => typeof (v) === 'string');
    }
  }

  startsFromUpperCase() {
    const validator = (v) => v.length > 0 && v.slice(0, 1).match(/[A-Z]/g) != null;
    return new StringSchema([...this.validators, validator]);
  }

  length(len) {
    const validator = (v) => v.length === len;
    return new StringSchema([...this.validators, validator]);
  }
  
  hasExclamation() {
    const validator = (v) => v.match(/[!]/g) != null;
    return new StringSchema([...this.validators, validator]);
  }
}
