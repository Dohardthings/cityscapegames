import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    foo() {
      this._super();
      console.log(this.get("model"));
      if(this.get("model") <= 0) {
        console.log("Oh snap, you outta time!");
        this.transitionToRoute('knights-of-infernal-order.justintime');
      }
      if(this.get("model") > 0) {
        console.log("Turns out you got time left!")
        this.transitionToRoute('we-will-contact-you');

      }
    }

  }

});
