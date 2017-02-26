import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModal: false,
  isShowingModal2: false,
  isShowingModal3: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    toggleModal2: function() {
      this.toggleProperty('isShowingModal2');
    },
    toggleModal3: function() {
      this.toggleProperty('isShowingModal3');
    },
  }
});
