import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  content: DS.attr(),
  answer: DS.attr()
});
