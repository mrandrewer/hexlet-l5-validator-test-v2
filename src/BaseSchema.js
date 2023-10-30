export default class BaseSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((v) => v(value));
  }
}
