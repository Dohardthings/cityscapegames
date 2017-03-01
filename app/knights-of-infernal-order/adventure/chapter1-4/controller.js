import Ember from 'ember';

export default Ember.Controller.extend({
  initial: localStorage.setItem('clicks', '0'),
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

    toggleModal4: function() {
      if(localStorage.getItem('clicks') === '0') {
        this.toggleProperty('isShowingModal');
        return localStorage.setItem('clicks', '1');
      }
      if(localStorage.getItem('clicks') === '1'){
        this.toggleProperty('isShowingModal2')
        return localStorage.setItem('clicks', '2');
      }
      if(localStorage.getItem('clicks') >= '2') {
        return this.toggleProperty('isShowingModal3')
      }
    },

    check: function(){
      var value = document.getElementById('input2').value;
      var check = /(1875)/g.test(value);
      //check will be true or false
      if (check){
      console.log("woohoo!");
      this.transitionToRoute('knights-of-infernal-order.adventure.chapter1-5');
      }
      if (!check){
        console.log("fuuuuck!");
        window.alert("Nope!  You haven't got it yet! Keep Researching or try a hint!");

      };


    },
  }
});
