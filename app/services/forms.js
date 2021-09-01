import Service from '@ember/service';
import definitions from '../lib/definitions';
import { inject as service } from '@ember/service';

export default class FormsService extends Service {

  @service models;

  _loadDefinition(type) {
    return definitions[type];
  }

  _createModel(type, definition) {
    return this.models.create(`forms/${type}`, { type, definition });
  }

  async createModel(type) {
    let definition = this._loadDefinition(type);
    let model = this._createModel(type, definition);
    return model;
  }

}
