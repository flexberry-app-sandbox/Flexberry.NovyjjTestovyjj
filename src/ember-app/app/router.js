import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-novyjj-testovyjj-main-class-l');
  this.route('i-i-s-novyjj-testovyjj-main-class-e',
  { path: 'i-i-s-novyjj-testovyjj-main-class-e/:id' });
  this.route('i-i-s-novyjj-testovyjj-main-class-e.new',
  { path: 'i-i-s-novyjj-testovyjj-main-class-e/new' });
});

export default Router;
