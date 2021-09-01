import Service from '@ember/service';
import { getOwner } from '@ember/application';

export default class ModelsService extends Service {

  create(name, ...args) {
    let owner = getOwner(this);
    let factory = owner.factoryFor(`model:${name}`).class;
    return new factory(owner, ...args);
  }

}
