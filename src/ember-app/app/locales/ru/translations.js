import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Novyjj_testovyjj',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_testovyjj',
          title: 'Novyjj_testovyjj'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-novyjj-testovyjj-main-class-l': IISNovyjj_testovyjjMainClassLForm,
    'i-i-s-novyjj-testovyjj-main-class-e': IISNovyjj_testovyjjMainClassEForm
  },

});

export default translations;
