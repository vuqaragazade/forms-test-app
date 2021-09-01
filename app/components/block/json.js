import Component from '@glimmer/component';

export default class BlockJsonComponent extends Component {

  get string() {
    let {
      args: { value },
    } = this;

    try {
      return JSON.stringify(value, null, 2);
    } catch (err) {
      return err.stack;
    }
  }

}
