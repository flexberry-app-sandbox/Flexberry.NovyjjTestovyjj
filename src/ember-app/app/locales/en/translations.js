import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNovyjj_testovyjjMainClassLForm from './forms/i-i-s-novyjj-testovyjj-main-class-l';
import IISNovyjj_testovyjjMainClassEForm from './forms/i-i-s-novyjj-testovyjj-main-class-e';
import IISNovyjj_testovyjjMainClassModel from './models/i-i-s-novyjj-testovyjj-main-class';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novyjj-testovyjj-main-class': IISNovyjj_testovyjjMainClassModel
  },

  'application-name': 'Novyjj_testovyjj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Novyjj_testovyjj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_testovyjj',
          title: 'Novyjj_testovyjj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'novyjj-testovyjj': {
          caption: 'Novyjj_testovyjj',
          title: 'Novyjj_testovyjj',
          'i-i-s-novyjj-testovyjj-main-class-l': {
            caption: 'Main class',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-novyjj-testovyjj-main-class-l': IISNovyjj_testovyjjMainClassLForm,
    'i-i-s-novyjj-testovyjj-main-class-e': IISNovyjj_testovyjjMainClassEForm
  },

});

export default translations;
