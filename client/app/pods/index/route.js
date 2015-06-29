import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      pages: this.store.findAll('page')
    })
  },
});
