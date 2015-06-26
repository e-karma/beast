import Ember from 'ember';

export default Ember.Component.extend({
  menu: [{
    'title': 'Dashboard',
    'link': 'index',
    'icon': 'fa-dashboard'
  }, {
    'title': 'Media',
    'link': 's.media',
    'icon': 'fa-laptop'
  }, {
    'title': 'Posts',
    'link': 's.posts',
    'icon': 'fa-folder-open'
  }, {
    'title': 'Users',
    'link': 's.users.index',
    'icon': 'fa-bar-chart-o'
  }, {
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
