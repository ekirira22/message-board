import Ember from 'ember';

export default Ember.Component.extend({
  addQuery: false,
  actions: {
    showQuery() {
      this.set('addQuery', true);
    },
    saveQuery1() {
      var params = {
        name: this.get('name'),
        query: this.get('query'),
        content: this.get('content'),
      };
      this.set('addQuery', false);
      this.sendAction('saveQuery2', params);
    },
    hideQuery() {
      this.set('addQuery', false)
    }
  }
});
