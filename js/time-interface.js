var alarmObj = require('./../js/time.js');
var time = moment().format('h:mm:ss A MMMM Do YYYY');


function updateTime() {
  time = moment().format('h:mm:ss A MMMM Do YYYY');
  document.getElementById('time').innerHTML = time;
  if (alarm === moment().format('h:mm:ss A MMMM Do YYYY'))
    return console.log("DINGDINGDINGDINGDINGDINGDINGDINGDINGDING");
  }
  setTimeout(updateTime, 1000);
}

function ringTheAlarm() {

};

$(document).ready(function() {
  $("#time").text(updateTime());

  $("#alarmForm").submit(function(event) {
    event.preventDefault();
    var alarm = $("#alarm").val();
    ringTheAlarm(alarm);
    document.getElementById('#alarmPost').innerHTML = '<h4>This is your alarm: ' + alarm + '</h4>';
  });
});
