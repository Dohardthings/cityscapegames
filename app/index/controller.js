import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    check: function(){
      var value = document.getElementById('dnInput').value;
      var check = /\w/g.test(value);
      //check will be true or false
      if (check){
      console.log("woohoo!");
      this.transitionToRoute('knights-of-infernal-order.adventure.prologue');
      }
      if (!check){
        console.log("fuuuuck!");
        window.alert("We're sorry, but we do not recognize that code.  Please try another or call our customer help line for assistance.");

      };
    },

  }
});
