import Ember from 'ember';

export default Ember.Route.extend({
  var user = {
    email: this.get('email'),
  };

  // actions: {
  //   pressed: function() {
  //     Ember.$("#confirm").append("You made it!!")
  //   }
  // }
});
