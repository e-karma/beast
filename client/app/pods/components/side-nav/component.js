import Ember from 'ember';

export default Ember.Component.extend({
  menu: [{
    'title': 'Dashboard',
    'link': 'index',
    'icon': 'fa-dashboard'
  }, {
    'title': 'Posts',
    'link': 's.posts',
    'icon': 'fa-file'
  }, {
    'title': 'Users',
    'link': 's.users.index',
    'icon': 'fa-users'
  }, {
    'title': 'Marketing',
    'link': 's.mktg',
    'icon': 'fa-bar-chart'
  }, {
    'title': 'CRM',
    'link': 's.vendors',
    'icon': 'fa-folder-open'
  }, {
    'title': 'eMail',
    'link': 's.emails',
    'icon': 'fa-envelope'
  }, {
    'title': 'Todos',
    'link': 's.todos',
    'icon': 'fa-check'
  }, {
    'title': 'Settings',
    'link': 's.settings',
    'icon': 'fa-cog'
  }, {
    'title': 'eCommerce',
    'link': 's.store',
    'icon': 'fa-shopping-cart'
  },
  // {
  //   'title': 'Media',
  //   'link': 's.media',
  //   'icon': 'fa-laptop'
  // },
  {
    'title': 'Page Manager',
    'link': 's.page-manager',
    'icon': 'fa-file',
    'submenu': [{
        'title': 'List Pages',
        'link': 's.page-manager.index'
      }, {
        'title': 'Create New Page',
        'link': 's.page-manager.new'
      }]
      // }, {
      //     'title': 'Homepages',
      //     'link': 's.homepages',
      //     'submenu': [{
      //         'title': 'Index',
      //         'link': 's.homepages.index'
      //     }, {
      //         'title': 'Create Homepage',
      //         'link': 's.homepages.create'
      //     }, ]
  }],
  actions: {
    invalidateSession() {
      this.sendAction('invalidateSession');
    },
    back() {
      this.sendAction('back');
    },
    forward() {
      this.sendAction('forward');
    }
  }
});
