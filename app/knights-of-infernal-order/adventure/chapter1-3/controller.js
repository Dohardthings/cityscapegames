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
    check: function(){
      var value = document.getElementById('input1').value;
      var check = /(166)|(2nd)/g.test(value);
      //check will be true or false
      if (check){
      console.log("woohoo!");
      this.transitionToRoute('knights-of-infernal-order.adventure.chapter1-4');
      };
      if (!check){
        console.log("fuuuuck!");
        window.alert("Nope!  You haven't got it yet! Keep Researching or try a hint!")

      };


    }
  }
});