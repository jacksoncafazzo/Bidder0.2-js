var alarmMoment = [];
$(document).ready(function() {
  $('#alarmForm').submit(function(event) {
    event.preventDefault();
    var alarm = $('#alarm').val();
    $('#alarms').append('<li class="list-group-item">' + moment(alarm, 'HH:mm').format('LT') + '</li>');
    $('#alarm').val('');
    alarmMoment.push(moment(alarm, 'HH:mm'));
    console.log(alarmMoment);
  });
});
