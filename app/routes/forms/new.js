import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FormsNewRoute extends Route {

  @service forms;

  model({ type }) {
    return this.forms.createModel(type);
  }

}
