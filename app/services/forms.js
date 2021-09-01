import Service from '@ember/service';
import { getOwner } from '@ember/application';
import definitions from '../lib/definitions';

export default class FormsService extends Service {

  _loadDefinition(type) {
    return definitions[type];
  }

  _createModel(type, definition) {
    let owner = getOwner(this);
    let factory = owner.factoryFor(`model:forms/${type}`).class;
    return new factory(owner, { type, definition });
  }

  async createModel(type) {
    let definition = this._loadDefinition(type);
    return this._createModel(type, definition);
  }

}
