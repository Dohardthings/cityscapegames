import Ember from 'ember';
export default Ember.Controller.extend({
  isShowingModalRules: false,
  init: function() {
    this._super();
    Ember.run.schedule("afterRender", this, function() {
      this.send("foo");
    });
  },

  actions: {
    foo() {

      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 5);
        return {'total': t, 'hours': hours, 'minutes': minutes, 'seconds': seconds};
      }
      let deadline = localStorage.getItem('deadline');
      if (!deadline) {
        deadline = (new Date(Date.parse(new Date()) + 14400000)).toString();
        localStorage.setItem('deadline', deadline);
      }

      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');



        function updateClock() {
          var t = getTimeRemaining(endtime);

          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

          if (t.total <= 0) {
            clearInterval(timeinterval);
            hoursSpan.innerHTML = ('0');
            minutesSpan.innerHTML = ('0');
            secondsSpan.innerHTML = ('0');
          }
        }
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);

      }

      initializeClock('clockdiv', deadline);
      // var text = document.getElementById('clockdiv');
      // text.addEventListener("load", init(), false);
      //
      // function changeColor() {
      //   text.style.background = "#F00";
      // }
      //
      // function init() {
      //   setTimeout(changeColor, 14400000);
      // }
    },
    toggleModalRules() {
      this.toggleProperty('isShowingModalRules');
    },
    noClock() {
      var clock = document.getElementById('clockdiv');
      clock.innerHTML = '';
    },
  }
});
