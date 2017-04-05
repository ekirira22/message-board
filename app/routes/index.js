import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      reviews: this.store.findAll('review')
    });
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
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var question = params.question;
      question.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return question.save();
      });
      this.transitionTo('index');
    }
  }
});
