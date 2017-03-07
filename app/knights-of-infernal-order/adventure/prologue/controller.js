import Ember from 'ember';

export default Ember.Controller.extend({
actions: {
  player: function() {
    var myAudio = document.getElementById("myAudio");
    if (myAudio.paused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  },
}

});
