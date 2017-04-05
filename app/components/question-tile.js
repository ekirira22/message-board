import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    },
    delete(question) {
      if (confirm("Are You sure you want to delete this Question, you can't undo this!!?")) {
        this.sendAction('destroyQuery', question);
      }
    }
  }
});
