var update = require('./../js/update.js').update;
var ringTheAlarm = require('./../js/alarm.js').ringTheAlarm;

$(document).ready(function() {
  clock = function() {
    var dingding = ringTheAlarm(alarmMoment, update());
    console.log("your alarm says: " + dingding);
    if(dingding === true) {
      $('#buzzer').fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);
    }
    $('#currentTime').html(update().format('LTS'));
  };
  setInterval(clock, 1000);
  });
