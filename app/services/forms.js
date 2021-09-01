import Service from '@ember/service';
import definitions from '../lib/definitions';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';

export default class FormsService extends Service {

  @service models;

  createModel(type) {
    let definition = definitions[type];
    assert(`definition for type '${type}' is not registered`, definition);
    let model = this.models.create(`forms/${type}`, { type, definition });
    return model;
  }

}
