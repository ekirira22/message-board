import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question')
  },
  actions: {
    saveQuery3(params) {
      var newQuery = this.store.createRecord('question', params);
      newQuery.save();
      this.transitionTo('index');
    },
    destroyQuery(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
