import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      var params = {
        author: this.get('author'),
        answer: this.get('answer'),
        link: this.get('link')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
    },
    hideReview() {
      this.set('addNewReview', false)
    }
  }
});
