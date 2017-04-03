import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  query: DS.attr(),
  content: DS.attr(),
  reviews: DS.hasMany('review', {
    async: true
  })
});
