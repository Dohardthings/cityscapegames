import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  var getEndTime = localStorage.getItem('deadline');
    return  Date.parse(getEndTime) - Date.parse(new Date());

  }
});
