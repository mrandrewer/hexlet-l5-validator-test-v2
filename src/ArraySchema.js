import BaseSchema from './BaseSchema.js';

export default class ArraySchema extends BaseSchema {
  constructor(validators) {
    super(validators ?? []);
    if (!validators || validators.length === 0) {
      this.validators.push((v) => Array.isArray(v));
    }
  }

  maxDepth(depth) {
    const checkDepth = (arr, d) => {
        console.log(arr, d);
        if (!Array.isArray(arr)) return true;
        if (d === 0) return false;
        if (arr.length ===0)  return true;
        return arr.every(a => checkDepth(a, d - 1));
    };
    const validator = (v) => checkDepth(v, depth);
    return new ArraySchema([...this.validators, validator]);
  }
}
