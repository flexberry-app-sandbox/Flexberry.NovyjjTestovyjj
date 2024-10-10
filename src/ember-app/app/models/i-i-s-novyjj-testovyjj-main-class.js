import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as MainClassMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-testovyjj-main-class';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(MainClassMixin, Validations, {
});

defineProjections(Model);

export default Model;
