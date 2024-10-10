import {
  defineNamespace,
  defineProjections,
  Model as MainClassMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-testovyjj-main-class';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(MainClassMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
