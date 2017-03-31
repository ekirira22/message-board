import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  question: DS.attr(),
  content: DS.attr(),
  answer: DS.attr()
});
