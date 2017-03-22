import Ember from 'ember';

export default Ember.Controller.extend({

actions: {

  check: function(){
    var value = document.getElementById('betaInput').value;
    var check = /(78375)|(09374)|(45006)|(56734)|(02005)|(11593)|(99376)|(66008)|(93841)|(90992)/g.test(value);
    //check will be true or false
    if (check){
    console.log("woohoo!");
    this.transitionToRoute('nashville-adventures');
    }
    if (!check){
      console.log("fuuuuck!");
      window.alert("Your code doesn't seem to be in our records.  Please try again.");

    };
  },
}
});
