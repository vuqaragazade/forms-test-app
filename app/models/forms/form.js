import Model from '../model';

export default class Form extends Model {

  constructor(owner, { type, definition }) {
    super(owner);
    this.type = type;
    this.definition = definition;
  }

  get serialized() {
    let { type, definition } = this;
    return { type, definition };
  }

}
